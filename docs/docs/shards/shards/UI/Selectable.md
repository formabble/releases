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
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents to wrap, contain, and detect for selection. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `IsSelected` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for checking if the contents are currently selected. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Clicked` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for the contents of this shard is clicked. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `DoubleClicked` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for the contents of this shard is clicked. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `ContextMenu` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for the right-click context menu. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `DragData` | :fontawesome-solid-circle-plus:{title="No"} No  | Enables dragging and sets the data for drag operations | `none` | [`Any`](../../types/#any) |
| `ID` | :fontawesome-solid-circle-plus:{title="No"} No  | An optional ID value in case of ID conflicts. | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar)[`None`](../../types/#none) |

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

