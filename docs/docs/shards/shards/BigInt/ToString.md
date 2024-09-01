---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.ToString

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||String representation of the big integer value. | | [`String`](../../types/#string) |

</div>

Converts the value to a string representation.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/ToString/ToString.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/ToString/ToString.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

