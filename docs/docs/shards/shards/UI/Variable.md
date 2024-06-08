---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Variable

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable that holds the value. | `None` | [`&Any`](../../types/#contextvar) |
| `Labeled` | :fontawesome-solid-circle-plus:{title="No"} No  | If the name of the variable should be visible as a label. | `false` | [`Bool`](../../types/#bool) |

</div>



## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Variable/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Variable/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

