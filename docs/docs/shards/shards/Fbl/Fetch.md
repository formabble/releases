---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Fetch

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid)[`[None Int16 Fbl.TypedFormId]`](../../types/#seq) |
| `<output>` || | | [`Any`](../../types/#any)[`[Any]`](../../types/#seq) |
| `Behavior` |  | The behavior where the variable to read is. | `None` | [`WirePoolType`](../../../enums/WirePoolType)[`&WirePoolType`](../../types/#contextvar) |
| `Name` |  | The variable name to read. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Key` |  | The optional key name if the variable to read is within table. | `None` | [`None`](../../types/#none)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Silent` |  | Ignore failures without logging. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `NoCache` |  | Don't cache variable states. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

