---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.PopupWrapper

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Widget shard(s) of the popup. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `MinWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | The minimum width of the popup that should appear below or above the button. By default, it is always at least as wide as the button. | `None` | [`Float`](../../types/#float)[`None`](../../types/#none) |
| `AboveOrBelow` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Whether the location of the popup should be above or below the button. | `None` | [`PopupLocation`](../../../enums/PopupLocation) |
| `ID` | :fontawesome-solid-circle-plus:{title="No"} No  | An optional ID value to make the popup unique if the label text collides. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Widget` | :fontawesome-solid-circle-plus:{title="No"} No  | The shard(s) to execute that should contain a widget that supports having this popup generated for it upon being clicked. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to execute and render inside the popup ui when the button is pressed. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

Wraps a button with a popup that can act as a drop-down menu or suggestion menu.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/PopupWrapper/3.shs"
  ```

  ```
  --8<-- "samples/shards/UI/PopupWrapper/3.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/PopupWrapper/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/PopupWrapper/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

