---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Wait

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"}  | The wire to wait. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`&Wire`](../../types/#contextvar) |
| `Passthrough` | :fontawesome-solid-circle-plus:{title="No"}  | The output of this shard will be its input. | `false` | [`Bool`](../../types/#bool) |
| `Timeout` | :fontawesome-solid-circle-plus:{title="No"}  | The optional amount of time in seconds to wait for the wire to complete, if the time elapses the wire will be stopped and the flow will fail with a timeout error. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Waits for another wire to complete before resuming execution of the current wire.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Wait/Wait.shs"
  ```

  ```
  --8<-- "samples/shards/General/Wait/Wait.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

