---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# DB.Query

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`[Any]`](../../types/#seq) |
| `<output>` || | | [`{Any}`](../../types/#table)[`[Any]`](../../types/#seq) |
| `Query` |  | The database query to execute every activation. | `SELECT * FROM test WHERE id = ?` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Database` |  | The optional sqlite database filename. | `shards.db` | [`None`](../../types/#none)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `AsRows` |  | Return the result as rows. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

