---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Animation.Play

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The position in the animation to play | | [`Float`](../../types/#float) |
| `Output ➡️` ||The interpolated frame data | | [`[{Path: [String] Value: Any}]`](../../types/#seq) |
| `Animation` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The animation to play | `None` | [`&[{Path: [String] Frames: [{Time: Float Value: Any None: Any}]}]`](../../types/#contextvar)[`[{Path: [String] Frames: [{Time: Float Value: Any None: Any}]}]`](../../types/#seq) |

</div>

Outputs the duration of an animation, in seconds

--8<-- "includes/license.md"

