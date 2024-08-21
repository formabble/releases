---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.MatIdentity

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Returns a 4x4 identity matrix (a sequence of four float4 vectors). The matrix will have 1s on the main diagonal and 0s for the other elements. | | [`[Float4](4)`](../../types/#seq) |
| `Type` | :fontawesome-solid-circle-plus:{title="No"} No  | The matrix row type of the corresponding matrix | `Type::Float4` | [`Type`](../../../enums/Type) |

</div>

This shard creates a standard 4x4 identity matrix. The standard identity matrix is a square matrix with 1s on the main diagonal and 0s for the other elements. A 4x4 matrix is a sequence with exactly 4 float4 vector and a float4 vector is a vector with 4 float elements.

--8<-- "includes/license.md"

