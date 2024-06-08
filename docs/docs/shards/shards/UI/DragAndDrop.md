---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.DragAndDrop

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The property to retrieve from the UI context. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Hover` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for checking if this is a valid drop target. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Drop` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for when something is dropped. When set, this element will act as a drop target. When unset, it will act as a drag source. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `ID` | :fontawesome-solid-circle-plus:{title="No"} No  | An optional ID value in case of ID conflicts. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Visualize` | :fontawesome-solid-circle-plus:{title="No"} No  | Visualize valid drop targets | `None` | [`Bool`](../../types/#bool)[`None`](../../types/#none) |

</div>

Drag and drop source & target.

--8<-- "includes/license.md"

