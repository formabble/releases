---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Area

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"}  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Position` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Absolute UI position; or when anchor is set, relative offset. (X/Y) | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `Pivot` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The pivot for the inner UI | `None` | [`Anchor`](../../../enums/Anchor)[`&Anchor`](../../types/#contextvar) |
| `Anchor` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Side of the screen to anchor the UI to. | `None` | [`Anchor`](../../../enums/Anchor)[`&Anchor`](../../types/#contextvar) |
| `Order` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Paint layer to be used for this UI. Default is background | `None` | [`Order`](../../../enums/Order) |

</div>

Places UI element at a specific position.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Area/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Area/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Area/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Area/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

