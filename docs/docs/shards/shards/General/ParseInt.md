---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ParseInt

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A number represented as a string. | | [`String`](../../types/#string) |
| `Output ➡️` ||A signed integer equivalent to the number contained in the string input. | | [`Int`](../../types/#int) |
| `Base` | :fontawesome-solid-circle-plus:{title="No"} No  | Numerical base (radix) that determines the valid characters and their interpretation. | `10` | [`Int`](../../types/#int) |

</div>

Converts the string representation of a number to its signed integer equivalent.

## Details

--8<-- "details/shards/General/ParseInt.md"


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

