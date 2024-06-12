---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Layout

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Not used. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Passthrough the input. | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Class` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The Layout class defining all layout options. | `None` | [`&Object`](../../types/#contextvar) |
| `MinSize` | :fontawesome-solid-circle-plus:{title="No"} No  | Minimum reserved space for the UI. Overridden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar)[`None`](../../types/#none) |
| `MaxSize` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum reserved space for the UI. Overridden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar)[`None`](../../types/#none) |
| `FillWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether the layout should occupy the full width. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `FillHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether the layout should occupy the full height. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Versatile layout with numerous customization options.

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

