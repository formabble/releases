---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Assert.Is

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The input can be of any type. | | [`Any`](../../types/#any) |
| `<output>` ||The output will be the input (passthrough). | | [`Any`](../../types/#any) |
| `Value` |  | The value to test against for equality. | `None` | [`Any`](../../types/#any) |
| `Break` |  | If we should trigger a debug breakpoint on failure. | `false` | [`Bool`](../../types/#bool) |

</div>

--8<-- "includes/experimental.md"

This assertion is used to check whether the input is equal to a given value.

--8<-- "includes/license.md"

