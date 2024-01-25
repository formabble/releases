---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Render

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`None`](../../types/#none) |
| `Steps` |  | Render steps to follow. | `None` | [`&[GFX.PipelineStep]`](../../types/#contextvar)[`[GFX.PipelineStep]`](../../types/#seq) |
| `View` |  | The view to render. (Optional) | `None` | [`None`](../../types/#none)[`&GFX.View`](../../types/#contextvar) |

</div>



## Details

--8<-- "details/shards/GFX/Render.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/GFX/Render/1.shs"
  ```

=== "Output"

  --8<-- "samples/shards/GFX/Render/1.out.md"

  ```
  --8<-- "samples/shards/GFX/Render/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

