---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Shader.Literal

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`Any`](../../types/#any)[`None`](../../types/#none) |
| `Source` |  | The WGSL source code to insert | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`[String &Any]`](../../types/#seq) |
| `Type` |  | Where to insert the code. | `None` | [`ShaderLiteralType`](../../../enums/ShaderLiteralType) |
| `OutputType` |  | The type that this code is expected to output. (default: none) | `None` | [`ShaderFieldBaseType`](../../../enums/ShaderFieldBaseType) |
| `OutputDimension` |  | The dimension that this code is expected to output. (default: 4) | `None` | [`Int`](../../types/#int) |
| `OutputMatrixDimension` |  | The matrix dimension that this code is expected to output. (default: 1) | `None` | [`Int`](../../types/#int) |

</div>



## Details

--8<-- "details/shards/Shader/Literal.md"


--8<-- "includes/license.md"

