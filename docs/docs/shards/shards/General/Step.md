---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Step

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"}  | The wire to run. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none) |

</div>



## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Step/Step.shs"
  ```

  ```
  --8<-- "samples/shards/General/Step/Step.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

