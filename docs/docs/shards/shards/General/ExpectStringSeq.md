---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ExpectStringSeq

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input value. This shard checks if the input value matches the expected complex type. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input value if it matches the expected complex type. | | [`[String]`](../../types/#seq) |
| `Unsafe` | :fontawesome-solid-circle-plus:{title="No"} No  | If we should skip performing deep type hashing and comparison. (generally fast but this might improve performance) | `false` | [`Bool`](../../types/#bool) |

</div>

Checks if the input value matches the expected complex type. If the input value does not match the expected type, an error is thrown. The 'Unsafe' parameter can be set to skip deep type hashing and comparison to improve performance.

--8<-- "includes/license.md"

