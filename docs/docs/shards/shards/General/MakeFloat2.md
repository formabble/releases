---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# MakeFloat2

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||No input is required. This shard uses the values provided in the parameters to construct the vector. | | [`None`](../../types/#none) |
| `Output ➡️` ||Outputs a vector of two Float elements. | | [`Any`](../../types/#any) |
| `0` | :fontawesome-solid-circle-plus:{title="No"} No  | Vector element | `none` | [`Var(Float)`](../../types/#contextvar)[`Float`](../../types/#float) |
| `1` | :fontawesome-solid-circle-plus:{title="No"} No  | Vector element | `none` | [`Var(Float)`](../../types/#contextvar)[`Float`](../../types/#float) |

</div>

Creates a vector of two Float elements from the values provided in the parameters. If fewer than two values are provided, the remaining elements will be set to 0. The alias for this shard is @f2.

--8<-- "includes/license.md"

