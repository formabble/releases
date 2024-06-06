---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.SubArea

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Offset` |  | Relative offset. (X/Y) | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `Anchor` |  | The anchor for the inner UI, relative to the available space | `None` | [`Anchor`](../../../enums/Anchor)[`&Anchor`](../../types/#contextvar) |
| `Pivot` |  | The pivot for the inner UI | `None` | [`Anchor`](../../../enums/Anchor)[`&Anchor`](../../types/#contextvar) |

</div>

Places UI element at a specific position.

--8<-- "includes/license.md"

