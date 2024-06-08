---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Canvas

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`None`](../../types/#none) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  |  | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Rect` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The target UI position (X/Y/W/H) | `None` | [`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar) |
| `Order` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The order this UI is drawn in | `None` | [`Order`](../../../enums/Order) |

</div>

A canvas to draw UI elements on

--8<-- "includes/license.md"

