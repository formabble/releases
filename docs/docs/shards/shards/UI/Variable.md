---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Variable

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input passed through unchanged. | | [`Any`](../../types/#any) |
| `Variable` | :fontawesome-solid-circle-plus:{title="No"} No  | The variable that holds the value. | `none` | [`Var(Any)`](../../types/#contextvar) |
| `Labeled` | :fontawesome-solid-circle-plus:{title="No"} No  | If the name of the variable should be visible as a label. | `none` | [`Bool`](../../types/#bool) |

</div>

This shard creates a UI element that displays and allows interaction with the variable specified in the Variable parameter.

## Details

--8<-- "details/shards/UI/Variable.md"


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

