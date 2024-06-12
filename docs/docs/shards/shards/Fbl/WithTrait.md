---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.WithTrait

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any form ID to be checked for a specific trait. | | [`None`](../../types/#none)[`Int16`](../../types/#int16)[`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Output ➡️` ||The form ID as a typed form if the form possesses the specified trait. | | [`Fbl.TypedFormId`](../../types/#fbl.typedformid) |
| `Behavior` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The behavior to check | `None` | [`WirePoolType`](../../../enums/WirePoolType) |
| `Trait` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The trait to check for | `None` | [`Trait`](../../types/#trait) |

</div>

Checks if the given form possesses a specified trait for a particular behavior. If the form has the trait, it outputs the form ID as a typed form.

--8<-- "includes/license.md"

