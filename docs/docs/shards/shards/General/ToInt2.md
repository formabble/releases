---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ToInt2

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes input values of type `Int`, `Float`, `String`, or a collection  of `Int`s and `Float`s. Note that the shard can only convert strings that represent numerical values, such as "5", and not words like "Five". | | [`Any`](../../types/#any) |
| `Output ➡️` ||Returns a vector of two Int elements. | | [`Any`](../../types/#any) |

</div>

Converts various input types to a vector of two Int elements. If a single value or a collection with only one element is provided, the second element in the resulting vector will be set to 0.

--8<-- "includes/license.md"

