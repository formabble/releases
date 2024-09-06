---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Const

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The declared constant value. | | [`Any`](../../types/#any) |
| `Value` | :fontawesome-solid-circle-plus:{title="No"} No  | The constant value to insert in the wire. | `none` | [`Any`](../../types/#any) |

</div>

Declares an un-named constant value (of any data type).

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Const/Const.shs"
  ```

  ```
  --8<-- "samples/shards/General/Const/Const.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

