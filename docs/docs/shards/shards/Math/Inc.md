---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Inc

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any valid integer(s), floating point number(s), or a sequence of these types supported by this operation. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The result of the operation, usually in the same type as the input value. If the input is a sequence, the output will be a sequence of results, with possible broadcasting according to the input and operand. | | [`Any`](../../types/#any) |
| `Value` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The value to apply the operation to. | `None` | [`&Int`](../../types/#contextvar)[`&Int2`](../../types/#contextvar)[`&Int3`](../../types/#contextvar)[`&Int4`](../../types/#contextvar)[`&Int8`](../../types/#contextvar)[`&Int16`](../../types/#contextvar)[`&Float`](../../types/#contextvar)[`&Float2`](../../types/#contextvar)[`&Float3`](../../types/#contextvar)[`&Float4`](../../types/#contextvar)[`&Color`](../../types/#contextvar)[`&[Any]`](../../types/#contextvar) |

</div>

Applies the unary operation on the input value and returns the result. If the input is a sequence, the operation is applied to each element of the sequence.

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

