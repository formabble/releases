---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Formalize

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input can be either none or a table with initial variable values, and the Behaviors the variables are located in, for the form to take such. Eg. {Graphics: {"fbl/pose": {translation: @f3(0 4.0 0) rotation: @f4(0 0 0 1) scale: @f3(1 1 1)}}} | | [`{Any}`](../../types/#table)[`None`](../../types/#none) |
| `Output ➡️` ||The output is the Form ID of the form, which can be either typed or untyped depending on the traits. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Id` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | full asset ID or asset name to formalize | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Wait` | :fontawesome-solid-circle-plus:{title="No"} No  | If the wire should wait for the form to complete formalization before continuing execution. | `false` | [`Bool`](../../types/#bool) |
| `Tags` | :fontawesome-solid-circle-plus:{title="No"} No  | The tags to add to the form. | `None` | [`[Any]`](../../types/#seq)[`None`](../../types/#none) |
| `Traits` | :fontawesome-solid-circle-plus:{title="No"} No  | Creates a form and verifies if it has the given traits. If Traits are provided, the shard will wait regardless of what is set in the Wait parameter. | `None` | [`None`](../../types/#none)[`{[Trait]}`](../../types/#table) |

</div>

Formalizes a form with optional tags and traits using the specified asset ID or asset name. This shard can wait for the formalization process to complete before proceeding.

--8<-- "includes/license.md"

