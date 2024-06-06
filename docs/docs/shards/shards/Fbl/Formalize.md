---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Formalize

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`{Any}`](../../types/#table)[`None`](../../types/#none) |
| `<output>` || | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Id` |  | The id of the form asset. | `` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Wait` |  | If we should wait the full formalization of the form before continuing. | `false` | [`Bool`](../../types/#bool) |
| `Tags` |  | The tags to add to the form. | `None` | [`[Any]`](../../types/#seq)[`None`](../../types/#none) |
| `Traits` |  | Create a form and check if it has the given traits, implies wait = true. | `None` | [`None`](../../types/#none)[`{[Trait]}`](../../types/#table) |

</div>



--8<-- "includes/license.md"

