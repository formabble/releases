---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# And

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The first operand to be evaluated. | | [`Bool`](../../types/#bool) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Bool`](../../types/#bool) |

</div>

Computes the logical AND between the input of this shard and the output of the next shard.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/And/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/And/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

