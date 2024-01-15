---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.MainWindow

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`Object`](../../types/#object) |
| `Title` |  | The title of the window to create. | `Shards Window` | [`None`](../../types/#none)[`String`](../../types/#string) |
| `Width` |  | The width of the window to create. In pixels and DPI aware. | `1280` | [`Int`](../../types/#int) |
| `Height` |  | The height of the window to create. In pixels and DPI aware. | `720` | [`Int`](../../types/#int) |
| `Contents` |  | The main input loop of this window. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `DetachRenderer` |  | When enabled, no default graphics renderer will be available in the contents wire. | `false` | [`Bool`](../../types/#bool) |
| `HandleCloseEvent` |  | When set to false; the close event will not be handled and abort the wire the window is running in. True by default. | `true` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `UseDisplayScaling` |  | When enabled, the window size will be scaled using the OS's provided scaling value. True by default. | `true` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

