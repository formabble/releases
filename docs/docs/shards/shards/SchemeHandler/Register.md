---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# SchemeHandler.Register

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`None`](../../types/#none) |
| `Scheme` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The name of the scheme, as in "http" in "http://something" | `None` | [`String`](../../types/#string) |
| `Command` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Command to execute when the scheme is invoked (%1 indicates the argument) | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |

</div>



--8<-- "includes/license.md"

