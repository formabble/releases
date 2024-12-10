---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Http.Read

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The output is a table containing the HTTP request method, headers, target, and body. | | [`{method: String headers: {String} target: String body: String}`](../../types/#table) |

</div>

This shard reads incoming HTTP requests from a client connection, parses its components, and outputs them as a table. This shard should be used in conjunction with the Http.Server shard to handle incoming requests.

## Details

--8<-- "details/shards/Http/Read.md"


--8<-- "includes/license.md"

