---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Oscillator

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Accepts a float value representing the frequency of the waveform in Hertz (Hz). | | [`Float`](../../types/#float) |
| `Output ➡️` ||Outputs audio data as an Audio chunk, containing the generated waveform samples. | | [`Audio`](../../types/#audio) |
| `Type` | :fontawesome-solid-circle-plus:{title="No"} No  | The waveform type to oscillate (Sine, Square, Triangle or Sawtooth). | `Waveform::Sine` | [`Waveform`](../../../enums/Waveform) |
| `Amplitude` | :fontawesome-solid-circle-plus:{title="No"} No  | A float representing the waveform amplitude. | `0.4` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Channels` | :fontawesome-solid-circle-plus:{title="No"} No  | An int representing the number of desired output audio channels. | `2` | [`Int`](../../types/#int) |
| `SampleRate` | :fontawesome-solid-circle-plus:{title="No"} No  | An int representing desired output sampling rate. Ignored if this shard is inside an Audio.Channel. | `44100` | [`Int`](../../types/#int) |
| `Samples` | :fontawesome-solid-circle-plus:{title="No"} No  | An int representing desired number of samples in the output. Ignored if this shard is inside an Audio.Channel. | `1024` | [`Int`](../../types/#int) |

</div>

--8<-- "includes/experimental.md"

This shard generates audio waveforms. It can produce various types of waveforms such as sine, square, triangle, and sawtooth. The Oscillator is typically used within an Audio.Channel and can be controlled by other shards to create dynamic audio effects or synthesize sounds.

--8<-- "includes/license.md"

