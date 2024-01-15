---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Frame

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Contents shards of the frame. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `InnerMargin` |  | The margin inside the frame, between the outline and the contents. | `None` | [`Float4`](../../types/#float4) |
| `OuterMargin` |  | The margin outside the frame. | `None` | [`Float4`](../../types/#float4) |
| `Rounding` |  | Rounding radiuses for the corners. | `None` | [`Float4`](../../types/#float4) |
| `FillColor` |  | The color filling the background of the frame. | `None` | [`Color`](../../types/#color)[`&Color`](../../types/#contextvar)[`None`](../../types/#none) |
| `StrokeColor` |  | The color for the frame outline. | `None` | [`Color`](../../types/#color)[`&Color`](../../types/#contextvar)[`None`](../../types/#none) |
| `StrokeWidth` |  | The width of the frame outline. | `None` | [`Float`](../../types/#float) |

</div>

Visually groups the contents together.

--8<-- "includes/license.md"

