---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Animation.Play

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The position in the animation to play | | [`Float`](../../types/#float) |
| `<output>` ||The interpolated frame data | | [`[{Path: [String] Value: Any}]`](../../types/#seq) |
| `Animation` |  | The animation to play | `None` | [`&[{Path: [String] Frames: [{Time: Float Value: Any None: Any}]}]`](../../types/#contextvar)[`[{Path: [String] Frames: [{Time: Float Value: Any None: Any}]}]`](../../types/#seq) |

</div>

Outputs the duration of an animation, in seconds

--8<-- "includes/license.md"

