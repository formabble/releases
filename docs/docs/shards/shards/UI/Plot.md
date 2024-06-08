---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Plot

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the plot. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `ViewAspect` | :fontawesome-solid-circle-plus:{title="No"} No  | Width / height ratio of the plot region. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `DataAspect` | :fontawesome-solid-circle-plus:{title="No"} No  | Width / height ratio of the data. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `Legend` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to display the legend. | `None` | [`Bool`](../../types/#bool)[`None`](../../types/#none) |

</div>

A 2D plot area.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Plot/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Plot/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Plot/3.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Plot/3.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Plot/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Plot/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

