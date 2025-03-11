---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.ScrollArea

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents to scroll. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Horizontal` | :fontawesome-solid-circle-plus:{title="No"} No  | Enable horizontal scrolling. | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Vertical` | :fontawesome-solid-circle-plus:{title="No"} No  | Enable vertical scrolling. | `true` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar)[`None`](../../types/#none) |
| `AlwaysShow` | :fontawesome-solid-circle-plus:{title="No"} No  | Always show the enabled scroll bars even if not needed. | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar)[`None`](../../types/#none) |
| `AutoShrink` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to automatically shrink the scroll area. | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar)[`None`](../../types/#none) |
| `MaxHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum height of scroll area. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`None`](../../types/#none) |
| `MaxWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum width of scroll area. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Add scrolling to contained UI elements.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/ScrollArea/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/ScrollArea/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

