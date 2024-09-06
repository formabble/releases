---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.Multiply

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any valid big integer(s) represented as bytes supported by this operation. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq) |
| `Output ➡️` ||Outputs the result of the operation as a big integer or sequence of big integers represented as bytes. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The big integer to multiply the big integer input with. | `0` | [`Var(Bytes)`](../../types/#contextvar)[`Var([Bytes])`](../../types/#contextvar) |

</div>

This shard multiplies the input big integer with the big integer specified in the Operand parameter and outputs the result.

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

