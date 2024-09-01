---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# DSP.IFFT

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The frequency-domain representation of an audio to be converted. | | [`[Float2]`](../../types/#seq) |
| `Output ➡️` ||The time-domain representation of the audio as a float sequence, float2 sequence or an audio object (determined by the Audio and Complex parameters). | | [`[Float]`](../../types/#seq)[`[Float2]`](../../types/#seq)[`Audio`](../../types/#audio) |
| `Audio` | :fontawesome-solid-circle-plus:{title="No"} No  | If the output should be an Audio chunk. | `false` | [`Bool`](../../types/#bool) |
| `Complex` | :fontawesome-solid-circle-plus:{title="No"} No  | If the output should be complex numbers (only if not Audio). | `false` | [`Bool`](../../types/#bool) |

</div>

--8<-- "includes/experimental.md"

This shard performs an Inverse Fast Fourier Transform (IFFT) on the input. It takes the frequency-domain representation of an audio (represented as a float2 sequence) and returns its time-domain representation (as a float sequence, float2 sequence or an audio object.)

--8<-- "includes/license.md"

