---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Http.Stream

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||Bytes read from the stream. When the stream is exhausted, this will return an empty byte array. | | [`Bytes`](../../types/#bytes) |
| `Stream` | :fontawesome-solid-circle-plus:{title="No"} No  | The stream to read from. | `none` | [`Var(Object)`](../../types/#contextvar) |

</div>

Reads data from a previously opened stream.

--8<-- "includes/license.md"
