---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.ReadBuffer

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Bool`](../../types/#bool) |
| `Buffer` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The buffer to read | `None` | [`Var(GFX.Buffer)`](../../types/#contextvar) |
| `Var` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable to read the data into | `None` | [`Var({Any})`](../../types/#contextvar) |
| `Wait` | :fontawesome-solid-circle-plus:{title="No"} No  | Wait for read to complete | `false` | [`Bool`](../../types/#bool) |

</div>

Creates a new graphics buffer 

--8<-- "includes/license.md"

