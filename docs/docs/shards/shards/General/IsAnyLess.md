---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# IsAnyLess

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input of any type is accepted. For types without inherent value (e.g., None, Bool), a lexicographical comparison is used. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs true if any element in the input is less than the specified value and false otherwise. | | [`Bool`](../../types/#bool) |
| `Value` | :fontawesome-solid-circle-plus:{title="No"} No  | The value to check against. Note: This shard will not evaluate variables nested within sequences and tables. If you need to compare them against such variables, wrap them in parentheses, so that they are evaluated first. Example: Value:([your-variable]) instead of Value:your-variable. | `0` | [`Any`](../../types/#any) |

</div>

Checks if any element in the input is less than the given value. It outputs true if any element is less and false otherwise.

--8<-- "includes/license.md"
