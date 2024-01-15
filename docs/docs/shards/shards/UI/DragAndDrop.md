---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.DragAndDrop

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Contents` |  | The property to retrieve from the UI context. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Hover` |  | Callback function for checking if this is a valid drop target. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Drop` |  | Callback function for when something is dropped. When set, this element will act as a drop target. When unset, it will act as a drag source. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `ID` |  | An optional ID value in case of ID conflicts. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Visualize` |  | Visualize valid drop targets | `None` | [`Bool`](../../types/#bool)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"

Drag and drop source & target.

--8<-- "includes/license.md"

