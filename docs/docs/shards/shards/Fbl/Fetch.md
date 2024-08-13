---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Fetch

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The typed or untyped Form ID of the form(s) from which the variable is to be read. It can be a single Form ID or a sequence of Form IDs. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid)[`[None Int16 Fbl.TypedFormId]`](../../types/#seq) |
| `Output ➡️` ||The value(s) of the requested variable from the specified form(s). The output is either a single value or a sequence of values, depending on the input. | | [`Any`](../../types/#any)[`[Any]`](../../types/#seq) |
| `Behavior` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The Behavior where the variable to read is located. | `None` | [`WirePoolType`](../../../enums/WirePoolType)[`&WirePoolType`](../../types/#contextvar) |
| `Name` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable name to read. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The optional key name if the variable to read is within table. | `None` | [`None`](../../types/#none)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Silent` | :fontawesome-solid-circle-plus:{title="No"} No  | Ignore failures without logging. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `NoCache` | :fontawesome-solid-circle-plus:{title="No"} No  | Don't cache variable states. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>

Fetches the value of a specified variable from a form or a sequence of forms. The form is identified by its Form ID, and the variable is identified by its Behavior and name. This operation is asynchronous and can cross Behaviors, but when used within the same subsystem, it will execute inline. Supports optional caching and silent failure handling.

--8<-- "includes/license.md"

