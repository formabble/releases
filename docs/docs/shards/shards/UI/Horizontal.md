---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Horizontal

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the layout. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Wrap` | :fontawesome-solid-circle-plus:{title="No"} No  | Wrap the content once it reaches the right edge. | `false` | [`Bool`](../../types/#bool) |
| `Centered` | :fontawesome-solid-circle-plus:{title="No"} No  | Center the contents horizontally. | `false` | [`Bool`](../../types/#bool) |

</div>

Layout the contents horizontally.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Horizontal/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Horizontal/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

