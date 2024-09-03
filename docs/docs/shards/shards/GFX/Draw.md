---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Draw

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The drawable object (or sequence of drawable objects) to add to the draw queue. | | [`GFX.Drawable`](../../types/#gfx.drawable)[`[GFX.Drawable]`](../../types/#seq) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`GFX.Drawable`](../../types/#gfx.drawable)[`[GFX.Drawable]`](../../types/#seq) |
| `Queue` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The queue object to add the drawable object to. | `None` | [`Var(GFX.DrawQueue)`](../../types/#contextvar) |

</div>

This shard takes the input drawable object (or sequence of drawable objects) and adds them to the draw queue (created by GFX.DrawQueue) specified in the Queue parameter.

--8<-- "includes/license.md"

