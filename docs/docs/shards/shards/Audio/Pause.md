---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Pause

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Accepts a Sound object created by the Audio.Sound shard. | | [`Object`](../../types/#object) |
| `Output ➡️` ||Returns the same Sound object that was input, allowing for further manipulation. | | [`Object`](../../types/#object) |

</div>

The Audio.Pause shard pauses playback of a sound object in the mesh. It takes a Sound object which was created by Audio.Sound and played by Audio.Start and pauses its playback. This shard is typically used in conjunction with Audio.Engine, Audio.Sound, Audio.Start, and Audio.Stop to manage audio playback and control.

--8<-- "includes/license.md"

