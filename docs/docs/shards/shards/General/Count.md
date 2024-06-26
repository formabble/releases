---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Count

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Outputs the count of characters, elements, or key-value pairs in the specified variable. If the input type does not match, it outputs 0. | | [`Int`](../../types/#int) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The key of the value to read from the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |

</div>

Outputs the count of characters (if the input is a string), elements (if the input is a sequence), or key-value pairs (if the input is a table). If the input type does not match any of these, it outputs 0.

## Details

--8<-- "details/shards/General/Count.md"


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

