---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Render

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`None`](../../types/#none) |
| `Steps` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Render steps to follow. | `None` | [`&[GFX.PipelineStep]`](../../types/#contextvar)[`[GFX.PipelineStep]`](../../types/#seq) |
| `View` | :fontawesome-solid-circle-plus:{title="No"} No  | The view to render. (Optional) | `None` | [`None`](../../types/#none)[`&GFX.View`](../../types/#contextvar) |

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

