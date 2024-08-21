---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Regex.Search

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string to search. | | [`String`](../../types/#string) |
| `Output ➡️` ||A sequence of strings, each containing one occurrence of the regex pattern. | | [`[String]`](../../types/#seq) |
| `Regex` | :fontawesome-solid-circle-plus:{title="No"} No  | The regular expression as a string. | `` | [`String`](../../types/#string) |

</div>

This shard searches the input string for the regex pattern specified in the Regex parameter and outputs a sequence of strings, containing every occurrence of the pattern. An empty sequence is returned if there are no matches

## Details

--8<-- "details/shards/Regex/Search.md"


--8<-- "includes/license.md"

