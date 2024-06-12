---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Find

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A table with search criteria including 'name' for the form name, 'asset' for the asset type, and other optional filters. | | [`{Any}`](../../types/#table) |
| `Output ➡️` ||The UUID of the first matching form or a sequence of UUIDs if multiple forms match the criteria. | | [`Int16`](../../types/#int16) |
| `Partial` | :fontawesome-solid-circle-plus:{title="No"} No  | Search for partial name. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Insensitive` | :fontawesome-solid-circle-plus:{title="No"} No  | Search case insensitive. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Origin` | :fontawesome-solid-circle-plus:{title="No"} No  | Origin to search from. | `None` | [`None`](../../types/#none)[`Float3`](../../types/#float3)[`&Float3`](../../types/#contextvar) |
| `Multiple` | :fontawesome-solid-circle-plus:{title="No"} No  | Return multiple forms. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Traits` | :fontawesome-solid-circle-plus:{title="No"} No  | Filter based on traits. | `None` | [`None`](../../types/#none)[`{[Trait]}`](../../types/#table) |

</div>

Searches for forms based on specified criteria such as name, asset type, and traits. Supports partial and case-insensitive search options. Can return a single form or multiple forms based on the input parameters.

--8<-- "includes/license.md"

