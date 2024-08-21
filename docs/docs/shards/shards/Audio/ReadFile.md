---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.ReadFile

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Outputs audio data as an Audio chunk, containing the sample rate, number of samples, number of channels, and the audio samples. | | [`Audio`](../../types/#audio) |
| `Source` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The audio file or bytes to read from (wav,ogg,mp3,flac). | `None` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar)[`Bytes`](../../types/#bytes)[`Var(Bytes)`](../../types/#contextvar) |
| `Channels` | :fontawesome-solid-circle-plus:{title="No"} No  | An int representing the number of desired output audio channels. | `2` | [`Int`](../../types/#int) |
| `SampleRate` | :fontawesome-solid-circle-plus:{title="No"} No  | An int representing the desired output sampling rate. | `44100` | [`Int`](../../types/#int) |
| `Samples` | :fontawesome-solid-circle-plus:{title="No"} No  | An int representing the desired number of samples in the output. | `1024` | [`Int`](../../types/#int) |
| `Looped` | :fontawesome-solid-circle-plus:{title="No"} No  | A boolean value indicating whether the audio file should be played in loop or should stop the wire when it ends. | `false` | [`Bool`](../../types/#bool) |
| `From` | :fontawesome-solid-circle-plus:{title="No"} No  | A float value representing the starting time in seconds. | `None` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`None`](../../types/#none) |
| `To` | :fontawesome-solid-circle-plus:{title="No"} No  | A float value representing the end time in seconds. | `None` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"

This shard reads audio data from a file or memory buffer. It supports various audio formats including wav, ogg, mp3, and flac. Audio.ReadFile is designed to be used in conjunction with Audio.Device and Audio.Channel to process and play audio in the shards system. It provides the audio data that can be further processed or played through the audio device.

--8<-- "includes/license.md"

