---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Update

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to be set to the variable. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input value is passed through as the output. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The key of the value to read from the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |

</div>

Modifies the value of an existing mutable variable.

## Details

--8<-- "details/shards/General/Update.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Update/Update.shs"
  ```

  ```
  --8<-- "samples/shards/General/Update/Update.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

