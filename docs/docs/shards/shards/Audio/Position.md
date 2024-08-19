---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Position

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A float3 vector representing the new 3D position (x, y, z coordinates) of the sound. | | [`Float3`](../../types/#float3) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Float`](../../types/#float) |
| `Sound` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The sound object to manipulate | `None` | [`Object`](../../types/#object)[`&Object`](../../types/#contextvar) |

</div>

The Audio.Position shard sets the 3D position of a sound object in the audio space. It takes the Sound object, created by Audio.Sound, that is specified in the Sound parameter, and sets its position to the 3D coordinates represented as a float3 vector(a vector with 3 float elements) provided as input. This shard is particularly useful for creating spatial audio effects and is typically used in conjunction with Audio.Engine, Audio.Sound, and Audio.Direction to manage 3D audio positioning and orientation. Do note that the Spatialized parameter on Audio.Sound should be set to true when initializing a sound object meant for 3D audio.

--8<-- "includes/license.md"

