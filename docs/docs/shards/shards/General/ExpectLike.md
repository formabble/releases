---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ExpectLike

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `TypeOf` |  | The example value to expect. The type of the constant given here will be checked against this shard's input. | `None` | [`Any`](../../types/#any) |
| `OutputOf` |  | Evaluates the output type of the given expression. That type will be checked against this shard's input. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Unsafe` |  | If we should skip performing deep type hashing and comparison. (generally fast but this might improve performance) | `false` | [`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

