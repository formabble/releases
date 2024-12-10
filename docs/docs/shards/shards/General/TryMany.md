---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# TryMany

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||This shard takes a sequence of values as input. Each value from the sequence is provided as input to its corresponding copy of the scheduled Wire. The total number of copies of the specified Wire scheduled, will be the same as the number of elements in the sequence provided. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||Depending on the Policy specified the shard will return a different output. WaitUntil::FirstSuccess will return the output of the first successful Wire. WaitUntil::SomeSuccess return a sequence with all the output from all the copies of the specified Wire. WaitUntil::AllSuccess will either stop execution of the current Wire if any of the copies fail or return a sequence with all the output from all the copies of the specified Wire. | | [`[Any]`](../../types/#seq) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wire to copy and schedule. | `none` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Shard]`](../../types/#seq) |
| `Policy` | :fontawesome-solid-circle-plus:{title="No"} No  | The execution policy for the shard to abide by. A copied Wire is only deemed successful if it did not have an internal failure (eg.through Assert) | `WaitUntil::AllSuccess` | [`WaitUntil`](../../../enums/WaitUntil) |
| `Threads` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of cpu threads to use. Number specified can not be lower than 1. | `1` | [`Int`](../../types/#int) |

</div>

This shard takes a sequence of values as input, schedules multiple copies of a specified Wire and executes them asynchronously. Each value from the sequence is provided as input to its corresponding copy of the scheduled Wire. The shard will then wait for all the scheduled Wires to end, and then, depending on the Policy specified, the shard will either return the output of the first successful Wire, return a sequence with all the output from all the copies of the specified Wire or stop execution of the current Wire if all the copies failed.

## Details

--8<-- "details/shards/General/TryMany.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/TryMany/TryMany.shs"
  ```

  ```
  --8<-- "samples/shards/General/TryMany/TryMany.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

