---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.Divide

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any valid big integer(s) represented as bytes supported by this operation. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq) |
| `<output>` ||The result of the operation, usually in the same type as the input value. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq) |
| `Operand` |  | The bytes variable representing the operand | `0` | [`&Bytes`](../../types/#contextvar)[`&[Bytes]`](../../types/#contextvar) |

</div>

Applies the binary operation on the input value and the operand and returns the result (or a sequence of results if the input and the operand are sequences).

--8<-- "includes/license.md"

