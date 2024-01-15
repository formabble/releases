---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Oscillator

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Float`](../../types/#float) |
| `<output>` || | | [`Audio`](../../types/#audio) |
| `Type` |  | The waveform type to oscillate. | `Waveform.Sine` | [`Waveform`](../../../enums/Waveform) |
| `Amplitude` |  | The waveform amplitude. | `0.4` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Channels` |  | The number of desired output audio channels. | `2` | [`Int`](../../types/#int) |
| `SampleRate` |  | The desired output sampling rate. Ignored if inside an Audio.Channel. | `44100` | [`Int`](../../types/#int) |
| `Samples` |  | The desired number of samples in the output. Ignored if inside an Audio.Channel. | `1024` | [`Int`](../../types/#int) |

</div>

--8<-- "includes/experimental.md"



--8<-- "includes/license.md"

