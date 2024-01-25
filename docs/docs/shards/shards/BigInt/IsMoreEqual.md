---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.IsMoreEqual

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `<output>` ||A boolean value repesenting the result of the logic operation. | | [`Bool`](../../types/#bool) |
| `Operand` |  | The bytes variable representing the operand | `None` | [`&Bytes`](../../types/#contextvar) |

</div>



## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/IsMoreEqual/IsMoreEqual.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/IsMoreEqual/IsMoreEqual.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

