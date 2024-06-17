---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Oscillator

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Float`](../../types/#float) |
| `Output ➡️` ||The resulting output of the shard | | [`Audio`](../../types/#audio) |
| `Type` | :fontawesome-solid-circle-plus:{title="No"} No  | The waveform type to oscillate. | `Waveform::Sine` | [`Waveform`](../../../enums/Waveform) |
| `Amplitude` | :fontawesome-solid-circle-plus:{title="No"} No  | The waveform amplitude. | `0.4` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Channels` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of desired output audio channels. | `2` | [`Int`](../../types/#int) |
| `SampleRate` | :fontawesome-solid-circle-plus:{title="No"} No  | The desired output sampling rate. Ignored if inside an Audio.Channel. | `44100` | [`Int`](../../types/#int) |
| `Samples` | :fontawesome-solid-circle-plus:{title="No"} No  | The desired number of samples in the output. Ignored if inside an Audio.Channel. | `1024` | [`Int`](../../types/#int) |

</div>

--8<-- "includes/experimental.md"



--8<-- "includes/license.md"

