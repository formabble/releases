---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Isolate

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  |  | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Include` | :fontawesome-solid-circle-plus:{title="No"} No  | Includes only the listed variables | `None` | [`None`](../../types/#none)[`[String]`](../../types/#seq) |
| `Exclude` | :fontawesome-solid-circle-plus:{title="No"} No  | Ignores all the listed variables | `None` | [`None`](../../types/#none)[`[String]`](../../types/#seq) |

</div>

Isolates the inner shards' environment by only allowing certain variables

--8<-- "includes/license.md"

