---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Set

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to be set to the variable. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input value is passed through as the output. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The key of the value to write in the table (parameter applicable only if the target variable is a table). | `None` | [`Any`](../../types/#any) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Tracked` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable should be marked as tracked. | `false` | [`Bool`](../../types/#bool) |

</div>

Creates a mutable variable and assigns a value to it.

## Details

--8<-- "details/shards/General/Set.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Set/Set.shs"
  ```

  ```
  --8<-- "samples/shards/General/Set/Set.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

