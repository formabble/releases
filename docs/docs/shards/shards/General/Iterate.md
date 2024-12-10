---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Iterate

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input table to perform the range query on. | | [`{Any}`](../../types/#table) |
| `Output ➡️` ||Passes through the input table unchanged. | | [`{Any}`](../../types/#table) |
| `From` | :fontawesome-solid-circle-plus:{title="No"} No  | The starting key to begin searching from (including this key). | `none` | [`Any`](../../types/#any) |
| `To` | :fontawesome-solid-circle-plus:{title="No"} No  | The ending key to stop searching at (not including this key). If not provided or same as From, will keep searching until From no longer matches. | `none` | [`Any`](../../types/#any)[`None`](../../types/#none) |
| `Action` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to run on each matching element that is found. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

Searches through a sorted table input for a range of matching elements. Returns all values from the table that have keys between the From and To keys. If Focused is true, will stop searching once From no longer matches.

--8<-- "includes/license.md"

