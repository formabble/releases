---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.Pow

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `<output>` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Operand` |  | The integer operand, can be a variable | `None` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |

</div>



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

