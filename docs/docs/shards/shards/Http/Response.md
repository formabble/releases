---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Http.Response

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input string or byte array will be used directly as the body of the response. | | [`String`](../../types/#string)[`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`String`](../../types/#string)[`Bytes`](../../types/#bytes) |
| `Status` | :fontawesome-solid-circle-plus:{title="No"} No  | The HTTP status code to return. | `200` | [`Int`](../../types/#int) |
| `Headers` | :fontawesome-solid-circle-plus:{title="No"} No  | The headers to attach to this response. | `None` | [`{String}`](../../types/#table)[`Var({String})`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

This shard sends an HTTP response to the client after receiving an HTTP request.

--8<-- "includes/license.md"

