---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Ref

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to be set to the variable. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input value is passed through as the output. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The key of the value to read from the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Overwrite` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable should be overwritten if it already exists. | `false` | [`Bool`](../../types/#bool) |

</div>

Creates an immutable reference variable. Once created this variable cannot be changed.

## Details

--8<-- "details/shards/General/Ref.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Ref/Ref.shs"
  ```

  ```
  --8<-- "samples/shards/General/Ref/Ref.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

