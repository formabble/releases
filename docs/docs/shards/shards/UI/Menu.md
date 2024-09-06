---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Menu

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the menu. | | [`Any`](../../types/#any) |
| `Output ➡️` ||A boolean value indicating whether the menu is active. | | [`Bool`](../../types/#bool) |
| `Title` | :fontawesome-solid-circle-plus:{title="No"} No  | The title of the menu. | `none` | [`String`](../../types/#string) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

Creates a menu button that when clicked will show the given menu. If called from within a menu this will instead create a button for a sub-menu.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Menu/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Menu/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

