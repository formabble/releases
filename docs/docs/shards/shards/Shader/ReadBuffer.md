---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Shader.ReadBuffer

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value of the parameter in the buffer specified. | |  |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the parameter to read | `` | [`String`](../../types/#string) |
| `BufferName` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the buffer to read from. (either view buffer or object buffer.) | `` | [`String`](../../types/#string) |

</div>

This shard reads the shader parameter (specified in the Name parameter) from the buffer (specified in the Buffer Name parameter).

--8<-- "includes/license.md"

