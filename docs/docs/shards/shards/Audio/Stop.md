---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Stop

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Accepts a Sound object created by the Audio.Sound shard. | | [`Object`](../../types/#object) |
| `Output ➡️` ||Returns the same Sound object that was input, allowing for further manipulation. | | [`Object`](../../types/#object) |

</div>

The Audio.Stop shard stops playback of a sound object in the mesh. It takes a Sound object which was created by Audio.Sound and played with Audio.Start and stops its playback, resetting the playback position to the beginning. This shard is typically used in conjunction with Audio.Engine, Audio.Sound, Audio.Start, and Audio.Pause to manage audio playback and control.

--8<-- "includes/license.md"

