---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Collapsing

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Contents shards of the collapsing header. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Heading` |  | The heading text or widgets for this collapsing header. | `None` | [`String`](../../types/#string)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `DefaultOpen` |  | Whether the collapsing header is opened by default. | `false` | [`Bool`](../../types/#bool) |

</div>

A header which can be collapsed/expanded, revealing a contained UI region.

--8<-- "includes/license.md"

