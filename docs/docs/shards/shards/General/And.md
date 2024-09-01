---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# And

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||If true, the flow continues; otherwise, it stops. | | [`Bool`](../../types/#bool) |
| `Output ➡️` ||The output of this shard will be the input of the current conditional flow or wire. | | [`Bool`](../../types/#bool) |

</div>

If the input of the preceding shard is true, the flow continues; otherwise, the flow stops. This shard is typically used within conditional flows (e.g., If, When) to chain conditions. Note: Outside a conditional flow, it might restart the current wire, which can be used as a trick in certain scenarios.

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

