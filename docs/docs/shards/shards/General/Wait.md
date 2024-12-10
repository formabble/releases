---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Wait

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input value will either pass through unchanged or be ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||If Passthrough is true, this shard outputs the input value, passed through unchanged. Otherwise, it outputs the output of the Wire it waited for. | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wire to wait for. | `none` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`Var(Wire)`](../../types/#contextvar) |
| `Passthrough` | :fontawesome-solid-circle-plus:{title="No"} No  | If set to true, outputs the input value, passed through unchanged. | `false` | [`Bool`](../../types/#bool) |
| `Timeout` | :fontawesome-solid-circle-plus:{title="No"} No  | The optional amount of time in seconds to wait for the specified Wire to complete. If the specified time elapses before the specified Wire is complete, the current Wire will fail with a Timeout error. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Waits for the specified Wire to complete before resuming execution of the current Wire.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Wait/Wait.shs"
  ```

  ```
  --8<-- "samples/shards/General/Wait/Wait.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

