---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Channel

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `InputBus` |  | The input bus number, 0 is the audio device ADC. | `0` | [`Int`](../../types/#int) |
| `InputChannels` |  | The list of input channels to pass as input to Shards. | `[0 1]` | [`[Int]`](../../types/#seq) |
| `OutputBus` |  | The output bus number, 0 is the audio device DAC. | `0` | [`Int`](../../types/#int) |
| `OutputChannels` |  | The list of output channels to write from Shards's output. | `[0 1]` | [`[Int]`](../../types/#seq) |
| `Volume` |  | The volume of this channel. | `0.7` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Shards` |  | The shards that will process audio data. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"



--8<-- "includes/license.md"

