---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the UI. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Object`](../../types/#object) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Scale` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI scale | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Queue` | :fontawesome-solid-circle-plus:{title="No"} No  | The draw queue. | `none` | [`None`](../../types/#none)[`Var(GFX.DrawQueue)`](../../types/#contextvar) |

</div>

Initializes a UI context

--8<-- "includes/license.md"

