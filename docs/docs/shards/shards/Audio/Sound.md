---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Sound

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Accepts a string representing the path to the audio file or asset to be loaded. | | [`String`](../../types/#string) |
| `Output ➡️` ||Outputs a Sound object that can be used with other audio shards. | | [`Object`](../../types/#object) |
| `Spatialized` | :fontawesome-solid-circle-plus:{title="No"} No  | If the sound should have 3D audio capabilities. | `false` | [`Bool`](../../types/#bool) |

</div>

The Audio.Sound shard initializes a sound object in the mesh. It loads an audio file and prepares it for playback. This shard is used in conjunction with other audio shards like Audio.Start, Audio.Pause, and Audio.Stop to control audio playback. It supports spatialization for 3D audio positioning and can be used with various audio effect shards for further processing. Do note that the Spatialized parameter on Audio.Sound should be set to true when initializing a sound object meant for 3D audio (if it is to be manipulated by Audio.Direction, Audio.Position, Audio.Velocity or Audio.Cones).

--8<-- "includes/license.md"

