---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.IsMore

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Outputs true if the input big integer is greater than the big integer specified in the Operand parameter and false otherwise. | | [`Bool`](../../types/#bool) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The big integer to compare against represented as bytes. | `none` | [`Var(Bytes)`](../../types/#contextvar) |

</div>

This shard checks if the input big integer is greater than the operand.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/IsMore/IsMore.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/IsMore/IsMore.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

