---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Formalize

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`{Any}`](../../types/#table)[`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Id` | :fontawesome-solid-circle-plus:{title="No"} No  | The id of the form asset. | `` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Wait` | :fontawesome-solid-circle-plus:{title="No"} No  | If we should wait the full formalization of the form before continuing. | `false` | [`Bool`](../../types/#bool) |
| `Tags` | :fontawesome-solid-circle-plus:{title="No"} No  | The tags to add to the form. | `None` | [`[Any]`](../../types/#seq)[`None`](../../types/#none) |
| `Traits` | :fontawesome-solid-circle-plus:{title="No"} No  | Create a form and check if it has the given traits, implies wait = true. | `None` | [`None`](../../types/#none)[`{[Trait]}`](../../types/#table) |

</div>



--8<-- "includes/license.md"

