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
| `Title` | :fontawesome-solid-circle-plus:{title="No"} No  | The window title displayed on the title bar. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Position` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Absolute position; or when anchor is set, relative offset. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `Anchor` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Corner or center of the screen. | `None` | [`Anchor`](../../../enums/Anchor) |
| `MinWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | The minimum width of the window. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `MinHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | The minimum height of the window. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `MaxWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | The maximum width of the window. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `MaxHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | The maximum height of the window. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `FixedWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | The fixed size of the window. overrides all other min/max sizes. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `FixedHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | The fixed size of the window. overrides all other min/max sizes. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `Closed` | :fontawesome-solid-circle-plus:{title="No"} No  | When provided with a callback, this window will have a close button and call this when pressed. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Flags` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Window flags. | `None` | [`WindowFlags`](../../../enums/WindowFlags)[`[WindowFlags]`](../../types/#seq) |
| `ID` | :fontawesome-solid-circle-plus:{title="No"} No  | An optional ID value to make the window unique if the title name collides. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Transparency` | :fontawesome-solid-circle-plus:{title="No"} No  | If not None, it sets the window's transparency level based on the alpha value. | `false` | [`Float`](../../types/#float)[`None`](../../types/#none) |

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

