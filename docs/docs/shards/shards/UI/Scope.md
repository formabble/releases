---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Scope

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Contents shards of the scope. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

Creates a scoped child UI.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Scope/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Scope/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

