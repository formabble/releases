---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Window

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the rendered window. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Title` | :fontawesome-solid-circle-plus:{title="No"}  | The window title displayed on the titlebar. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Position` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Absolute position; or when anchor is set, relative offset. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `Anchor` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Corner or center of the screen. | `None` | [`Anchor`](../../../enums/Anchor) |
| `Width` | :fontawesome-solid-circle-plus:{title="No"}  | The width of the rendered window. | `None` | [`Int`](../../types/#int)[`None`](../../types/#none) |
| `Height` | :fontawesome-solid-circle-plus:{title="No"}  | The height of the rendered window. | `None` | [`Int`](../../types/#int)[`None`](../../types/#none) |
| `Closed` | :fontawesome-solid-circle-plus:{title="No"}  | When provided with a callback, this window will have a close button and call this when pressed. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Flags` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Window flags. | `None` | [`WindowFlags`](../../../enums/WindowFlags)[`[WindowFlags]`](../../types/#seq) |
| `ID` | :fontawesome-solid-circle-plus:{title="No"}  | An optional ID value to make the window unique if the title name collides. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"}  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

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

