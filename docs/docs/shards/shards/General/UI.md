---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Contents shards of the UI. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Object`](../../types/#object) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Scale` |  | The UI scale | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Queue` |  | The draw queue. | `None` | [`None`](../../types/#none)[`&GFX.DrawQueue`](../../types/#contextvar) |

</div>

Initializes a UI context

--8<-- "includes/license.md"

