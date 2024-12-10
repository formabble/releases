---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Start

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Accepts a Sound object created by the Audio.Sound shard. | | [`Object`](../../types/#object) |
| `Output ➡️` ||Outputs the same Sound object that was input, allowing for further manipulation. | | [`Object`](../../types/#object) |
| `Looped` | :fontawesome-solid-circle-plus:{title="No"} No  | If the sound should be played in loop or should stop the wire when it ends and play only once. | `false` | [`Bool`](../../types/#bool) |

</div>

The Audio.Start shard begins playback of a sound object in the mesh. It takes a Sound object created by Audio.Sound and starts playing it and also allows control over whether the sound should loop or play once. It's typically used in conjunction with Audio.Engine, Audio.Sound, Audio.Pause, and Audio.Stop to manage audio playback.

--8<-- "includes/license.md"

