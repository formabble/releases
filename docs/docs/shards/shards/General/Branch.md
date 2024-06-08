---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Branch

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Wires` | :fontawesome-solid-circle-plus:{title="No"}  | The wires to schedule and run on this branch. | `None` | [`Wire`](../../types/#wire)[`[Wire]`](../../types/#seq)[`None`](../../types/#none) |
| `FailureBehavior` | :fontawesome-solid-circle-plus:{title="No"}  | The behavior to take when some of the wires running on this branch mesh fail. | `BranchFailure.Everything` | [`BranchFailure`](../../../enums/BranchFailure) |
| `CaptureAll` | :fontawesome-solid-circle-plus:{title="No"}  | If all of the existing context variables should be captured, no matter if being used or not. | `false` | [`Bool`](../../types/#bool) |
| `Mesh` | :fontawesome-solid-circle-plus:{title="No"}  | Optional external mesh to use for this branch. If not provided, a new one will be created. | `Mesh` | [`None`](../../types/#none)[`Mesh`](../../types/#mesh) |

</div>

A branch is a child mesh that runs and is ticked when this shard is activated, wires on this mesh will inherit all of the available exposed variables in the activator wire.

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

