---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Is

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input of any type is accepted. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Returns true if the input is equal to the operand and false otherwise. | | [`Bool`](../../types/#bool) |
| `Value` | :fontawesome-solid-circle-plus:{title="No"} No  | The value to check against. | `0` | [`Any`](../../types/#any) |

</div>

Checks if the input is equal to the operand.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Is/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Is/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

