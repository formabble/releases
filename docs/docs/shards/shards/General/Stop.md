---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Stop

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input value will either pass through unchanged or be ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Depending on what is specified in the Passthrough parameter, this shard either returns the input value, passed through unchanged or it returns the output of the stopped Wire. Note that if it returns the output of the stopped wire, it will be of Type::Any and thus should be checked or converted to the appropriate Type. | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wire to stop. If none provided, the shard will stop the current Wire. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`Var(Wire)`](../../types/#contextvar) |
| `Passthrough` | :fontawesome-solid-circle-plus:{title="No"} No  | If set to true, outputs the input value, passed through unchanged. | `true` | [`Bool`](../../types/#bool) |

</div>

Either stops the execution of a specified Wire or the current Wire.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Stop/Stop.shs"
  ```

  ```
  --8<-- "samples/shards/General/Stop/Stop.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

