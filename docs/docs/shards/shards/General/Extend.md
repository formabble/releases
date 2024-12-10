---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Extend

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The sequence to be appended to the target sequence. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||The input sequence (pass-through). | | [`[Any]`](../../types/#seq) |
| `Target` | :fontawesome-solid-circle-plus:{title="No"} No  | The mutable sequence to extend. | `none` | [`Var([Any])`](../../types/#contextvar) |

</div>

Extends the mutable sequence parameter with the elements of the input sequence.

--8<-- "includes/license.md"

