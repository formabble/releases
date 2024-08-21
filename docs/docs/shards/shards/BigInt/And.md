---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.And

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any valid big integer(s) represented as bytes supported by this operation. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq) |
| `Output ➡️` ||Returns the result of the AND operation as a big integer represented as bytes. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The second big integer to perform the AND operation with. | `0` | [`Var(Bytes)`](../../types/#contextvar)[`Var([Bytes])`](../../types/#contextvar) |

</div>

This shard performs a bitwise AND operation on the input big integer with the big integer specified in the Operand parameter and returns the result. A bitwise AND operation is a binary operation that compares each bit of the binary representations of two numbers and returns 1 if the bits are 1 and 0 otherwise. The resulting number is a big integer representation of the 1s and 0s concatenated.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/And/And.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/And/And.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

