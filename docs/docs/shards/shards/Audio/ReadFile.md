---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.ReadFile

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Audio`](../../types/#audio) |
| `Source` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The audio file or bytes to read from (wav,ogg,mp3,flac). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`Bytes`](../../types/#bytes)[`&Bytes`](../../types/#contextvar) |
| `Channels` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of desired output audio channels. | `2` | [`Int`](../../types/#int) |
| `SampleRate` | :fontawesome-solid-circle-plus:{title="No"} No  | The desired output sampling rate. | `44100` | [`Int`](../../types/#int) |
| `Samples` | :fontawesome-solid-circle-plus:{title="No"} No  | The desired number of samples in the output. | `1024` | [`Int`](../../types/#int) |
| `Looped` | :fontawesome-solid-circle-plus:{title="No"} No  | If the file should be played in loop or should stop the wire when it ends. | `false` | [`Bool`](../../types/#bool) |
| `From` | :fontawesome-solid-circle-plus:{title="No"} No  | The starting time in seconds. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `To` | :fontawesome-solid-circle-plus:{title="No"} No  | The end time in seconds. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"



--8<-- "includes/license.md"

