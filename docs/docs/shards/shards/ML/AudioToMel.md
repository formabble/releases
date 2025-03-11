---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ML.AudioToMel

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The resulting output of the shard | | [`Tensor`](../../types/#tensor) |
| `GPU` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to use GPU for processing. | `false` | [`Bool`](../../types/#bool) |
| `NumMelBins` | :fontawesome-solid-circle-plus:{title="No"} No  | Number of mel bins (80 or 128). | `80` | [`Int`](../../types/#int) |

</div>

Converts raw audio bytes to mel spectrograms using Whisper's mel filters.

--8<-- "includes/license.md"

