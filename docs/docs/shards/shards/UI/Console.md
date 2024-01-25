---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Console

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The raw logs. | | [`String`](../../types/#string) |
| `<output>` ||The output of this shard will be its input. | | [`String`](../../types/#string) |
| `ShowFilters` |  | Whether to display filter controls. | `false` | [`Bool`](../../types/#bool) |
| `Style` |  | The console style. | `None` | [`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |

</div>

A console with formatted logs.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Console/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Console/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Console/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Console/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

