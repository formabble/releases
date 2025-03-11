---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.TableHeader

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents for the header. | `none` | [`[Shard [Shard]]`](../../types/#seq) |
| `WidthType` | :fontawesome-solid-circle-plus:{title="No"} No  | Column width type: auto, initial, exact, or remainder. | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Width` | :fontawesome-solid-circle-plus:{title="No"} No  | Width value for initial or exact width types. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`None`](../../types/#none) |
| `MinWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Minimum width of the column. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`None`](../../types/#none) |
| `MaxWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum width of the column. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Clip` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to clip content that doesn't fit in the column. | `none` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Resizable` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether this column can be resized. | `none` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Defines a header for a Table column.

--8<-- "includes/license.md"

