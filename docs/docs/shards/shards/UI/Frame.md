---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Frame

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the frame. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"}  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `InnerMargin` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The margin inside the frame, between the outline and the contents. | `None` | [`Float4`](../../types/#float4) |
| `OuterMargin` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The margin outside the frame. | `None` | [`Float4`](../../types/#float4) |
| `Rounding` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Rounding radiuses for the corners. | `None` | [`Float4`](../../types/#float4) |
| `FillColor` | :fontawesome-solid-circle-plus:{title="No"}  | The color filling the background of the frame. | `None` | [`Color`](../../types/#color)[`&Color`](../../types/#contextvar)[`None`](../../types/#none) |
| `StrokeColor` | :fontawesome-solid-circle-plus:{title="No"}  | The color for the frame outline. | `None` | [`Color`](../../types/#color)[`&Color`](../../types/#contextvar)[`None`](../../types/#none) |
| `StrokeWidth` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The width of the frame outline. | `None` | [`Float`](../../types/#float) |

</div>

Visually groups the contents together.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Frame/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Frame/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

