---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.ScrollArea

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the scroll area. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Horizontal` | :fontawesome-solid-circle-plus:{title="No"} No  | Enable horizontal scrolling. | `false` | [`Bool`](../../types/#bool) |
| `Vertical` | :fontawesome-solid-circle-plus:{title="No"} No  | Enable vertical scrolling. | `true` | [`Bool`](../../types/#bool) |
| `AlwaysShow` | :fontawesome-solid-circle-plus:{title="No"} No  | Always show the enabled scroll bars even if not needed. | `false` | [`Bool`](../../types/#bool) |

</div>

Add vertical and/or horizontal scrolling to a contained UI.

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

