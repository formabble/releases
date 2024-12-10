---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.TopPanel

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the panel. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Resizable` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether the panel can be resized. | `false` | [`Bool`](../../types/#bool) |
| `DefaultSize` | :fontawesome-solid-circle-plus:{title="No"} No  | The initial size of the panel. | `none` | [`Float`](../../types/#float)[`None`](../../types/#none) |
| `MinSize` | :fontawesome-solid-circle-plus:{title="No"} No  | The minimum allowable size of the panel. | `none` | [`Float`](../../types/#float)[`None`](../../types/#none) |
| `MaxSize` | :fontawesome-solid-circle-plus:{title="No"} No  | The maximum allowable size of the panel. | `none` | [`Float`](../../types/#float)[`None`](../../types/#none) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

Layout UI elements into the panel.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/TopPanel/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/TopPanel/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

