---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Area

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Position` |  | Absolute UI position; or when anchor is set, relative offset. (X/Y) | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `Pivot` |  | The pivot for the inner UI | `None` | [`Anchor`](../../../enums/Anchor)[`&Anchor`](../../types/#contextvar) |
| `Anchor` |  | Side of the screen to anchor the UI to. | `None` | [`Anchor`](../../../enums/Anchor)[`&Anchor`](../../types/#contextvar) |
| `Order` |  | Paint layer to be used for this UI. Default is background | `None` | [`Order`](../../../enums/Order) |

</div>

Places UI element at a specific position.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Area/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Area/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Area/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Area/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

