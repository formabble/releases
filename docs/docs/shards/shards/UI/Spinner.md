---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Spinner

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Size` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Overrides the size of the spinner. This sets both the height and width, as the spinner is always square. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |

</div>

A spinner widget used to indicate loading.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Spinner/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Spinner/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

