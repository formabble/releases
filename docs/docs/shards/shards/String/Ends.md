---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# String.Ends

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string to check. | | [`String`](../../types/#string) |
| `Output ➡️` ||True if the input string ends with the string specified, false otherwise. | | [`Bool`](../../types/#bool) |
| `With` | :fontawesome-solid-circle-plus:{title="No"} No  | The string that the input needs to end with to output true. | `` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |

</div>

This shard checks if the input string ends with the string specified in the With parameter. If the input string does contain the string specified, the shard will output true. Otherwise, it will output false.

## Details

--8<-- "details/shards/String/Ends.md"


--8<-- "includes/license.md"

