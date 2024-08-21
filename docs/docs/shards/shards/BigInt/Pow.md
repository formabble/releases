---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.Pow

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Returns the BigInt result of the operation as bytes. | | [`Bytes`](../../types/#bytes) |
| `Operand` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The power to which the input big integer will be raised. This must be a non-negative integer. | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |

</div>

This shard raises the input big integer to the power of the exponent specified in the  Operand parameter.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/Pow/Pow.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/Pow/Pow.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

