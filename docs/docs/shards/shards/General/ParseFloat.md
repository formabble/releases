---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ParseFloat

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A string representing a number. | | [`String`](../../types/#string) |
| `Output ➡️` ||A floating-point number equivalent to the number contained in the string input. | | [`Float`](../../types/#float) |

</div>

Converts the string representation of a number to its floating-point number equivalent.

## Details

--8<-- "details/shards/General/ParseFloat.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/ParseFloat/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/ParseFloat/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

