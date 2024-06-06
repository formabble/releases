---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Dispatch

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Form` |  | The UUID or Entity ID of the form to update. | `None` | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`&Int16`](../../types/#contextvar)[`&Fbl.TypedFormId`](../../types/#contextvar) |
| `Behavior` |  | The behavior where the variable to update is. | `None` | [`WirePoolType`](../../../enums/WirePoolType)[`&WirePoolType`](../../types/#contextvar) |
| `Name` |  | The variable name to update. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Key` |  | The optional key name if the variable to update is a table. | `None` | [`None`](../../types/#none)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Optional` |  | The target value or behaviors might not exist, in this case the dispatch does nothing. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Undoable` |  | If true, the dispatch will be flagged as undoable (when Undo/Redo is supported). | `false` | [`Bool`](../../types/#bool) |
| `Unsafe` |  | Don't perform type checks. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

