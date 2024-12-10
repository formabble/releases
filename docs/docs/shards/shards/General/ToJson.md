---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ToJson

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||If Pure is set to false, this shard accepts an input of any type. If Pure is set to true, this shard only accepts standard JSON types (tables, sequences, strings, numbers, booleans and none). | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input converted to a JSON string. | | [`String`](../../types/#string) |
| `Pure` | :fontawesome-solid-circle-plus:{title="No"} No  | If the input string is generic pure json rather then shards flavored json. | `true` | [`Bool`](../../types/#bool) |
| `Indent` | :fontawesome-solid-circle-plus:{title="No"} No  | How many spaces to use as json prettify indent. | `0` | [`Int`](../../types/#int) |

</div>

This shard takes its input and converts it into a JSON string.

## Details

--8<-- "details/shards/General/ToJson.md"


--8<-- "includes/license.md"

