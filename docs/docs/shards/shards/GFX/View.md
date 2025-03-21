---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.View

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The view object created. | | [`GFX.View`](../../types/#gfx.view) |
| `View` | :fontawesome-solid-circle-plus:{title="No"} No  | The view matrix. | `none` | [`None`](../../types/#none)[`Var([Float4](4))`](../../types/#contextvar) |
| `Fov` | :fontawesome-solid-circle-plus:{title="No"} No  | The vertical field of view. (In radians. Implies perspective projection) | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `OrthographicSizeType` | :fontawesome-solid-circle-plus:{title="No"} No  | The type of orthographic size. (Implies orthographic projection) | `none` | [`None`](../../types/#none)[`OrthographicSizeType`](../../../enums/OrthographicSizeType) |
| `OrthographicSize` | :fontawesome-solid-circle-plus:{title="No"} No  | The orthographic size. (Implies orthographic projection) | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |
| `Near` | :fontawesome-solid-circle-plus:{title="No"} No  | Near clipping distance | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Far` | :fontawesome-solid-circle-plus:{title="No"} No  | Far clipping distance | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |

</div>

This shard creates and manages a view object, which defines and controls the view or camera settings for a rendering pipeline.

## Details

--8<-- "details/shards/GFX/View.md"


--8<-- "includes/license.md"

