---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Http.Chunk

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input to the chunk shard is the data (String or Bytes) to be sent in the current chunk. This data is part of a larger response that will be sent in multiple chunks if necessary. | | [`String`](../../types/#string)[`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The output is the same as the input. The chunked transfer encoding is handled internally when writing to the socket. | | [`String`](../../types/#string)[`Bytes`](../../types/#bytes) |
| `Status` | :fontawesome-solid-circle-plus:{title="No"} No  | The HTTP status code to return. | `200` | [`Int`](../../types/#int) |
| `Headers` | :fontawesome-solid-circle-plus:{title="No"} No  | The headers to attach to this response. | `none` | [`{String}`](../../types/#table)[`Var({String})`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

This shard processes and packages outgoing Http response date into smaller manageable pieces and subsequently writes them to the socket while managing the chunked transfer encoding process.

## Details

--8<-- "details/shards/Http/Chunk.md"


--8<-- "includes/license.md"

