---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Time.Pop

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Sequence` |  | A variables sequence of pairs [value pop-epoch-time-ms] with types [Any SHType::Int] | `None` | [`&(Any Int)`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

This shards delays its output until one of the values of the sequence parameter expires.

--8<-- "includes/license.md"

