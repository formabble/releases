---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Formalize

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input can be either none or a table representing initial form variable values such as fbl/pose. | | [`{Any}`](../../types/#table)[`None`](../../types/#none) |
| `Output ➡️` ||The output is the ID of the form, which can be either typed or untyped depending on the traits. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Id` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The id of the form asset. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Wait` | :fontawesome-solid-circle-plus:{title="No"} No  | If we should wait the full formalization of the form before continuing. | `false` | [`Bool`](../../types/#bool) |
| `Tags` | :fontawesome-solid-circle-plus:{title="No"} No  | The tags to add to the form. | `None` | [`[Any]`](../../types/#seq)[`None`](../../types/#none) |
| `Traits` | :fontawesome-solid-circle-plus:{title="No"} No  | Create a form and check if it has the given traits, implies wait = true. | `None` | [`None`](../../types/#none)[`{[Trait]}`](../../types/#table) |

</div>

Formalizes a form with the specified ID and optional tags and traits. It can wait for the full formalization process to complete before continuing.

--8<-- "includes/license.md"

