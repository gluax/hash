import React, { VoidFunctionComponent } from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  AuthModalLayout,
  AuthModalLayoutProps,
} from "../../Modals/AuthModal/AuthModalLayout";
import { LoginIntro } from "../../pages/auth/login/LoginIntro";
import { VerifyCode } from "../../pages/auth/VerifyCode";
import {
  VerificationCodeMetadata,
  LoginWithLoginCodeMutation,
  MutationLoginWithLoginCodeArgs,
  SendLoginCodeMutation,
  SendLoginCodeMutationVariables,
} from "../../../graphql/apiTypes.gen";
import { ApolloError, useMutation } from "@apollo/client";
import {
  sendLoginCode as sendLoginCodeMutation,
  loginWithLoginCode as loginWithLoginCodeMutation,
} from "../../../graphql/queries/user.queries";
import { AUTH_ERROR_CODES, isParsedAuthQuery } from "../../pages/auth/utils";

enum Screen {
  Intro,
  VerifyCode,
  AccountSetup,
}

type LoginModalProps = {
  onLoggedIn?: () => void;
} & Omit<AuthModalLayoutProps, "children">;

export const LoginModal: VoidFunctionComponent<LoginModalProps> = ({
  show,
  close,
  onLoggedIn,
  closeIconHidden,
}) => {
  // TODO: refactor to use useReducer
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Intro);
  const [loginIdentifier, setLoginIdentifier] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [verificationCodeMetadata, setVerificationCodeMetadata] = useState<
    VerificationCodeMetadata | undefined
  >();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  const [sendLoginCodeFn, { loading: sendLoginCodeLoading }] = useMutation<
    SendLoginCodeMutation,
    SendLoginCodeMutationVariables
  >(sendLoginCodeMutation, {
    onCompleted: ({ sendLoginCode }) => {
      setErrorMessage("");
      setVerificationCodeMetadata(sendLoginCode);
      setActiveScreen(Screen.VerifyCode);
    },
    onError: ({ graphQLErrors }) =>
      graphQLErrors.forEach(({ extensions, message }) => {
        const { code } = extensions as { code?: keyof typeof AUTH_ERROR_CODES };
        if (code === "NOT_FOUND") {
          setErrorMessage(message);
        } else {
          throw new ApolloError({ graphQLErrors });
        }
      }),
  });

  const [loginWithLoginCode, { loading: loginWithLoginCodeLoading }] =
    useMutation<LoginWithLoginCodeMutation, MutationLoginWithLoginCodeArgs>(
      loginWithLoginCodeMutation,
      {
        onCompleted: () => {
          if (onLoggedIn) onLoggedIn();
        },
        onError: ({ graphQLErrors }) =>
          graphQLErrors.forEach(({ extensions }) => {
            const { code } = extensions as {
              code?: keyof typeof AUTH_ERROR_CODES;
            };

            if (code && Object.keys(AUTH_ERROR_CODES).includes(code)) {
              setErrorMessage(AUTH_ERROR_CODES[code]);
            } else {
              throw new ApolloError({ graphQLErrors });
            }
          }),
      }
    );

  useEffect(() => {
    if (!show && activeScreen !== Screen.Intro) {
      setActiveScreen(Screen.Intro);
    }
  }, [show, activeScreen]);

  // handle magic link
  useEffect(() => {
    const { pathname, query } = router;
    if (pathname === "/login" && isParsedAuthQuery(query)) {
      const { verificationId, verificationCode } = query;
      setActiveScreen(Screen.VerifyCode);
      setVerificationCode(verificationCode);
      setTimeout(() => {
        void loginWithLoginCode({
          variables: { verificationId, verificationCode },
        });
      }, 1000);
    }
  }, [router, loginWithLoginCode]);

  const requestLoginCode = (emailOrShortname: string) => {
    setLoginIdentifier(emailOrShortname);
    void sendLoginCodeFn({ variables: { emailOrShortname } });
  };

  const login = () => {
    if (!verificationCodeMetadata) return;
    void loginWithLoginCode({
      variables: {
        verificationId: verificationCodeMetadata.id,
        verificationCode,
      },
    });
  };

  const resendLoginCode = () => {
    void requestLoginCode(loginIdentifier);
  };

  const goBack = () => {
    if (activeScreen === Screen.VerifyCode) {
      setActiveScreen(Screen.Intro);
      setErrorMessage("");
      setVerificationCodeMetadata(undefined);
      setVerificationCode("");
    }
  };

  const navigateToSignup = () => {
    void router.push("/signup");
    setTimeout(close, 500);
  };

  const renderContent = () => {
    switch (activeScreen) {
      case Screen.VerifyCode:
        return (
          <VerifyCode
            loginIdentifier={loginIdentifier}
            code={verificationCode}
            setCode={setVerificationCode}
            goBack={goBack}
            handleSubmit={login}
            loading={loginWithLoginCodeLoading}
            requestCode={resendLoginCode}
            requestCodeLoading={sendLoginCodeLoading}
            errorMessage={errorMessage}
          />
        );
      case Screen.Intro:
      default:
        return (
          <LoginIntro
            requestLoginCode={requestLoginCode}
            loading={sendLoginCodeLoading}
            errorMessage={errorMessage}
            navigateToSignup={navigateToSignup}
          />
        );
    }
  };

  return (
    <AuthModalLayout
      show={show}
      close={close}
      closeIconHidden={closeIconHidden}
    >
      {renderContent()}
    </AuthModalLayout>
  );
};
