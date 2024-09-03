---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Render

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||This shard returns none. | | [`None`](../../types/#none) |
| `Steps` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Sequence of render pass objects to process. | `None` | [`Var([GFX.PipelineStep])`](../../types/#contextvar)[`[GFX.PipelineStep]`](../../types/#seq) |
| `View` | :fontawesome-solid-circle-plus:{title="No"} No  | The view to render. If no view object is provided, the default view will be used. | `None` | [`None`](../../types/#none)[`Var(GFX.View)`](../../types/#contextvar) |

</div>

This shard takes the sequence of render pass objects specified in the Steps parameter, processes it sequentially, and renders the final scene based on the view object specified in the View parameter.

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

