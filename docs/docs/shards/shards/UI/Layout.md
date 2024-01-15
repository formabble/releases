---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Layout

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Contents shards of the layout. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Class` |  | The Layout class describing all of the options relating to the layout of this UI. | `None` | [`&Object`](../../types/#contextvar) |
| `MinSize` |  | The minimum size of the space to be reserved by this UI. This allows the UI to take up more space than required for its widget contents. Can be overidden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `MaxSize` |  | The maximum size of the space to be reserved by this UI. Prevents UI from taking as much space as possible. Can be overidden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `FillWidth` |  | Whether the Layout should take up the full width of the available space. | `None` | [`Bool`](../../types/#bool) |
| `FillHeight` |  | Whether the Layout should take up the full height of the available space. | `None` | [`Bool`](../../types/#bool) |

</div>

--8<-- "includes/experimental.md"

Versatile layout with many options for customizing the desired UI.

--8<-- "includes/license.md"

