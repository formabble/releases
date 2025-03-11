---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.ReadFileBytes

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The path to the audio file to read. | | [`String`](../../types/#string) |
| `Output ➡️` ||The complete audio file contents as raw PCM float32 samples. | | [`Bytes`](../../types/#bytes) |
| `Channels` | :fontawesome-solid-circle-plus:{title="No"} No  | An int representing the number of desired output audio channels. | `2` | [`Int`](../../types/#int) |
| `SampleRate` | :fontawesome-solid-circle-plus:{title="No"} No  | An int representing the desired output sampling rate. | `44100` | [`Int`](../../types/#int) |

</div>

This shard reads an entire audio file into bytes. Unlike Audio.ReadFile, this shard reads the complete file at once and outputs it as bytes, without the uint16_t sample count limitation of SHAudio. This is useful when you need to process large audio files in their entirety.

--8<-- "includes/license.md"

