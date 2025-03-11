---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BytesToAudio

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Accepts a byte array containing float samples. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Returns the constructed audio buffer. | | [`Audio`](../../types/#audio) |
| `Channels` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of channels. | `1` | [`Int`](../../types/#int) |
| `SampleRate` | :fontawesome-solid-circle-plus:{title="No"} No  | The sample rate in Hz. | `44100` | [`Int`](../../types/#int) |

</div>

Converts a byte array containing float samples back into an audio buffer.

--8<-- "includes/license.md"

