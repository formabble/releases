---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.ListBox

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A sequence of values. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The selected value. | | [`Any`](../../types/#any) |
| `Index` | :fontawesome-solid-circle-plus:{title="No"} No  | The index of the selected item. | `none` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`None`](../../types/#none) |
| `IsSelected` | :fontawesome-solid-circle-plus:{title="No"} No  | Predicate that should return selection state of an item, receives the index in the list, should return true/false. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Clicked` | :fontawesome-solid-circle-plus:{title="No"} No  | Action to perform if an element of the list is being clicked. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Template` | :fontawesome-solid-circle-plus:{title="No"} No  | Custom rendering | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

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

