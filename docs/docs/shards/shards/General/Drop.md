---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Drop

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input is passed through as the output. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The key of the value to read from the table (parameter applicable only if the target variable is a table). | `None` | [`Any`](../../types/#any) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |

</div>

Drops the last element of the sequence variable. Works only on sequences. If the variable is not a sequence, it simply passes through without failing.

## Details

--8<-- "details/shards/General/Drop.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Drop/Drop.shs"
  ```

  ```
  --8<-- "samples/shards/General/Drop/Drop.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

