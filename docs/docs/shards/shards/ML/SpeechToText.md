---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ML.SpeechToText

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Tensor`](../../types/#tensor) |
| `Output ➡️` ||The resulting output of the shard | | [`String`](../../types/#string) |
| `Model` | :fontawesome-solid-circle-plus:{title="No"} No  | The Whisper model to use. | `none` | [`Var(Model)`](../../types/#contextvar) |
| `Tokenizer` | :fontawesome-solid-circle-plus:{title="No"} No  | The tokenizer to use. | `none` | [`Var(Tokenizer)`](../../types/#contextvar) |
| `Language` | :fontawesome-solid-circle-plus:{title="No"} No  | Optional language code (e.g. 'en', 'fr'). If not specified, language will be auto-detected. | `none` | [`String`](../../types/#string) |
| `Task` | :fontawesome-solid-circle-plus:{title="No"} No  | The task type ('transcribe' or 'translate'). | `none` | [`String`](../../types/#string) |
| `Timestamps` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to include timestamps in output. | `false` | [`Bool`](../../types/#bool) |
| `BeamSize` | :fontawesome-solid-circle-plus:{title="No"} No  | Beam size for decoding (default: 5). | `5` | [`Int`](../../types/#int) |

</div>

Complete speech-to-text pipeline using Whisper model. Takes a MEL spectrogram tensor as input and outputs transcribed text.

--8<-- "includes/license.md"

