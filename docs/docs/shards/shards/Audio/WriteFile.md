---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.WriteFile

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Audio`](../../types/#audio) |
| `Output ➡️` ||The resulting output of the shard | | [`Audio`](../../types/#audio) |
| `File` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The audio file to read from (wav,ogg,mp3,flac). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Channels` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of desired output audio channels. | `2` | [`Int`](../../types/#int) |
| `SampleRate` | :fontawesome-solid-circle-plus:{title="No"} No  | The desired output sampling rate. | `44100` | [`Int`](../../types/#int) |

</div>

--8<-- "includes/experimental.md"



--8<-- "includes/license.md"

