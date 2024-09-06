---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Shader.WithInput

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||This shard does not read the attribute value directly. Use Shader.ReadInput within the Then branch if you need to access the shader input value. | | [`None`](../../types/#none) |
| `Output ➡️` ||This shard outputs none | | [`None`](../../types/#none) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the attribute to check for | `` | [`String`](../../types/#string) |
| `Then` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to execute if the attribute is being received. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Else` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to execute if the attribute is not being received | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

This shard creates a conditional statement within a shader code. If the shader input specified in the Name parameter is available to the shader stage that calls this shard, the code in the Then parameter will be executed. Otherwise, the code in the Else parameter will execute.

--8<-- "includes/license.md"

