---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Http.SendFile

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input for this shard should be a string representing the path to the file to be sent. | | [`String`](../../types/#string) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`String`](../../types/#string) |
| `Headers` | :fontawesome-solid-circle-plus:{title="No"} No  | The headers to attach to this response. | `None` | [`{String}`](../../types/#table)[`Var({String})`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

This shard sends a static file to the client over HTTP.

--8<-- "includes/license.md"

