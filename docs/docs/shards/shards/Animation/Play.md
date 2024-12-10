---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Animation.Play

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The current time of the animation (in seconds) to play | | [`Float`](../../types/#float) |
| `Output ➡️` ||The interpolated animation data at each frame of the animation | | [`[{Path: [String] Value: Any}]`](../../types/#seq) |
| `Animation` | :fontawesome-solid-circle-plus:{title="No"} No  | The animation to play. | `none` | [`Var([{Path: [String] Frames: [{Time: Float Value: Any none: Any}]}])`](../../types/#contextvar)[`[{Path: [String] Frames: [{Time: Float Value: Any none: Any}]}]`](../../types/#seq) |

</div>

Evaluates and interpolates the animation of the glTF model specified in the Animation parameter. The output of this shard is applied to the glTF model to play animations.

--8<-- "includes/license.md"

