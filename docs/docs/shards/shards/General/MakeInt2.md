---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# MakeInt2

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||No input is required. This shard uses the values provided in the parameters to construct the vector. | | [`None`](../../types/#none) |
| `Output ➡️` ||Returns a vector of two Int elements. | | [`Any`](../../types/#any) |
| `0` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Vector element | `None` | [`&Int`](../../types/#contextvar)[`Int`](../../types/#int) |
| `1` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Vector element | `None` | [`&Int`](../../types/#contextvar)[`Int`](../../types/#int) |

</div>

Creates a vector of two Int elements from the values provided in the parameters. If fewer than two values are provided, the remaining elements will be set to 0. The alias for this shard is @i2.

--8<-- "includes/license.md"

