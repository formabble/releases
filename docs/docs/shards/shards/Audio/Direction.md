---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Direction

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A float3 vector representing the new direction (x, y, z components) of the sound. This vector should be normalized (have a magnitude of 1).  | | [`Float3`](../../types/#float3) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Float3`](../../types/#float3) |
| `Sound` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The sound object to manipulate | `None` | [`Object`](../../types/#object)[`Var(Object)`](../../types/#contextvar) |

</div>

The Audio.Direction shard sets the direction of a sound object in 3D audio space. It takes the Sound object, created by Audio.Sound that is specified in the Sound parameter, and sets its direction to the 3D vector with x y z coordinates, represented as a float3 vector(a vector with 3 float elements), that is provided as input. The x coordinate represents its direction along the x-axis, the y coordinate represents its direction along the y-axis, and the z coordinate represents its direction along the z-axis. The float3 vector input should also be normalized so that it has a magnitude of 1. This shard is particularly useful for creating directional audio effects in 3D environments and is typically used in conjunction with Audio.Engine, Audio.Sound, and Audio.Position to manage 3D audio positioning and orientation. Do note that the Spatialized parameter on Audio.Sound should be set to true when initializing a sound object meant for 3D audio.

--8<-- "includes/license.md"

