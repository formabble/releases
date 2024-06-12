---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.HasTags

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The UUID or Entity ID of the form to check for the specified tags. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Output ➡️` ||A boolean value indicating whether the form has the specified tags. | | [`Bool`](../../types/#bool) |
| `Tags` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The tags to check. | `None` | [`[Any]`](../../types/#seq)[`&[Any]`](../../types/#contextvar) |
| `All` | :fontawesome-solid-circle-plus:{title="No"} No  | Check if all tags are present, if false check if any tag is present. | `true` | [`Bool`](../../types/#bool) |

</div>

Checks if the specified form has the given tags. Supports checking if all specified tags are present or if any of the tags are present.

--8<-- "includes/license.md"

