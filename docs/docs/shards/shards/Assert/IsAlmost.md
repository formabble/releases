---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Assert.IsAlmost

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input can be of any number type or a sequence of such types. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||The output will be the input (passthrough). | | [`Any`](../../types/#any) |
| `Value` | :fontawesome-solid-circle-plus:{title="No"} No  | The value to test against for almost equality. | `none` | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`[Any]`](../../types/#seq)[`Var(Float Float2 Float3 Float4 Int Int2 Int3 Int4 Int8 Int16 [Any])`](../../types/#contextvar) |
| `Abort` | :fontawesome-solid-circle-plus:{title="No"} No  | If we should abort the process on failure. | `false` | [`Bool`](../../types/#bool) |
| `Threshold` | :fontawesome-solid-circle-plus:{title="No"} No  | The smallest difference to be considered equal. Should be greater than zero. | `1.19209e-07` | [`Float`](../../types/#float)[`Int`](../../types/#int) |

</div>

This assertion is used to check whether the input is almost equal to a given value.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Assert/IsAlmost/4.shs"
  ```

  ```
  --8<-- "samples/shards/Assert/IsAlmost/4.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Assert/IsAlmost/3.shs"
  ```

  ```
  --8<-- "samples/shards/Assert/IsAlmost/3.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Assert/IsAlmost/1.shs"
  ```

  ```
  --8<-- "samples/shards/Assert/IsAlmost/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

