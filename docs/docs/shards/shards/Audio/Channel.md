---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Channel

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `InputBus` | :fontawesome-solid-circle-plus:{title="No"} No  | The input bus number, 0 is the audio device ADC. | `0` | [`Int`](../../types/#int) |
| `InputChannels` | :fontawesome-solid-circle-plus:{title="No"} No  | The list of input channels to pass as input to Shards. | `[0 1]` | [`[Int]`](../../types/#seq) |
| `OutputBus` | :fontawesome-solid-circle-plus:{title="No"} No  | The output bus number, 0 is the audio device DAC. | `0` | [`Int`](../../types/#int) |
| `OutputChannels` | :fontawesome-solid-circle-plus:{title="No"} No  | The list of output channels to write from Shards's output. | `[0 1]` | [`[Int]`](../../types/#seq) |
| `Volume` | :fontawesome-solid-circle-plus:{title="No"} No  | The volume of this channel. | `0.7` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Shards` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards that will process audio data. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"



--8<-- "includes/license.md"

