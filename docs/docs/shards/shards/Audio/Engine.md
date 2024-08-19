---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Engine

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input value will pass through unchanged. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |

</div>

This shard initializes an audio engine in the mesh, and this enables audio playback and processing capabilites. It manages resources, handles audio mixing, and provides spatial audio functionality. The Audio.Engine is used in conjunction with other audio shards like Audio.Sound, Audio.Play and Audio.Pause to create a complete audio system to process and play audio.

--8<-- "includes/license.md"

