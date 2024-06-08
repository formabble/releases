---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Detach

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"}  | The wire to run. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none) |
| `Restart` | :fontawesome-solid-circle-plus:{title="No"}  | If on activation the wire should be restarted from scratch even if it was still running. | `false` | [`Bool`](../../types/#bool) |

</div>



## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Detach/Detach.shs"
  ```

  ```
  --8<-- "samples/shards/General/Detach/Detach.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

