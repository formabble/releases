---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Volume

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A float value representing the new volume level. 0.0 is silence, 1.0 is full volume, and values above 1.0 can be used for amplification. | | [`Float`](../../types/#float) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Float`](../../types/#float) |
| `Sound` | :fontawesome-solid-circle-plus:{title="No"} No  | The sound object to manipulate | `none` | [`Object`](../../types/#object)[`Var(Object)`](../../types/#contextvar) |

</div>

The Audio.Volume shard adjusts the volume of a sound object in the mesh, thus allowing for the dynamic control over the volume of individual sound objects during playback. It takes the Sound object, created by Audio.Sound specified in the Sound parameter, and sets the volume to the float value provided as input. It's typically used in conjunction with Audio.Engine, Audio.Sound, Audio.Start, and other audio shards to manage audio playback and control.

--8<-- "includes/license.md"

