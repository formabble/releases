---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Replace

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input sequence or string to be modified. | | [`[Any]`](../../types/#seq)[`String`](../../types/#string) |
| `Output ➡️` ||returns the resulting sequence or string with the replacements applied. | | [`[Any]`](../../types/#seq)[`String`](../../types/#string) |
| `Patterns` | :fontawesome-solid-circle-plus:{title="No"} No  | The patterns to find represented as a sequence. | `None` | [`None`](../../types/#none)[`[String]`](../../types/#seq)[`Var([String])`](../../types/#contextvar)[`Var([Any])`](../../types/#contextvar)[`[Any]`](../../types/#seq) |
| `Replacements` | :fontawesome-solid-circle-plus:{title="No"} No  | The corresponding replacements to apply to the input, if a single value is provided every match will be replaced with that single value. | `None` | [`None`](../../types/#none)[`Any`](../../types/#any)[`Var(Any)`](../../types/#contextvar)[`[Any]`](../../types/#seq)[`Var([Any])`](../../types/#contextvar) |

</div>

Replaces all occurrences of the pattern(specified in the Patterns parameter) found in the input sequence or string, with replacements (specified in the Replacements parameter).

## Details

--8<-- "details/shards/General/Replace.md"


--8<-- "includes/license.md"

