---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Do

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input of this shard will be given as input for the specified Wire | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be the output of the Wire that is executed. | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wire to execute inline. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none) |

</div>

Schedules and executes the specified Wire inline of the current Wire. The specified Wire needs to complete its execution before the current Wire continues its execution. This means that a pause in execution of the child Wire will also pause the parent Wire.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Do/Do.shs"
  ```

  ```
  --8<-- "samples/shards/General/Do/Do.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

