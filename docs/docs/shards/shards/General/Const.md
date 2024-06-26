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
| `Value` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The constant value to insert in the wire. | `None` | [`Any`](../../types/#any) |

</div>

Declares an un-named constant value (of any data type).

## Details

--8<-- "details/shards/General/Const.md"


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

