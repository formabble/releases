---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# String.Starts

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string to check. | | [`String`](../../types/#string) |
| `Output ➡️` ||True if the input string starts with the string specified, false otherwise. | | [`Bool`](../../types/#bool) |
| `With` | :fontawesome-solid-circle-plus:{title="No"} No  | The string that the input needs to start with to output true. | `` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |

</div>

This shard checks if the input string starts with the string specified in the With parameter. If the input string does contain the string specified, the shard will output true. Otherwise, it will output false.

--8<-- "includes/license.md"

