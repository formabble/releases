---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Orthographic

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Returns a 4x4 orthographic projection matrix (a sequence of four float4 vectors). | | [`[Float4]`](../../types/#seq) |
| `Width` | :fontawesome-solid-circle-plus:{title="No"} No  | Width size. | `1280` | [`Int`](../../types/#int)[`Float`](../../types/#float) |
| `Height` | :fontawesome-solid-circle-plus:{title="No"} No  | Height size. | `720` | [`Int`](../../types/#int)[`Float`](../../types/#float) |
| `Near` | :fontawesome-solid-circle-plus:{title="No"} No  | Near plane. | `0` | [`Int`](../../types/#int)[`Float`](../../types/#float) |
| `Far` | :fontawesome-solid-circle-plus:{title="No"} No  | Far plane. | `1000` | [`Int`](../../types/#int)[`Float`](../../types/#float) |

</div>

This shard creates a 4x4 orthographic projection matrix based on the width size, height size, near, and far planes specified in the appropriate parameters. A 4x4 matrix is a sequence with exactly 4 float4 vectors while a float4 vector is a vector with 4 float elements.

--8<-- "includes/license.md"

