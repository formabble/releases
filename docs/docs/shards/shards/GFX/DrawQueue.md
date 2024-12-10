---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.DrawQueue

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The drawable queue object. | | [`GFX.DrawQueue`](../../types/#gfx.drawqueue) |
| `AutoClear` | :fontawesome-solid-circle-plus:{title="No"} No  | When enabled, automatically clears the queue after items have been rendered | `true` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Threaded` | :fontawesome-solid-circle-plus:{title="No"} No  | When enabled, output unique queue references to be able to use them with channels | `false` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Trace` | :fontawesome-solid-circle-plus:{title="No"} No  | Enables debug tracing on this queue | `false` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>

Creates a new drawable queue object to add drawables to (using GFX.Draw).

--8<-- "includes/license.md"

