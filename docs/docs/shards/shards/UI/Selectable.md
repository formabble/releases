---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Selectable

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Bool`](../../types/#bool) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents to wrap, contain, and detect for selection. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `IsSelected` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for checking if the contents are currently selected. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Clicked` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for the contents of this shard is clicked. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `DoubleClicked` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for the contents of this shard is clicked. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `ContextMenu` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for the right-click context menu. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `ID` | :fontawesome-solid-circle-plus:{title="No"} No  | An optional ID value in case of ID conflicts. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

A wrapper that detects selection over the provided contents.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Selectable/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Selectable/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

