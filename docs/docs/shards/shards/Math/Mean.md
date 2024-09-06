---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Mean

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The sequence of floating point numbers to calculate the average of. | | [`[Float]`](../../types/#seq) |
| `Output ➡️` ||The calculated average as a float. | | [`Float`](../../types/#float) |
| `Kind` | :fontawesome-solid-circle-plus:{title="No"} No  | The type of average to calculate. | `Mean::Arithmetic` | [`Mean`](../../../enums/Mean) |

</div>

Calculates the average value of a sequence of floating point numbers.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Mean/Mean.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Mean/Mean.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

