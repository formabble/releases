---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Http.Post

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none)[`{String}`](../../types/#table)[`Bytes`](../../types/#bytes)[`String`](../../types/#string) |
| `<output>` || | | [`{status: Int headers: {String} body: Bytes}`](../../types/#table)[`Bytes`](../../types/#bytes)[`{status: Int headers: {String} body: String}`](../../types/#table)[`String`](../../types/#string) |
| `URL` |  | The url to request to. | `` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Headers` |  | The headers to use for the request. | `None` | [`None`](../../types/#none)[`{String}`](../../types/#table)[`&{String}`](../../types/#contextvar) |
| `Timeout` |  | How many seconds to wait for the request to complete. | `10` | [`Int`](../../types/#int) |
| `Bytes` |  | If instead of a string the shard should output bytes. | `false` | [`Bool`](../../types/#bool) |
| `FullResponse` |  | If the output should be a table with the full response, including headers and status. | `false` | [`Bool`](../../types/#bool) |
| `AcceptInvalidCerts` |  | If we should ignore invalid certificates. This is useful for testing but should not be used in production. | `false` | [`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

