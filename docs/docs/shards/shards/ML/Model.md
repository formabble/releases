---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ML.Model

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The resulting output of the shard | | [`Model`](../../types/#model) |
| `Model` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The model to use. | `None` | [`MLModels`](../../../enums/MLModels) |
| `Format` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The format of the model. | `None` | [`MLFormats`](../../../enums/MLFormats) |
| `Configuration` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The configuration of the model. | `None` | [`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `GPU` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to use the GPU (if available). | `false` | [`Bool`](../../types/#bool) |

</div>

This shard allows you to load a machine learning model and specify its format and configuration.

--8<-- "includes/license.md"

