---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Assoc

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Input sequence that defines which element in the target sequence or table needs to be updated and with what value. Should have even number of elements. | | [`[Any]`](../../types/#seq) |
| `<output>` ||Modified array or table. Has the same type as the array or table on which Assoc was applied. | | [`[Any]`](../../types/#seq) |
| `Name` |  | The name of the sequence or table to be updated. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` |  | Table key for the value that is to be updated. Parameter applicable if target is table. | `None` | [`Any`](../../types/#any) |
| `Global` |  | If the variable is or should be available to all the wires in the same mesh. The default value (false) makes the variable local to the wire. | `false` | [`Bool`](../../types/#bool) |

</div>

--8<-- "includes/experimental.md"

Updates a sequence (array) or a table (associative array/ dictionary) on the basis of an input sequence.

--8<-- "includes/license.md"

