---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Shader.Literal

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any)[`None`](../../types/#none) |
| `Source` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The WGSL source code to insert | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`[String &Any]`](../../types/#seq) |
| `Type` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Where to insert the code. | `None` | [`ShaderLiteralType`](../../../enums/ShaderLiteralType) |
| `OutputType` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The type that this code is expected to output. (default: none) | `None` | [`ShaderFieldBaseType`](../../../enums/ShaderFieldBaseType) |
| `OutputDimension` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The dimension that this code is expected to output. (default: 4) | `None` | [`Int`](../../types/#int) |
| `OutputMatrixDimension` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The matrix dimension that this code is expected to output. (default: 1) | `None` | [`Int`](../../types/#int) |

</div>



## Details

--8<-- "details/shards/Shader/Literal.md"


--8<-- "includes/license.md"

