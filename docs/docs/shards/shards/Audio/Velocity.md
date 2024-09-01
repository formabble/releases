---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Velocity

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A float3 vector representing the new velocity (each float element representing the velocity along the x, y, and z axes respectively) of the sound in units per second. | | [`Float3`](../../types/#float3) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Float3`](../../types/#float3) |
| `Sound` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The sound object to manipulate | `None` | [`Object`](../../types/#object)[`Var(Object)`](../../types/#contextvar) |

</div>

The Audio.Velocity shard sets the velocity of a 3D sound object in the audio space. It takes the Sound object, created by Audio.Sound that is specified in the Sound parameter, and sets its velocity to the 3D vector, represented as a float3 vector(a vector with 3 float elements), provided as input. The first element in the float3 vector represents the velocity along the x-axis, the second element represents the velocity along the y-axis, and the third element represents the velocity along the z-axis. This shard is particularly useful for creating doppler effects and is typically used in conjunction with Audio.Engine, Audio.Sound, Audio.Position, and Audio.Direction to manage 3D audio positioning and movement. Do note that the Spatialized parameter on Audio.Sound should be set to true when initializing a sound object meant for 3D audio.

--8<-- "includes/license.md"

