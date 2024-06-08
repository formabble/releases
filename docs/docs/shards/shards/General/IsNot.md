---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# IsNot

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Bool`](../../types/#bool) |
| `Value` | :fontawesome-solid-circle-plus:{title="No"}  | The value to test against for equality. | `0` | [`Any`](../../types/#any) |

</div>



## Details

--8<-- "details/shards/General/IsNot.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/IsNot/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/IsNot/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

