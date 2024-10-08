---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ToFloat

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes input values of type `Int`, `Float`, `String`, or a collection  of `Int`s and `Float`s. Note that the shard can only convert strings that represent numerical values, such as "5", and not words like "Five". | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs a numerical value that can include a fractional or decimal component. | | [`Any`](../../types/#any) |

</div>

Converts various input types to type Float.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/ToFloat/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/ToFloat/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

