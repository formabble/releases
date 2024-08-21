---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Resume

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input value will pass through unchanged. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wire to resume. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`Var(Wire)`](../../types/#contextvar) |

</div>

Resumes another Wire (previously paused using Suspend).

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

