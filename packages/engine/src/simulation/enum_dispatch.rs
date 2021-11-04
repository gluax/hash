/// enum_dispatch is a crate that provides a procedural macro to emulate dynamic dispatch without
/// as much of the associated slow-down. This allows trait objects to become concrete compound types.
/// We also use it to create compound nested enum types even when we aren't interested in the trait
/// behavior. The crate has a variety of subtleties that can make implementations difficult, to help
/// alleviate some of those, this module wraps certain logic.
///
/// # Quick Usage Guide:
/// Instead of `use enum_dispatch::enum_dispatch` in a module in src/simulation add
/// `use crate::simulation::enum_dispatch::*;`
/// If creating an associated trait object as intended, then follow the crate documentation,
/// otherwise if creating an enum _without a trait_ shared between variants do annotate with:
/// ```
/// #[enum_dispatch(RegisterWithoutTrait)]
/// enum SomeEnum {
///     Foo
/// }
/// ```
/// Finally add `pub use` imports to this file so that all the downstream variants are in scope
/// ```pub use crate::simulation::some_module::Foo```
///
/// # Detailed Reasoning
///
/// ## Enums without traits
/// Using enum_dispatch on an enum without an associated trait adds some complexity as
/// enum_dispatch requires a form of registration where you need to do one of the following:
/// ```
/// #[enum_dispatch]
/// trait SomeTrait { fn some_method(&self); }
/// #[enum_dispatch(SomeTrait)]
/// enum SomeEnum { Foo, Bar }
/// //...
/// ```
/// *or*
/// ```
/// #[enum_dispatch(SomeEnum)]
/// trait SomeTrait { fn some_method(&self); }
/// #[enum_dispatch]
/// enum SomeEnum { Foo, Bar }
/// //...
/// ```
/// where the `//...` above is something like:
/// ```
/// struct Foo {}
/// impl SomeTrait for Foo { fn some_method(&self) {} }
/// struct Bar {}
/// impl SomeTrait for Bar { fn some_method(&self) {} }
/// ```
/// enum_dispatch *requires* that the annotation on either the trait or the enum has the other as an
/// argument. Without this, the macro fails to work and doesn't generate `into` methods as it needs
/// the enum and trait to be linked. Meaning when we want to create an enum without any
/// associated functional trait it's necessary to attach an empty trait to 'register' it with
/// enum_dispatch. The empty trait is provided in this module as `RegisterWithoutTrait`.
///
/// ## Why use crate::simulation::enum_dispatch::*
/// The enum_dispatch module requires *all* downstream variants and types to be in scope at the
/// macro invocation. If there are nested enum_dispatches across multiple modules this can cause
/// a nightmare of imports. Because of this, we `pub use` all variants in this one module to easily
/// bring them in scope.
// TODO: Is it possible to write custom lint rule to warn when `use enum_dispatch::enum_dispatch` instead of `use crate::simulation::enum_dispatch::*`
pub use enum_dispatch::enum_dispatch;

pub use crate::config::TaskDistributionConfig;
pub use crate::datastore::table::task_shared_store::TaskSharedStore;
pub use crate::simulation::{
    packages::{
        context::{ContextTask, ContextTaskMessage, ContextTaskResult},
        init::{packages::jspy::JsPyInitTaskMessage, InitTask, InitTaskMessage, InitTaskResult},
        output::{OutputTask, OutputTaskMessage, OutputTaskResult},
        state::{
            packages::behavior_execution::tasks::ExecuteBehaviorsTask, StateTask, StateTaskMessage,
            StateTaskResult,
        },
    },
    task::{
        access::StoreAccessVerify,
        args::GetTaskArgs,
        handler::{SplitConfig, WorkerHandler, WorkerPoolHandler},
        msg::{TargetedTaskMessage, TaskMessage},
        result::TaskResult,
    },
    // TODO OS - enum_dispatch is obfuscating the error, but somewhere a std Result is being used instead of a
    //   wrapped result giving an error about expected 2 generic arguments. The compiler shows this error as
    //   happening within the crate::simulation::task::Task enum_dispatch annotation which isn't helpful.
    //   Defining it as a pub use here however means the error goes away, so is almost certainly in a module that's
    //   importing enum_dispatch::* or one importing * from a module that imports enum_dispatch::*
    Result,
};
/// An empty trait to be used with enum_dispatch so that it generates into and try methods for enums
/// without any other associated trait. This allows enum_dispatch to register the enum and link it
/// with this empty trait.
///
/// # Usage:
/// If creating an enum with enum_dispatch without any traits then do:
/// ```
/// #[enum_dispatch(RegisterWithoutTrait)]
/// enum SomeEnum { /*...*/ }
/// ```
#[enum_dispatch]
pub trait RegisterWithoutTrait {}
