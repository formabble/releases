---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Http.Put

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none)[`{String}`](../../types/#table)[`Bytes`](../../types/#bytes)[`String`](../../types/#string) |
| `Output ➡️` ||The resulting output of the shard | | [`{status: Int headers: {String} body: Bytes}`](../../types/#table)[`Bytes`](../../types/#bytes)[`{status: Int headers: {String} body: String}`](../../types/#table)[`String`](../../types/#string) |
| `URL` | :fontawesome-solid-circle-plus:{title="No"} No  | The url to request to. | `` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Headers` | :fontawesome-solid-circle-plus:{title="No"} No  | The headers to use for the request. | `None` | [`None`](../../types/#none)[`{String}`](../../types/#table)[`&{String}`](../../types/#contextvar) |
| `Timeout` | :fontawesome-solid-circle-plus:{title="No"} No  | How many seconds to wait for the request to complete. | `10` | [`Int`](../../types/#int) |
| `Bytes` | :fontawesome-solid-circle-plus:{title="No"} No  | If instead of a string the shard should output bytes. | `false` | [`Bool`](../../types/#bool) |
| `FullResponse` | :fontawesome-solid-circle-plus:{title="No"} No  | If the output should be a table with the full response, including headers and status. | `false` | [`Bool`](../../types/#bool) |
| `AcceptInvalidCerts` | :fontawesome-solid-circle-plus:{title="No"} No  | If we should ignore invalid certificates. This is useful for testing but should not be used in production. | `false` | [`Bool`](../../types/#bool) |
| `Retry` | :fontawesome-solid-circle-plus:{title="No"} No  | How many times to retry the request if it fails. | `0` | [`Int`](../../types/#int) |
| `KeepAlive` | :fontawesome-solid-circle-plus:{title="No"} No  | If the client instance should be kept alive, allowing connection reuse for multiple requests. The client won't be closed until this shard cleans up (including its worker thread). | `false` | [`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

