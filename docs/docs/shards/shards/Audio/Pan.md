---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Pan

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A float value representing the new pan position. -1.0 is full left, 0.0 is center, and 1.0 is full right. Values outside of this range will be clamped to the nearest extreme. | | [`Float`](../../types/#float) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Float`](../../types/#float) |
| `Sound` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The sound object to manipulate | `None` | [`Object`](../../types/#object)[`&Object`](../../types/#contextvar) |

</div>

The Audio.Pan shard adjusts the stereo panning of a sound object in the mesh, allowing for dynamic control over the spatial positioning of individual sound objects during playback. It takes the Sound object, created by Audio.Sound that is specified in the Sound parameter, and sets the pan position to the float value provided as input (-1.0 being full left and 1.0 being full right). It's typically used in conjunction with Audio.Engine, Audio.Sound, Audio.Start, and other audio shards to manage audio playback and create spatial audio effects.

--8<-- "includes/license.md"

