---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Stop

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"}  | The wire to stop. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`&Wire`](../../types/#contextvar) |
| `Passthrough` | :fontawesome-solid-circle-plus:{title="No"}  | The output of this shard will be its input. | `true` | [`Bool`](../../types/#bool) |

</div>

Stops another wire. If no wire is given, stops the current wire.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Stop/Stop.shs"
  ```

  ```
  --8<-- "samples/shards/General/Stop/Stop.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

