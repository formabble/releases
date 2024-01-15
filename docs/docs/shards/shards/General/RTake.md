---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# RTake

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The sequence from which elements have to be extracted. | | [`Bytes`](../../types/#bytes)[`String`](../../types/#string)[`[Any]`](../../types/#seq) |
| `<output>` ||The extracted elements. | | [`Any`](../../types/#any) |
| `Indices` |  | One or more indices (counted backwards from the last element) to extract from a sequence. | `None` | [`Int`](../../types/#int)[`[Int]`](../../types/#seq)[`&Int`](../../types/#contextvar)[`&[Int]`](../../types/#contextvar) |

</div>

--8<-- "includes/experimental.md"

Works exactly like `Take` except that the selection indices are counted backwards from the last element in the target sequence. Also, `RTake` works only on sequences, not on tables.

--8<-- "includes/license.md"

