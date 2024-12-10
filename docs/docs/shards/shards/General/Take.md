---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Take

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The sequence or table from which elements or values will be extracted. | | [`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Bytes`](../../types/#bytes)[`Color`](../../types/#color)[`String`](../../types/#string)[`[Any]`](../../types/#seq)[`{Any}`](../../types/#table) |
| `Output ➡️` ||The extracted elements from a sequence or values from a table. If the key cannot be established to exist at compose time, the output will be of type Any. | | [`Any`](../../types/#any) |
| `Indices/Keys` | :fontawesome-solid-circle-plus:{title="No"} No  | One or more indices or keys to extract from a sequence or table. | `none` | [`Any`](../../types/#any)[`Var(Any)`](../../types/#contextvar) |

</div>

Extracts one or more elements from a sequence or values from a table using the provided indices or keys. This operation is non-destructive and does not modify the target sequence or table. If the key cannot be established to exist at compose time, the output will be of type Any.

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

