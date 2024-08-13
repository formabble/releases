---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Dupe

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The Form ID of the form to be duplicated. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Output ➡️` ||The Form ID of the newly duplicated form. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Wait` | :fontawesome-solid-circle-plus:{title="No"} No  | Wait for the duplication process to complete before continuing. | `true` | [`Bool`](../../types/#bool) |

</div>

Duplicates the form specified (that is specified through the Form ID passed in as input). The duplicated form retains the same traits, variables, and other properties as the original form. This operation is asynchronous, and the Form ID of the new form is returned once the duplication process is complete.

--8<-- "includes/license.md"

