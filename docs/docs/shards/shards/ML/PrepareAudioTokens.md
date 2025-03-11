---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ML.PrepareAudioTokens

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`String`](../../types/#string) |
| `Output ➡️` ||The resulting output of the shard | | [`[Int]`](../../types/#seq)[`Tensor`](../../types/#tensor) |
| `Tokenizer` | :fontawesome-solid-circle-plus:{title="No"} No  | The tokenizer to use. | `none` | [`Var(Tokenizer)`](../../types/#contextvar) |
| `Language` | :fontawesome-solid-circle-plus:{title="No"} No  | The language code (e.g. 'en', 'fr', etc). | `none` | [`String`](../../types/#string) |
| `Task` | :fontawesome-solid-circle-plus:{title="No"} No  | The task type ('transcribe' or 'translate'). | `none` | [`String`](../../types/#string) |
| `Timestamps` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to include timestamp tokens. | `true` | [`Bool`](../../types/#bool) |
| `AsTensor` | :fontawesome-solid-circle-plus:{title="No"} No  | Output as tensor instead of sequence. | `false` | [`Bool`](../../types/#bool) |
| `GPU` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, the output tensor will be on GPU. | `false` | [`Bool`](../../types/#bool) |

</div>

Prepares the initial tokens for Whisper audio processing with language and task settings.

--8<-- "includes/license.md"

