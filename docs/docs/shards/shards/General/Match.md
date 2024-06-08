---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Match

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that's compared with the declared cases. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Same value as input if `:Passthrough` is `true` else the output of the matched case's shard if `:Passthrough` is `false`. | | [`Any`](../../types/#any) |
| `Cases` | :fontawesome-solid-circle-plus:{title="No"} No  | Values to match against the input. A `nil` case will match anything. | `[]` | [`[Any]`](../../types/#seq) |
| `Passthrough` | :fontawesome-solid-circle-plus:{title="No"} No  | Parameter to control the shard's output. `true` allows the `Match` shard's input itself to appear as its output; `false` allows the matched shard's output to appear as `Match` shard's output. | `true` | [`Bool`](../../types/#bool) |

</div>

Compares the input with the declared cases (in order of the declaration) and activates the shard of the first matched case.

## Details

--8<-- "details/shards/General/Match.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Match/4.shs"
  ```

  ```
  --8<-- "samples/shards/General/Match/4.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Match/2.shs"
  ```

  ```
  --8<-- "samples/shards/General/Match/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Match/3.shs"
  ```

  ```
  --8<-- "samples/shards/General/Match/3.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Match/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Match/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

