---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.BottomPanel

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the panel. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Resizable` | :fontawesome-solid-circle-plus:{title="No"}  | Whether the panel can be resized. | `None` | [`Bool`](../../types/#bool)[`None`](../../types/#none) |
| `DefaultSize` | :fontawesome-solid-circle-plus:{title="No"}  | The initial size of the panel. | `None` | [`Float`](../../types/#float)[`None`](../../types/#none) |
| `MinSize` | :fontawesome-solid-circle-plus:{title="No"}  | The minimum allowable size of the panel. | `None` | [`Float`](../../types/#float)[`None`](../../types/#none) |
| `MaxSize` | :fontawesome-solid-circle-plus:{title="No"}  | The maximum allowable size of the panel. | `None` | [`Float`](../../types/#float)[`None`](../../types/#none) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"}  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

Layout UI elements into the panel.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/BottomPanel/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/BottomPanel/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

