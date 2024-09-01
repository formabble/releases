---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.WithTags

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||No input is required for this shard. | | [`None`](../../types/#none) |
| `Output ➡️` ||A sequence of untyped Form IDs of forms that match the specified tag criteria. | | [`[Int16]`](../../types/#seq) |
| `Tags` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The tags to check for. | `None` | [`[Any]`](../../types/#seq)[`Var([Any])`](../../types/#contextvar) |
| `All` | :fontawesome-solid-circle-plus:{title="No"} No  | Check if all tags are present, if false check if any tag is present. | `true` | [`Bool`](../../types/#bool) |

</div>

Checks forms based on the specified tags and outputs a sequence of untyped Form ID's of forms that match the criteria. Supports checking if all specified tags are present or if any of the tags are present.

--8<-- "includes/license.md"

