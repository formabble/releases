---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Gizmos.Context

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `View` |  | The view used to render the gizmos.When drawing over a scene, the view should be the same. | `None` | [`&GFX.View`](../../types/#contextvar) |
| `Queue` |  | The queue to draw into. | `None` | [`&GFX.DrawQueue`](../../types/#contextvar) |
| `Contents` |  | Actual logic to draw the actual gizmos, the input of this flow will be a boolean that will be true if the gizmo is being pressed and so edited. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Scaling` |  | The scaling factor for gizmo elements. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Interactive` |  | Used to togle gizmo interactions on/off. | `None` | [`None`](../../types/#none)[`&Bool`](../../types/#contextvar) |

</div>

--8<-- "includes/experimental.md"

Provides a context for rendering gizmos

--8<-- "includes/license.md"

