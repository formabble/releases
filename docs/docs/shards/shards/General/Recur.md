---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Recur

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||After the first cycle of Recur, the output of the Wire that calls Recur will be fed back as input for the next cycle. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of Recur will be the output of the Wire that calls it. | | [`Any`](../../types/#any) |

</div>

The Recur shard executes the Wire that calls it recursively, using the output of the Wire as input again, until the base cases are reached. It then combines the results to produce the final result. For the shard not to Recur endlessly, a base case needs to be defined, usually through a When or If shard.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Recur/Recur.shs"
  ```

  ```
  --8<-- "samples/shards/General/Recur/Recur.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

