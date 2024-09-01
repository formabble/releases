---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Step

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input of this shard will be given as input for the specified Wire | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wire to schedule and progress. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none) |

</div>

The first time Step is called, the specified wire is scheduled. On subsequent calls, the specified Wire's state is progressed before the current Wire continues its execution. This means that a pause in execution of the child Wire will not pause the parent Wire.

## Details

--8<-- "details/shards/General/Step.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Step/Step.shs"
  ```

  ```
  --8<-- "samples/shards/General/Step/Step.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

