---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Take

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The sequence or table from which elements/key-values have to be extracted. | | [`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Bytes`](../../types/#bytes)[`Color`](../../types/#color)[`String`](../../types/#string)[`[Any]`](../../types/#seq)[`{Any}`](../../types/#table) |
| `Output ➡️` ||The extracted elements/key-values. | | [`Any`](../../types/#any) |
| `Indices/Keys` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | One or more indices/keys to extract from a sequence/table. | `None` | [`Any`](../../types/#any)[`&Any`](../../types/#contextvar) |

</div>

Extracts one or more elements/key-values from a sequence or a table by using the provided sequence index/indices or table key(s). Operation is non-destructive; doesn't modify target sequence/table.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Take/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Take/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

