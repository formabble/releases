---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.Max

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any valid big integer(s) represented as bytes supported by this operation. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq) |
| `Output ➡️` ||Outputs the larger of the two input big integers. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The big integer to compare the input with. | `0` | [`Var(Bytes)`](../../types/#contextvar)[`Var([Bytes])`](../../types/#contextvar) |

</div>

This shard compares the input big integer with the big integer specified in the Operand parameter and outputs the larger of the two.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/Max/Max.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/Max/Max.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

