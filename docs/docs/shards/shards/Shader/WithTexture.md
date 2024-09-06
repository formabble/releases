---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Shader.WithTexture

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||This shard does not read the texture directly. Use Shader.SampleTexture within the Then branch if you need to access the texture. | | [`None`](../../types/#none) |
| `Output ➡️` ||This shard outputs none | | [`None`](../../types/#none) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the texture to check for. | `` | [`String`](../../types/#string) |
| `Then` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to execute if the texture is available | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Else` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to execute if the texture is not available | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

This shard creates a conditional statement within a shader code. If the texture specified in the Name parameter is available for the vertex or pixel, the code in the Then parameter will be executed. Otherwise, the code in the Else parameter will execute.

--8<-- "includes/license.md"

