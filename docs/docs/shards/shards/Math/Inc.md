---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Inc

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any valid integer(s), floating point number(s), or a sequence of such entities supported by this operation. | | [`Any`](../../types/#any) |
| `<output>` ||The result of the operation, usually in the same type as the input value. | | [`Any`](../../types/#any) |
| `Value` |  | The value to apply the operation to. | `None` | [`&Int`](../../types/#contextvar)[`&Int2`](../../types/#contextvar)[`&Int3`](../../types/#contextvar)[`&Int4`](../../types/#contextvar)[`&Int8`](../../types/#contextvar)[`&Int16`](../../types/#contextvar)[`&Float`](../../types/#contextvar)[`&Float2`](../../types/#contextvar)[`&Float3`](../../types/#contextvar)[`&Float4`](../../types/#contextvar)[`&Color`](../../types/#contextvar)[`&[Any]`](../../types/#contextvar) |

</div>

Applies the unary operation on the input value and returns the result (or a sequence of results if the input and the operand are sequences).

## Details

--8<-- "details/shards/Math/Inc.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Inc/Inc.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Inc/Inc.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

