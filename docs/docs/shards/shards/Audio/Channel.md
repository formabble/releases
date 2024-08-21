---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Channel

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input will be passed to the code specified in the Shards parameter. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Returns the output of the code specified in the Shards parameter. | | [`Any`](../../types/#any) |
| `InputBus` | :fontawesome-solid-circle-plus:{title="No"} No  | The an integer representing the input bus number. 0 represents the audio device's Analog-to-Digital Converter (ADC). | `0` | [`Int`](../../types/#int) |
| `InputChannels` | :fontawesome-solid-circle-plus:{title="No"} No  | A list of input channel indices to be used as input for the code specified in the Shards parameter. | `[0 1]` | [`[Int]`](../../types/#seq) |
| `OutputBus` | :fontawesome-solid-circle-plus:{title="No"} No  | The output bus number. 0 represents the audio device's Digital-to-Analog Converter (DAC). | `0` | [`Int`](../../types/#int) |
| `OutputChannels` | :fontawesome-solid-circle-plus:{title="No"} No  | The list of output channel indices where the processed audio output from the code in the Shards parameter will be written. | `[0 1]` | [`[Int]`](../../types/#seq) |
| `Volume` | :fontawesome-solid-circle-plus:{title="No"} No  | A float value representing the volume level of this channel. Accepts values between 0.0 (mute) and 1.0 (full volume). | `0.7` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Shards` | :fontawesome-solid-circle-plus:{title="No"} No  | The code that will process the audio data. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"

This shard represents an audio channel in the mesh. It manages the routing and processing of audio data between input and output buses, applies volume control, and executes custom audio processing shards. Audio.Channel works in conjunction with Audio.Device to handle audio processing within the shards system.

--8<-- "includes/license.md"

