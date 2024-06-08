---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.IsMoreEqual

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||A boolean value repesenting the result of the logic operation. | | [`Bool`](../../types/#bool) |
| `Operand` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The bytes variable representing the operand | `None` | [`&Bytes`](../../types/#contextvar) |

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

