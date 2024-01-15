---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# IsAlmost

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The input can be of any number type or a sequence of such types. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`[Any]`](../../types/#seq) |
| `<output>` ||true if the input is almost equal to the given value; otherwise, false. | | [`Bool`](../../types/#bool) |
| `Value` |  | The value to test against for almost equality. | `None` | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`[Any]`](../../types/#seq) |
| `Threshold` |  | The smallest difference to be considered equal. Should be greater than zero. | `1.19209e-07` | [`Float`](../../types/#float)[`Int`](../../types/#int) |

</div>

Checks whether the input is almost equal to a given value.

--8<-- "includes/license.md"

