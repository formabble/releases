---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Dec

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any valid integer(s), floating point number(s), or a sequence of these types supported by this operation. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The result of the operation, usually in the same type as the input value. If the input is a sequence, the output will be a sequence of results, with possible broadcasting according to the input and operand. | | [`Any`](../../types/#any) |
| `Value` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The value to apply the operation to. | `None` | [`Var(Int)`](../../types/#contextvar)[`Var(Int2)`](../../types/#contextvar)[`Var(Int3)`](../../types/#contextvar)[`Var(Int4)`](../../types/#contextvar)[`Var(Int8)`](../../types/#contextvar)[`Var(Int16)`](../../types/#contextvar)[`Var(Float)`](../../types/#contextvar)[`Var(Float2)`](../../types/#contextvar)[`Var(Float3)`](../../types/#contextvar)[`Var(Float4)`](../../types/#contextvar)[`Var(Color)`](../../types/#contextvar)[`Var([Any])`](../../types/#contextvar) |

</div>

Applies the unary operation on the input value and returns the result. If the input is a sequence, the operation is applied to each element of the sequence.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Dec/Dec.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Dec/Dec.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

