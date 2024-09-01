---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Assoc

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input sequence that defines which element in the target sequence or table needs to be updated and with what value. Should have even number of elements. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||Modified array or table. Has the same type as the array or table on which Assoc was applied. | | [`[Any]`](../../types/#seq) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the sequence or table to be updated. | `` | [`String`](../../types/#string)[`Var(Any)`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Table key for the value that is to be updated. Parameter applicable if target is table. | `None` | [`Any`](../../types/#any) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is or should be available to all the wires in the same mesh. The default value (false) makes the variable local to the wire. | `false` | [`Bool`](../../types/#bool) |

</div>

Updates a sequence (array) or a table (associative array/ dictionary) on the basis of an input sequence.

## Details

--8<-- "details/shards/General/Assoc.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Assoc/2.shs"
  ```

  ```
  --8<-- "samples/shards/General/Assoc/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Assoc/3.shs"
  ```

  ```
  --8<-- "samples/shards/General/Assoc/3.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Assoc/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Assoc/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

