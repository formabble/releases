---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.Pow

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Operand` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The integer operand, can be a variable | `None` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |

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

