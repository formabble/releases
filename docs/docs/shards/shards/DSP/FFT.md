---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# DSP.FFT

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The time-domain representation of an audio to be converted. Can be a float sequence, float2 sequence or a sound object. | | [`[Float]`](../../types/#seq)[`[Float2]`](../../types/#seq)[`Audio`](../../types/#audio) |
| `Output ➡️` ||The frequency-domain representation of the audio as a float2 sequence. | | [`[Float2]`](../../types/#seq) |

</div>

--8<-- "includes/experimental.md"

This shard performs a Fast Fourier Transform (FFT) on the input. It takes the time-domain representation of an audio (represented as a sounds object, float sequence or float2 sequence) and returns its frequency-domain representation as a float2 sequence.

--8<-- "includes/license.md"

