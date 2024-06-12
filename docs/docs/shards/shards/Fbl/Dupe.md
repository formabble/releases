---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Dupe

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The UUID or Entity ID of the form to be duplicated. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Output ➡️` ||The UUID of the newly duplicated form. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |

</div>

Duplicates the specified form by its UUID or Entity ID. The duplicated form retains the same traits, variables, and other properties as the original form. This operation is asynchronous, and the UUID of the new form is returned once the duplication process is complete.

--8<-- "includes/license.md"

