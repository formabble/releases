---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Not

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value to be negated. | | [`Bool`](../../types/#bool) |
| `<output>` ||The negation of the input. | | [`Bool`](../../types/#bool) |

</div>

Computes the logical negation of the input.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Not/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Not/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

