---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Cones

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A float3 vector with each element representing the respective cone properties: innerAngleInRadians (the angle within which the sound is at full volume), outerAngleInRadians (the angle at which the sound starts to attenuate), and outerGain (the volume multiplier for sounds outside the outer angle). | | [`Float3`](../../types/#float3) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Float3`](../../types/#float3) |
| `Sound` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The sound object to manipulate | `None` | [`Object`](../../types/#object)[`Var(Object)`](../../types/#contextvar) |

</div>

The Audio.Cones shard sets the sound cone properties for a 3D sound object. Sound cones are used to create directional audio effects, where the volume of the sound changes based on the angle between the sound's direction and the listener's position. It takes the Sound object, created by Audio.Sound that is specified in the Sound parameter, and sets its cone properties using the float3 vector(a vector with 3 float elements) provided as input. The first float value in the float3 vector represents the inner angle in radians, the second float value represents the outer angle in radians, and the third float value represents the outer gain. This shard is particularly useful for creating directional audio effects in 3D environments and is typically used in conjunction with Audio.Engine, Audio.Sound, Audio.Position, and Audio.Direction. Do note that the Spatialized parameter on Audio.Sound should be set to true when initializing a sound object meant for 3D audio.

--8<-- "includes/license.md"

