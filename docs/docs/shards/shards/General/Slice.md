---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Slice

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string or sequence from which characters/elements have to be extracted. | | [`[Any]`](../../types/#seq)[`Bytes`](../../types/#bytes)[`String`](../../types/#string) |
| `Output ➡️` ||The extracted characters/elements. | | [`Any`](../../types/#any) |
| `From` | :fontawesome-solid-circle-plus:{title="No"} No  | The position/index of the first character or element that is to be extracted (including). Negative position/indices simply loop over the target string/sequence counting backwards. | `0` | [`Int`](../../types/#int)[`[Int]`](../../types/#seq)[`Var(Int)`](../../types/#contextvar)[`Var([Int])`](../../types/#contextvar) |
| `To` | :fontawesome-solid-circle-plus:{title="No"} No  | The position/index of the last character or element that is to be extracted (excluding). Negative position/indices simply loop over the target string/sequence counting backwards. | `None` | [`Int`](../../types/#int)[`[Int]`](../../types/#seq)[`Var(Int)`](../../types/#contextvar)[`Var([Int])`](../../types/#contextvar)[`None`](../../types/#none) |
| `Step` | :fontawesome-solid-circle-plus:{title="No"} No  | The increment between each position/index. Chooses every nth sample to extract, where n is the increment. Value has to be greater than zero. | `1` | [`Int`](../../types/#int) |

</div>

Extracts characters from a string or elements from a sequence based on the start and end positions/indices and an increment parameter. Operation is non-destructive; the target string/sequence is not modified.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Slice/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Slice/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

