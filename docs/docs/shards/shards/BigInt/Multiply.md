---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.Multiply

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any valid big integer(s) represented as bytes supported by this operation. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq) |
| `Output ➡️` ||The result of the operation, usually in the same type as the input value. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The bytes variable representing the operand | `0` | [`&Bytes`](../../types/#contextvar)[`&[Bytes]`](../../types/#contextvar) |

</div>

Applies the binary operation on the input value and the operand and returns the result (or a sequence of results if the input and the operand are sequences).

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/Multiply/Multiply.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/Multiply/Multiply.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

