---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Resample

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Accepts audio data as an Audio chunk, containing the sample rate, number of samples, number of channels, and the audio samples. | | [`Audio`](../../types/#audio) |
| `Output ➡️` ||Outputs the resampled audio data. | | [`Audio`](../../types/#audio) |
| `SampleRate` | :fontawesome-solid-circle-plus:{title="No"} No  | The output sample rate. | `none` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |

</div>

--8<-- "includes/experimental.md"

This shard resamples audio data.

--8<-- "includes/license.md"

