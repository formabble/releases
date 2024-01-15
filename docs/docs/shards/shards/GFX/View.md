---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.View

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`GFX.View`](../../types/#gfx.view) |
| `View` |  | The view matrix. | `None` | [`None`](../../types/#none)[`&[Float4]`](../../types/#contextvar) |
| `Fov` |  | The vertical field of view. (In radians. Implies perspective projection) | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `OrthographicSizeType` |  | The type of orthographic size. (Implies orthographic projection) | `None` | [`None`](../../types/#none)[`OrthographicSizeType`](../../../enums/OrthographicSizeType) |
| `OrthographicSize` |  | The orthographic size. (Implies orthographic projection) | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Near` |  | Near clipping distance | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Far` |  | Far clipping distance | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |

</div>

--8<-- "includes/experimental.md"

Defines a viewer (or camera) for a rendered frame based on a view transform matrix

--8<-- "includes/license.md"

