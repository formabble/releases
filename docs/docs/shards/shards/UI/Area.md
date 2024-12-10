---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Area

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Position` | :fontawesome-solid-circle-plus:{title="No"} No  | Defines the position of the UI element. If 'Anchor' is set, this acts as a relative offset (X/Y). Accepts fixed and variable float2 types. | `none` | [`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |
| `Pivot` | :fontawesome-solid-circle-plus:{title="No"} No  | Specifies the pivot point of the UI element. Can be any predefined anchor type or variable. | `none` | [`Anchor`](../../../enums/Anchor)[`Var(Anchor)`](../../types/#contextvar) |
| `Anchor` | :fontawesome-solid-circle-plus:{title="No"} No  | Determines the side of the screen where the UI element is anchored. Accepts predefined anchor types or variables. | `none` | [`Anchor`](../../../enums/Anchor)[`Var(Anchor)`](../../types/#contextvar) |
| `Order` | :fontawesome-solid-circle-plus:{title="No"} No  | Sets the rendering layer for the UI element. The default layer is 'background'. | `none` | [`Order`](../../../enums/Order) |
| `Constrain` | :fontawesome-solid-circle-plus:{title="No"} No  | Constrains the UI element to remain within the screen boundaries. Accepts a boolean value. | `false` | [`Bool`](../../types/#bool) |
| `ForcedSize` | :fontawesome-solid-circle-plus:{title="No"} No  | Force area to be the given size, will update the area state | `none` | [`None`](../../types/#none)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |

</div>

Places UI element at a specific position.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Area/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Area/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Area/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Area/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

