---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Expand

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||This shard takes a sequence as input. Each value from the sequence is provided as input to its corresponding copy of the scheduled Wire. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Depending on the Policy specified the shard will return a different output. WaitUntil::FirstSuccess will return the output of the first successful Wire. WaitUntil::SomeSuccess return a sequence with all the output from all the copies of the specified Wire. WaitUntil::FirstSuccess will either stop execution of the current Wire if any of the copies fail or return a sequence with all the output from all the copies of the specified Wire. | | [`[Any]`](../../types/#seq) |
| `Size` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of copies of the specified Wire to schedule. | `10` | [`Int`](../../types/#int) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wire to copy and schedule. | `None` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Shard]`](../../types/#seq) |
| `Policy` | :fontawesome-solid-circle-plus:{title="No"} No  | The execution policy for the shard to abide by. A copied Wire is only deemed successful if it did not have an internal failure (eg.through Assert) | `WaitUntil::AllSuccess` | [`WaitUntil`](../../../enums/WaitUntil) |
| `Threads` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of cpu threads to use. Number specified can not be lower than 1. | `1` | [`Int`](../../types/#int) |

</div>

Schedules (n) number of copies of the specified Wire, where (n) is the number specified in the Size parameter. The parent Wire will wait until all the scheduled copies have ended and will either return a sequence of values outputs of all the copied Wires or the output of the first Wire that succeeds. Once done, it will continue with its own execution.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Expand/Expand.shs"
  ```

  ```
  --8<-- "samples/shards/General/Expand/Expand.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

