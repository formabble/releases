---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Menu

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Contents shards of the menu. | | [`Any`](../../types/#any) |
| `<output>` ||A boolean value indicating whether the menu is active. | | [`Bool`](../../types/#bool) |
| `Title` |  | The title of the menu. | `None` | [`String`](../../types/#string) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

Creates a menu button that when clicked will show the given menu.

If called from within a menu this will instead create a button for a sub-menu.

--8<-- "includes/license.md"

