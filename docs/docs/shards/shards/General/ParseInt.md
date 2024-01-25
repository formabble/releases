---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ParseInt

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||A string representing a number. | | [`String`](../../types/#string) |
| `<output>` ||A signed integer equivalent to the number contained in the string input. | | [`Int`](../../types/#int) |
| `Base` |  | Numerical base (radix) that determines the valid characters and their interpretation. | `10` | [`Int`](../../types/#int) |

</div>

Converts the string representation of a number to a signed integer equivalent.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/ParseInt/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/ParseInt/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

