export const globalStyles = `
.person-container {
  padding: 24px 32px;
  background: #ffffff;

  /* Mono/Gray 30 */
  border: 1px solid #dde7f0;

  /* Shadow XS */
  box-shadow: 0px 1px 5px rgba(27, 33, 40, 0.07);
  border-radius: 6px;
  max-width: var(--person-container-max-width);
  display: flex;
}

.person-container img {
  width: 54px;
  height: 54px;
  border-radius: 100%;
  margin-right: 20px;
}

.avatar-mobile {
  display: none;
}

.person-container hr {
  border: none;
  background-color: #dde7f0;
  height: 1px;
  margin: 12px 0px;
}

.person-container a {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
  /* identical to box height, or 129% */
  /* Mono/Gray 70 */
  color: #64778c;
}

.person-container svg {
  margin-right: 8px;
}

.person-link {
  display: flex;
  align-items: center;
}

.person-link svg {
  transform: translateY(2px);
}

.person-name {
  font-family: "OpenSauceTwoMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 120%;
  /* identical to box height, or 30px */

  /* Mono/Gray 90 */

  color: #37434f;
}

.person-employer {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* Mono/Gray 70 */

  color: #64778c;
}

.person-employer-breaker {
  font-weight: 400;
}

@media screen and (max-width: 500px) {
  .person-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 100%;
    padding: 0px;
  }

  .person-name-container {
    padding: 12px 24px;
  }

  .person-links-container {
    padding: 14px 24px 16px 24px;
  }

  .person-text-container {
    width: 100%;
  }

  .person-container img {
    margin: 12px 0;
  }

  .person-container hr {
    margin: 0px;
  }

  .avatar-mobile {
    display: unset;
  }

  .avatar-desktop {
    display: none;
  }
}`;
