---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Gizmos.Context

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `View` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The view used to render the gizmos.When drawing over a scene, the view should be the same. | `None` | [`Var(GFX.View)`](../../types/#contextvar) |
| `ViewSize` | :fontawesome-solid-circle-plus:{title="No"} No  | The size of the view | `None` | [`None`](../../types/#none)[`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar) |
| `Queue` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The queue to draw into. | `None` | [`Var(GFX.DrawQueue)`](../../types/#contextvar) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | Actual logic to draw the actual gizmos, the input of this flow will be a boolean that will be true if the gizmo is being pressed and so edited. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Scaling` | :fontawesome-solid-circle-plus:{title="No"} No  | The scaling factor for gizmo elements. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Interactive` | :fontawesome-solid-circle-plus:{title="No"} No  | Used to togle gizmo interactions on/off. | `None` | [`None`](../../types/#none)[`Var(Bool)`](../../types/#contextvar) |

</div>

Provides a context for rendering gizmos

--8<-- "includes/license.md"

