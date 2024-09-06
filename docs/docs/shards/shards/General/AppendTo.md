---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# AppendTo

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to append to the collection. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Collection` | :fontawesome-solid-circle-plus:{title="No"} No  | The collection to add the input to. | `none` | [`Var([Any])`](../../types/#contextvar)[`Var(String)`](../../types/#contextvar)[`Var(Bytes)`](../../types/#contextvar) |

</div>

Appends the input to the context variable passed to `:Collection`.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/AppendTo/AppendTo.shs"
  ```

  ```
  --8<-- "samples/shards/General/AppendTo/AppendTo.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

