---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Resume

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"}  | The wire to resume. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`&Wire`](../../types/#contextvar) |

</div>

Resumes another wire (previously suspending using Suspend).

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Resume/Resume.shs"
  ```

  ```
  --8<-- "samples/shards/General/Resume/Resume.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

