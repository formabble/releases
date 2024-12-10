---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Clear

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input is passed through as the output. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`Var(Any)`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The key of the value to read from the table (parameter applicable only if the target variable is a table). | `none` | [`Any`](../../types/#any) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |

</div>

Clears all elements from the sequence or table passed to it. Applicable only to sequences and tables. For sequences, this operation is very fast as Shards recycles memory extensively. If the variable does not exist or the type is not a sequence or table, it simply passes through without failing.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Clear/Clear.shs"
  ```

  ```
  --8<-- "samples/shards/General/Clear/Clear.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

