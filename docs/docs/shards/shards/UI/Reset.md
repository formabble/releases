---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Reset

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value is ignored. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |

</div>

Forgets UI scroll, position, size changes, etc.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Reset/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Reset/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

