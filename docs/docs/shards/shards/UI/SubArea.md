---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.SubArea

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Offset` | :fontawesome-solid-circle-plus:{title="No"} No  | Relative offset. (X/Y) | `none` | [`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |
| `Anchor` | :fontawesome-solid-circle-plus:{title="No"} No  | The anchor for the inner UI, relative to the available space | `none` | [`Anchor`](../../../enums/Anchor)[`Var(Anchor)`](../../types/#contextvar) |
| `Pivot` | :fontawesome-solid-circle-plus:{title="No"} No  | The pivot for the inner UI | `none` | [`Anchor`](../../../enums/Anchor)[`Var(Anchor)`](../../types/#contextvar) |

</div>

Places UI element at a specific position.

--8<-- "includes/license.md"

