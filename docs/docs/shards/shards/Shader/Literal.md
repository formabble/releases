---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Shader.Literal

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||This shard outputs the type set in the OutputType parameter. | | [`Any`](../../types/#any)[`None`](../../types/#none) |
| `Source` | :fontawesome-solid-circle-plus:{title="No"} No  | The WGSL source code to insert | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar)[`[String Var(Any)]`](../../types/#seq) |
| `Type` | :fontawesome-solid-circle-plus:{title="No"} No  | Where to insert the code. | `none` | [`ShaderLiteralType`](../../../enums/ShaderLiteralType) |
| `OutputType` | :fontawesome-solid-circle-plus:{title="No"} No  | The type that this code is expected to output. (default: none) | `none` | [`ShaderFieldBaseType`](../../../enums/ShaderFieldBaseType) |
| `OutputDimension` | :fontawesome-solid-circle-plus:{title="No"} No  | The dimension that this code is expected to output. (default: 4) | `none` | [`Int`](../../types/#int) |
| `OutputMatrixDimension` | :fontawesome-solid-circle-plus:{title="No"} No  | The matrix dimension that this code is expected to output. (default: 1) | `none` | [`Int`](../../types/#int) |

</div>

This shard allows the user to write WGSL code directly and insert it into the shader code. The WGSL code is written as a sequence of strings in the Source parameter.

## Details

--8<-- "details/shards/Shader/Literal.md"


--8<-- "includes/license.md"

