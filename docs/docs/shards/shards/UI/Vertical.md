---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Vertical

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the layout. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Centered` | :fontawesome-solid-circle-plus:{title="No"} No  | Center the contents horizontally. | `false` | [`Bool`](../../types/#bool) |

</div>

Layout the contents vertically.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Vertical/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Vertical/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Vertical/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Vertical/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

