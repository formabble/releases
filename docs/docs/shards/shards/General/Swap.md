---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Swap

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any input is ignored. | | [`Any`](../../types/#any) |
| `<output>` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `NameA` |  | The name of first variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `NameB` |  | The name of second variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |

</div>

Swaps the values of the two variables passed to it via `:NameA` and `:NameB` parameters.

--8<-- "includes/license.md"

