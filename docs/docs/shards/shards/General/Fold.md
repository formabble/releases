---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fold

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The sequence to fold. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||The resulting value after folding the sequence. | | [`Any`](../../types/#any) |
| `Apply` | :fontawesome-solid-circle-plus:{title="No"} No  | The function to apply to each item of the sequence. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Initial` | :fontawesome-solid-circle-plus:{title="No"} No  | The initial value of the accumulator. If not provided the shard will fail if the input sequence is empty. | `none` | [`Any`](../../types/#any)[`Var(Any)`](../../types/#contextvar) |

</div>

Folds a sequence into a single value by applying an operation (specified in the Apply parameter) to each item of the sequence. The operation can transform the type. Note that this shard is able to use the $0 internal variable for the accumulated value, $1 for the current item, and $i for the current index.

--8<-- "includes/license.md"

