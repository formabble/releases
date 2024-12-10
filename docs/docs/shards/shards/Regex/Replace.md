---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Regex.Replace

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string to modify. | | [`String`](../../types/#string) |
| `Output ➡️` ||The input string with all occurrences of the regex pattern replaced with the replacement string. | | [`String`](../../types/#string) |
| `Regex` | :fontawesome-solid-circle-plus:{title="No"} No  | The regular expression as a string. | `` | [`String`](../../types/#string) |
| `Replacement` | :fontawesome-solid-circle-plus:{title="No"} No  | The regex replacement expression. | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |

</div>

This shard modifies the input string by replacing all occurrences of the regex pattern, specified in the Regex parameter, with the replacement string specified in the Replacement parameter.

## Details

--8<-- "details/shards/Regex/Replace.md"


--8<-- "includes/license.md"

