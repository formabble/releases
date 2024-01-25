---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Resume

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Wire` |  | The wire to resume. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`&Wire`](../../types/#contextvar) |

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

