---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Detach

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input of this shard will be given as input for the specified Wire | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The wire to execute. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none) |
| `Restart` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, the specified wire will restart whenever the shard is called, even if it is already running. | `false` | [`Bool`](../../types/#bool) |

</div>

Schedules and executes the specified Wire asynchronously. The current Wire will continue its execution independently of the specified Wire. Unlike Spawn, only one unique copy of the specified Wire can be scheduled using Detach. Future calls of Detach that schedules the same Wire will be ignored unless the specified Wire is Stopped or ends naturally.

## Details

--8<-- "details/shards/General/Detach.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Detach/Detach.shs"
  ```

  ```
  --8<-- "samples/shards/General/Detach/Detach.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

