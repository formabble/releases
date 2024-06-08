---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.View

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`GFX.View`](../../types/#gfx.view) |
| `View` | :fontawesome-solid-circle-plus:{title="No"} No  | The view matrix. | `None` | [`None`](../../types/#none)[`&[Float4]`](../../types/#contextvar) |
| `Fov` | :fontawesome-solid-circle-plus:{title="No"} No  | The vertical field of view. (In radians. Implies perspective projection) | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `OrthographicSizeType` | :fontawesome-solid-circle-plus:{title="No"} No  | The type of orthographic size. (Implies orthographic projection) | `None` | [`None`](../../types/#none)[`OrthographicSizeType`](../../../enums/OrthographicSizeType) |
| `OrthographicSize` | :fontawesome-solid-circle-plus:{title="No"} No  | The orthographic size. (Implies orthographic projection) | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Near` | :fontawesome-solid-circle-plus:{title="No"} No  | Near clipping distance | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Far` | :fontawesome-solid-circle-plus:{title="No"} No  | Far clipping distance | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |

</div>

Defines a viewer (or camera) for a rendered frame based on a view transform matrix

--8<-- "includes/license.md"

