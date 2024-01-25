---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# AppendTo

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value to append to the collection. | | [`Any`](../../types/#any) |
| `<output>` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Collection` |  | The collection to add the input to. | `None` | [`&[Any]`](../../types/#contextvar)[`&String`](../../types/#contextvar)[`&Bytes`](../../types/#contextvar) |

</div>

Appends the input to the context variable passed to `:Collection`.

## Details

--8<-- "details/shards/General/AppendTo.md"


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

