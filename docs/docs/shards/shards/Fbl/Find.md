---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Find

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A table with search criteria including 'name' for the form name, 'asset' for the asset type. eg. {name:" " asset:" "  | | [`{Any}`](../../types/#table) |
| `Output ➡️` ||The untyped Form ID of the first matching form or a sequence of untyped Form IDs if multiple forms match the criteria. typed Form ID's are retrieved instead if Traits are provided. | | [`Int16`](../../types/#int16) |
| `Partial` | :fontawesome-solid-circle-plus:{title="No"} No  | Search for partial name. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Insensitive` | :fontawesome-solid-circle-plus:{title="No"} No  | Search case insensitive. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Origin` | :fontawesome-solid-circle-plus:{title="No"} No  | The positional origin to start the search from. | `none` | [`None`](../../types/#none)[`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Multiple` | :fontawesome-solid-circle-plus:{title="No"} No  | Return multiple forms. When set to true, the output of the shard will be a sequence of Form IDs. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Traits` | :fontawesome-solid-circle-plus:{title="No"} No  | Traits to check for | `none` | [`None`](../../types/#none)[`{[Trait]}`](../../types/#table) |

</div>

Searches for forms based on specified criteria such as name, asset type, and traits. Supports partial and case-insensitive search options. Can return a single form or multiple forms based on the input parameters.

--8<-- "includes/license.md"

