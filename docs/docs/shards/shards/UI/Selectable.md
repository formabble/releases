---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Selectable

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Bool`](../../types/#bool) |
| `Contents` |  | The UI contents to wrap, contain, and detect for selection. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `IsSelected` |  | Callback function for checking if the contents are currently selected. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Clicked` |  | Callback function for the contents of this shard is clicked. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

A wrapper that detects selection over the provided contents.

--8<-- "includes/license.md"

