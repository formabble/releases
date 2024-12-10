---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Shader.WriteOutput

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to write to the shader output specified. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The shard outputs none, but the value is passed to the next stage or render target. | | [`None`](../../types/#none) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the output to write to. | `` | [`String`](../../types/#string) |

</div>

This shard writes the input value to the shader output or one of the outputs of the render pass (specified in the Name parameter).

## Details

--8<-- "details/shards/Shader/WriteOutput.md"


--8<-- "includes/license.md"

