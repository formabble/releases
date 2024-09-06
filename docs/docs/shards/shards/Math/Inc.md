---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Inc

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The float or integer (or sequence of floats or integers) to increase by 1. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input increased by 1. | | [`Any`](../../types/#any) |
| `Value` | :fontawesome-solid-circle-plus:{title="No"} No  | The value to apply the operation to. | `none` | [`Var(Int)`](../../types/#contextvar)[`Var(Int2)`](../../types/#contextvar)[`Var(Int3)`](../../types/#contextvar)[`Var(Int4)`](../../types/#contextvar)[`Var(Int8)`](../../types/#contextvar)[`Var(Int16)`](../../types/#contextvar)[`Var(Float)`](../../types/#contextvar)[`Var(Float2)`](../../types/#contextvar)[`Var(Float3)`](../../types/#contextvar)[`Var(Float4)`](../../types/#contextvar)[`Var(Color)`](../../types/#contextvar)[`Var([Any])`](../../types/#contextvar) |

</div>

Increases the input by 1.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Inc/Inc.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Inc/Inc.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

