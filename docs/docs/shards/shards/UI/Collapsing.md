---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Collapsing

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the collapsing header. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Heading` | :fontawesome-solid-circle-plus:{title="No"} No  | The heading text or widgets for this collapsing header. | `none` | [`String`](../../types/#string)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `DefaultOpen` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether the collapsing header is opened by default. | `false` | [`Bool`](../../types/#bool) |

</div>

A header which can be collapsed/expanded, revealing a contained UI region.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Collapsing/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Collapsing/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Collapsing/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Collapsing/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

