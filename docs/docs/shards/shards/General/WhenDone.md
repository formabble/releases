---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# WhenDone

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input of this shard will be given as input for the specified Wire | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the specific copy of the Wire that was scheduled. | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wire to schedule and run asynchronously | `none` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Shard]`](../../types/#seq) |

</div>

Schedules the specified Wire and runs it asynchronously. The current Wire will continue its execution independently of the specified Wire. Unlike Detach, a copy of the specified Wire is scheduled every time the shard is called.

--8<-- "includes/license.md"
