---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# String.Split

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string to split. | | [`String`](../../types/#string) |
| `Output ➡️` ||A sequence of strings, containing the seperated parts of the input string. | | [`[String]`](../../types/#seq) |
| `Separator` | :fontawesome-solid-circle-plus:{title="No"} No  | The separator string to segment the string with. The input is split at each point where this string occurs. | `` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `KeepSeparator` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to keep the separator in the output. | `false` | [`Bool`](../../types/#bool) |

</div>

This shard splits the input string into a sequence of its costituent strings, using the string specified in the Separator parameter to segment the input. If the KeepSeparator parameter is true, the separator will be included in the output.

--8<-- "includes/license.md"

