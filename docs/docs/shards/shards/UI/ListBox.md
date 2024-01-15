---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.ListBox

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||A sequence of values. | | [`[Any]`](../../types/#seq) |
| `<output>` ||The selected value. | | [`Any`](../../types/#any) |
| `Index` |  | The index of the selected item. | `None` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar)[`None`](../../types/#none) |
| `IsSelected` |  | Predicate that should return selection state of an item, receives the index in the list, should return true/false. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Clicked` |  | Action to perform if an element of the list is being clicked. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Template` |  | Custom rendering | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

--8<-- "includes/experimental.md"

A list selection.

--8<-- "includes/license.md"

