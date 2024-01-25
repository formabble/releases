---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Branch

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Wires` |  | The wires to schedule and run on this branch. | `None` | [`Wire`](../../types/#wire)[`[Wire]`](../../types/#seq)[`None`](../../types/#none) |
| `FailureBehavior` |  | The behavior to take when some of the wires running on this branch mesh fail. | `BranchFailure.Everything` | [`BranchFailure`](../../../enums/BranchFailure) |
| `CaptureAll` |  | If all of the existing context variables should be captured, no matter if being used or not. | `false` | [`Bool`](../../types/#bool) |
| `Mesh` |  | Optional external mesh to use for this branch. If not provided, a new one will be created. | `Mesh` | [`None`](../../types/#none)[`Mesh`](../../types/#mesh) |

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

