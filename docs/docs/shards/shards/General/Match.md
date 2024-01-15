---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Match

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that's compared with the declared cases. | | [`Any`](../../types/#any) |
| `<output>` ||Same value as input if `:Passthrough` is `true` else the output of the matched case's shard if `:Passthrough` is `false`. | | [`Any`](../../types/#any) |
| `Cases` |  | Values to match against the input. A `nil` case will match anything. | `[]` | [`[Any]`](../../types/#seq) |
| `Passthrough` |  | Parameter to control the shard's output. `true` allows the `Match` shard's input itself to appear as its output; `false` allows the matched shard's output to appear as `Match` shard's output. | `true` | [`Bool`](../../types/#bool) |

</div>

Compares the input with the declared cases (in order of the declaration) and activates the shard of the first matched case.

## Details

--8<-- "details/shards/General/Match.md"


--8<-- "includes/license.md"

