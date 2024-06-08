---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Columns

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards (each column). | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | A sequence of UI contents. | `[]` | [`[None Shard [Shard]]`](../../types/#seq) |

</div>

Splits the contents into several columns.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Columns/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Columns/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

