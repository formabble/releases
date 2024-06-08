---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Layout

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Class` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The Layout class describing all of the options relating to the layout of this UI. | `None` | [`&Object`](../../types/#contextvar) |
| `MinSize` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The minimum size of the space to be reserved by this UI. This allows the UI to take up more space than required for its widget contents. Can be overidden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `MaxSize` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The maximum size of the space to be reserved by this UI. Prevents UI from taking as much space as possible. Can be overidden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `FillWidth` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Whether the Layout should take up the full width of the available space. | `None` | [`Bool`](../../types/#bool) |
| `FillHeight` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Whether the Layout should take up the full height of the available space. | `None` | [`Bool`](../../types/#bool) |

</div>

Versatile layout with many options for customizing the desired UI.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Layout/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Layout/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Layout/3.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Layout/3.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Layout/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Layout/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

