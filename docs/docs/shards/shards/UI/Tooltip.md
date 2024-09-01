---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Tooltip

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to both the Contents and OnHover shards of the tooltip. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `OnHover` | :fontawesome-solid-circle-plus:{title="No"} No  | The tooltip contents. | `None` | [`String`](../../types/#string)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

Display a tooltip when the Contents is hovered over.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Tooltip/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Tooltip/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

