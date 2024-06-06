---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Zip

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`[{Any}]`](../../types/#seq)[`[[Any]]`](../../types/#seq) |
| `Sequences` |  | The sequences to zip together. | `None` | [`[[Any] &[Any]]`](../../types/#seq) |
| `Keys` |  | The element keys to user. | `None` | [`None`](../../types/#none)[`[String]`](../../types/#seq) |

</div>

Zip will take any number of sequences and return a sequence of sequences, where each sequence is a tuple of the values from the input sequences at the same index.

--8<-- "includes/license.md"

