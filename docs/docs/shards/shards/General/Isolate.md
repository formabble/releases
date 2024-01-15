---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Isolate

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Contents` |  |  | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Include` |  | Includes only the listed variables | `None` | [`None`](../../types/#none)[`[String]`](../../types/#seq) |
| `Exclude` |  | Ignores all the listed variables | `None` | [`None`](../../types/#none)[`[String]`](../../types/#seq) |

</div>

--8<-- "includes/experimental.md"

Isolates the inner shards' environment by only allowing certain variables

--8<-- "includes/license.md"

