---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Get

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The output is the value read from the variable. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"}  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"}  | The key of the value to read from the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"}  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Default` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The default value to use to infer types and output if the variable is not set, key is not there and/or type mismatches. | `None` | [`Any`](../../types/#any) |

</div>

Reads the value of the variable passed to it.

## Details

--8<-- "details/shards/General/Get.md"


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

