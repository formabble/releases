---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.MenuBar

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the menu bar. | | [`Any`](../../types/#any) |
| `Output ➡️` ||A boolean value indicating whether the menu bar is active. | | [`Bool`](../../types/#bool) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

The menu bar goes well in a `UI.TopPanel`.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/MenuBar/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/MenuBar/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

