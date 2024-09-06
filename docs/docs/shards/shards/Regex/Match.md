---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Regex.Match

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string to match. | | [`String`](../../types/#string) |
| `Output ➡️` ||Outputs either a sequence of strings, containing the fully matched string and any capture groups or an empty sequence if there are no matches. | | [`[String]`](../../types/#seq) |
| `Regex` | :fontawesome-solid-circle-plus:{title="No"} No  | The regular expression as a string. | `` | [`String`](../../types/#string) |

</div>

This shard matches the entire input string against the regex pattern specified in the Regex parameter and outputs a sequence of strings, containing the fully matched string and any capture groups. It will return an empty sequence if there are no matches.

## Details

--8<-- "details/shards/Regex/Match.md"


--8<-- "includes/license.md"

