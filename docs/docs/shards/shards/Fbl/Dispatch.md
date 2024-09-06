---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Dispatch

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to be dispatched. This value is then used to update the variable specified in the Name: parameter | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Form` | :fontawesome-solid-circle-plus:{title="No"} No  | The typed or untyped Form ID of the form to update. If none is provided, it will dispatch to the current form. | `none` | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Var(Int16)`](../../types/#contextvar)[`Var(Fbl.TypedFormId)`](../../types/#contextvar) |
| `Behavior` | :fontawesome-solid-circle-plus:{title="No"} No  | The Behavior where the variable to update is located. | `none` | [`Behavior`](../../../enums/Behavior)[`Var(Behavior)`](../../types/#contextvar) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The variable name to update. | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The optional key name if the variable to update is a table. | `none` | [`None`](../../types/#none)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Optional` | :fontawesome-solid-circle-plus:{title="No"} No  | The target variable or Behaviors might not exist, in this case the dispatch does nothing. | `false` | [`Bool`](../../types/#bool) |
| `Undoable` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, the dispatch will be flagged as undo-able (when Undo/Redo is supported). | `false` | [`Bool`](../../types/#bool) |
| `Unsafe` | :fontawesome-solid-circle-plus:{title="No"} No  | Don't perform type checks. | `false` | [`Bool`](../../types/#bool) |

</div>

Dispatches a value to update a variable in a specified form. The form is identified by its Form ID and the variable is identified by its Behavior and Name. This operation is asynchronous and can cross Behaviors, serving as a means to communicate between them. However, when used within the same Behavior, it will execute inline. Supports optional updates and can be marked as undo-able.

--8<-- "includes/license.md"

