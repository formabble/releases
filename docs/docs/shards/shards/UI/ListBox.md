---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.ListBox

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A sequence of values. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||The selected value. | | [`Any`](../../types/#any) |
| `Index` | :fontawesome-solid-circle-plus:{title="No"}  | The index of the selected item. | `None` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar)[`None`](../../types/#none) |
| `IsSelected` | :fontawesome-solid-circle-plus:{title="No"}  | Predicate that should return selection state of an item, receives the index in the list, should return true/false. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Clicked` | :fontawesome-solid-circle-plus:{title="No"}  | Action to perform if an element of the list is being clicked. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Template` | :fontawesome-solid-circle-plus:{title="No"}  | Custom rendering | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

A list selection.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/ListBox/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/ListBox/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/ListBox/3.shs"
  ```

  ```
  --8<-- "samples/shards/UI/ListBox/3.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/ListBox/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/ListBox/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

