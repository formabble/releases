---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Dispatch

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to be dispatched to update a variable in a specified form. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Form` | :fontawesome-solid-circle-plus:{title="No"} No  | The UUID or Entity ID of the form to update, if None, it will dispatch to the current form. | `None` | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`&Int16`](../../types/#contextvar)[`&Fbl.TypedFormId`](../../types/#contextvar) |
| `Behavior` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The behavior where the variable to update is. | `None` | [`WirePoolType`](../../../enums/WirePoolType)[`&WirePoolType`](../../types/#contextvar) |
| `Name` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable name to update. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The optional key name if the variable to update is a table. | `None` | [`None`](../../types/#none)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Optional` | :fontawesome-solid-circle-plus:{title="No"} No  | The target value or behaviors might not exist, in this case the dispatch does nothing. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Undoable` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, the dispatch will be flagged as undoable (when Undo/Redo is supported). | `false` | [`Bool`](../../types/#bool) |
| `Unsafe` | :fontawesome-solid-circle-plus:{title="No"} No  | Don't perform type checks. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>

Dispatches a value to update a variable in a specified form. The form is identified by its UUID or Entity ID, and the variable is identified by its behavior and name. This operation is asynchronous and can cross subsystem boundaries, serving as a means to communicate between them. However, when used within the same subsystem, it will execute inline. Supports optional updates and can be marked as undoable.

--8<-- "includes/license.md"

