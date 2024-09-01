---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Branch

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input value will pass through unchanged. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Wires` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wires to schedule and run on this branch. | `None` | [`Wire`](../../types/#wire)[`[Wire]`](../../types/#seq)[`None`](../../types/#none) |
| `FailureBehavior` | :fontawesome-solid-circle-plus:{title="No"} No  | The policy to take when some of the Wires running on this branch fail. | `BranchFailure::Everything` | [`BranchFailure`](../../../enums/BranchFailure) |
| `CaptureAll` | :fontawesome-solid-circle-plus:{title="No"} No  | If all of the existing variables should be copied onto the branch created, regardless if they are used or not. | `false` | [`Bool`](../../types/#bool) |
| `Mesh` | :fontawesome-solid-circle-plus:{title="No"} No  | The Behavior to branch from. If none provided, it will branch from the Behavior that the current Wire is on. | `Mesh` | [`None`](../../types/#none)[`Mesh`](../../types/#mesh) |

</div>

Creates a branch from the specified Behavior and schedules all the Wires specified. Every time this shard is called, it will progress the state of all the Wires specified asynchronously and continue execution of the current Wire. This shard is like a mass Step, where it Steps all the Wires specified.

## Details

--8<-- "details/shards/General/Branch.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Branch/Branch.shs"
  ```

  ```
  --8<-- "samples/shards/General/Branch/Branch.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

