---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Or

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||If true, the flow stops and succeeds; otherwise, the flow continues. | | [`Bool`](../../types/#bool) |
| `Output ➡️` ||The output of this shard will be the input of the current conditional flow or wire. | | [`Bool`](../../types/#bool) |

</div>

Computes the logical OR between the input of this shard and the output of the next shard. If the input is true, the flow stops and succeeds; if false, the flow continues with the next shard. Typically used within conditional flows (e.g., If, When) to chain conditions. Note: Outside a conditional flow, it might restart the current wire, which can be used as a trick in certain scenarios.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Or/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Or/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

