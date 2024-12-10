---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Get

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The output is the value read from the specified variable. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`Var(Any)`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The key of the value to read from the table (parameter applicable only if the target variable is a table). | `none` | [`Any`](../../types/#any) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Default` | :fontawesome-solid-circle-plus:{title="No"} No  | The default value used if the variable is not set, the key is not present, or there is a type mismatch. | `none` | [`Any`](../../types/#any) |

</div>

Reads the value of the specified variable.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Get/Get.shs"
  ```

  ```
  --8<-- "samples/shards/General/Get/Get.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

