---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ToInt8

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes input values of type `Int`, `Float`, `String`, or a collection  of `Int`s and `Float`s. Note that the shard can only convert strings that represent numerical values, such as "5", and not words like "Five". | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs a vector of eight Int elements. | | [`Any`](../../types/#any) |

</div>

Converts various input types to a vector of eight Int elements. If a single value or a collection with less than 8 elements is provided, the remaining unaccounted elements in the resulting vector will be set to 0.

--8<-- "includes/license.md"

