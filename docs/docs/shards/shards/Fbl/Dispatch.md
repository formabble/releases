---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Dispatch

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Form` | :fontawesome-solid-circle-plus:{title="No"} No  | The UUID or Entity ID of the form to update. | `None` | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`&Int16`](../../types/#contextvar)[`&Fbl.TypedFormId`](../../types/#contextvar) |
| `Behavior` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The behavior where the variable to update is. | `None` | [`WirePoolType`](../../../enums/WirePoolType)[`&WirePoolType`](../../types/#contextvar) |
| `Name` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable name to update. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The optional key name if the variable to update is a table. | `None` | [`None`](../../types/#none)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Optional` | :fontawesome-solid-circle-plus:{title="No"} No  | The target value or behaviors might not exist, in this case the dispatch does nothing. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Undoable` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, the dispatch will be flagged as undoable (when Undo/Redo is supported). | `false` | [`Bool`](../../types/#bool) |
| `Unsafe` | :fontawesome-solid-circle-plus:{title="No"} No  | Don't perform type checks. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

