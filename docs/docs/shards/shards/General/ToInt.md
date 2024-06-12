---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ToInt

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type that can be converted to the specified output type. This includes sequences, strings, enums, and vector types. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The converted value in the specified output type. | | [`Any`](../../types/#any) |

</div>

Converts various input types (sequences, strings, enums, vectors) to the specified output type (e.g., integers, floats, colors). The conversion ensures type compatibility and handles different input formats.

## Details

--8<-- "details/shards/General/ToInt.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/ToInt/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/ToInt/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

