---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Window

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Contents shards of the rendered window. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Title` |  | The window title displayed on the titlebar. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Position` |  | Absolute position; or when anchor is set, relative offset. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `Anchor` |  | Corner or center of the screen. | `None` | [`Anchor`](../../../enums/Anchor) |
| `Width` |  | The width of the rendered window. | `None` | [`Int`](../../types/#int)[`None`](../../types/#none) |
| `Height` |  | The height of the rendered window. | `None` | [`Int`](../../types/#int)[`None`](../../types/#none) |
| `Closed` |  | When provided with a callback, this window will have a close button and call this when pressed. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Flags` |  | Window flags. | `None` | [`WindowFlags`](../../../enums/WindowFlags)[`[WindowFlags]`](../../types/#seq) |
| `ID` |  | An optional ID value to make the window unique if the title name collides. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

Creates a floating window which can be dragged, closed, collapsed, and resized.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Window/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Window/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

