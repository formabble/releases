---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Fetch

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid)[`[None Int16 Fbl.TypedFormId]`](../../types/#seq) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any)[`[Any]`](../../types/#seq) |
| `Behavior` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The behavior where the variable to read is. | `None` | [`WirePoolType`](../../../enums/WirePoolType)[`&WirePoolType`](../../types/#contextvar) |
| `Name` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable name to read. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The optional key name if the variable to read is within table. | `None` | [`None`](../../types/#none)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Silent` | :fontawesome-solid-circle-plus:{title="No"} No  | Ignore failures without logging. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `NoCache` | :fontawesome-solid-circle-plus:{title="No"} No  | Don't cache variable states. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

