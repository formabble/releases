---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.WriteFile

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Accepts audio data as an Audio chunk, containing the sample rate, number of samples, number of channels, and the audio samples. | | [`Audio`](../../types/#audio) |
| `Output ➡️` ||Outputs the same audio data as the input, allowing for further processing in the audio chain. | | [`Audio`](../../types/#audio) |
| `File` | :fontawesome-solid-circle-plus:{title="No"} No  | The audio file to write to (.wav). | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Channels` | :fontawesome-solid-circle-plus:{title="No"} No  | An int representing the number of desired output audio channels. | `2` | [`Int`](../../types/#int) |
| `SampleRate` | :fontawesome-solid-circle-plus:{title="No"} No  | An int representing the desired number of samples in the output. | `44100` | [`Int`](../../types/#int) |

</div>

--8<-- "includes/experimental.md"

This shard writes audio data to WAV format file.

--8<-- "includes/license.md"

