---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.ReadFile

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`Audio`](../../types/#audio) |
| `File` |  | The audio file to read from (wav,ogg,mp3,flac). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Channels` |  | The number of desired output audio channels. | `2` | [`Int`](../../types/#int) |
| `SampleRate` |  | The desired output sampling rate. Ignored if inside an Audio.Channel. | `44100` | [`Int`](../../types/#int) |
| `Samples` |  | The desired number of samples in the output. Ignored if inside an Audio.Channel. | `1024` | [`Int`](../../types/#int) |
| `Looped` |  | If the file should be played in loop or should stop the wire when it ends. | `false` | [`Bool`](../../types/#bool) |
| `From` |  | The starting time in seconds. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `To` |  | The end time in seconds. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"



--8<-- "includes/license.md"

