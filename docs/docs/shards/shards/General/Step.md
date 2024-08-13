---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Step

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input of this shard will be given as input for the specified Wire | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be the output of the Wire that is executed. Note that because the Wire's output might change as the Wire's state is progressed, the output of this Shard will be of Type::Any. Thus, the output of this shard, should always be checked or converted to the appropriate Type. | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wire to schedule and progress. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none) |

</div>

The first time Step is called, the specified wire is scheduled. On subsequent calls, the specified Wire's state is progressed before the current Wire continues its execution. This means that a pause in execution of the child Wire will not pause the parent Wire.(Note that the output of the of the specified Wire might change as their state progresses and thus the Type of the output of this shard should always be checked or converted).

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

