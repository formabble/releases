---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.WithTrait

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||If a typed Form ID is provided, the specified form is checked for a specific trait. If none is provided, the current form is checked for a specific trait. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Output ➡️` ||The typed Form ID if the form possesses the specified trait. | | [`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Behavior` | :fontawesome-solid-circle-plus:{title="No"} No  | The Behavior to check | `none` | [`Behavior`](../../../enums/Behavior) |
| `Trait` | :fontawesome-solid-circle-plus:{title="No"} No  | The trait to check for | `none` | [`Trait`](../../types/#trait) |

</div>

Checks if the given form possesses a specified trait for a particular Behavior. If the form has the trait, it outputs the form's typed Form ID.

--8<-- "includes/license.md"

