---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Brotli.Compress

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The bytes sequence to compress. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The compressed bytes sequence. | | [`Bytes`](../../types/#bytes) |
| `Quality` | :fontawesome-solid-circle-plus:{title="No"} No  | Compression quality, higher is better but slower, valid values from 1 to 11. | `11` | [`Int`](../../types/#int) |

</div>

This shard compresses the input bytes sequence using the Brotli algorithm and returns the smaller compressed bytes sequence. The size of the resulting bytes sequence and the speed of compression can be controlled using the Quality parameter.

## Details

--8<-- "details/shards/Brotli/Compress.md"


--8<-- "includes/license.md"

