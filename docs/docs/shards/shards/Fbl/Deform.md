---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Deform

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||If typed or untyped Form ID is provided, the shard destroys the specified form. If none is provided, the current form is destroyed. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |

</div>

Destroys the specified form. The Form ID is passed through unchanged. Be careful when using this output Form ID as the form has been destroyed and no longer exists in the domain

--8<-- "includes/license.md"

