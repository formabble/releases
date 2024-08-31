---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Count

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Outputs the count of characters, elements, or key-value pairs in the specified variable. If the variable type does not match, it outputs 0. | | [`Int`](../../types/#int) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`Var(Any)`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The key of the value to read from the table (parameter applicable only if the target variable is a table). | `None` | [`Any`](../../types/#any) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |

</div>

This shard counts the sequence, string or table variable specified in the Name parameter. If the variable specified is a string, it will count the number of characters. If the variable specified is a sequence, it will count the number of elements. If the variable specified is a table, it will count the number of key-value pairs.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Count/Count.shs"
  ```

  ```
  --8<-- "samples/shards/General/Count/Count.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

