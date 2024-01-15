---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.ProgressBar

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The progress amount ranging from 0.0 (no progress) to 1.0 (completed). | | [`Float`](../../types/#float) |
| `<output>` ||The output of this shard will be its input. | | [`Float`](../../types/#float) |
| `Overlay` |  | The text displayed inside the progress bar. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Width` |  | The desired width of the progress bar. Will use all horizontal space if not set. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |

</div>

A progress bar with an optional overlay text.

--8<-- "includes/license.md"

