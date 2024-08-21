---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.ProgressBar

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The progress amount ranging from 0.0 (no progress) to 1.0 (completed). | | [`Float`](../../types/#float) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Float`](../../types/#float) |
| `Overlay` | :fontawesome-solid-circle-plus:{title="No"} No  | The text displayed inside the progress bar. | `None` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Width` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The desired width of the progress bar. Will use all horizontal space if not set. | `None` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |

</div>

A progress bar with an optional overlay text.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/ProgressBar/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/ProgressBar/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

