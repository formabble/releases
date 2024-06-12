---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# RTake

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The sequence from which elements will be extracted. | | [`Bytes`](../../types/#bytes)[`String`](../../types/#string)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||The extracted elements. | | [`Any`](../../types/#any) |
| `Indices` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | One or more indices (counted backwards from the last element) to extract from a sequence. | `None` | [`Int`](../../types/#int)[`[Int]`](../../types/#seq)[`&Int`](../../types/#contextvar)[`&[Int]`](../../types/#contextvar) |

</div>

Works exactly like `Take` except that the selection indices are counted backwards from the last element in the target sequence. Also, `RTake` works only on sequences, not on tables.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/RTake/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/RTake/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

