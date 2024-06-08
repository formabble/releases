---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Tab

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the tab. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Title` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The title of the tab. | `None` | [`String`](../../types/#string) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

--8<-- "includes/experimental.md"

Represents a tab inside a DockArea.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Tab/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Tab/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

