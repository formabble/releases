---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.ScrollArea

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Contents shards of the scroll area. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Horizontal` |  | Enable horizontal scrolling. | `false` | [`Bool`](../../types/#bool) |
| `Vertical` |  | Enable vertical scrolling. | `true` | [`Bool`](../../types/#bool) |
| `AlwaysShow` |  | Always show the enabled scroll bars even if not needed. | `false` | [`Bool`](../../types/#bool) |

</div>

Add vertical and/or horizontal scrolling to a contained UI.

--8<-- "includes/license.md"

