---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Assert.IsNot

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input can be of any type. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output will be the input (passthrough). | | [`Any`](../../types/#any) |
| `Value` | :fontawesome-solid-circle-plus:{title="No"} No  | The value to test against for equality. | `none` | [`Any`](../../types/#any) |
| `Break` | :fontawesome-solid-circle-plus:{title="No"} No  | If we should trigger a debug breakpoint on failure. | `false` | [`Bool`](../../types/#bool) |

</div>

This assertion is used to check whether the input is different from a given value.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Assert/IsNot/3.shs"
  ```

  ```
  --8<-- "samples/shards/Assert/IsNot/3.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

