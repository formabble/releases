---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# String.Join

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A sequence of string values that will be joined together. | | [`[String Bytes]`](../../types/#seq) |
| `Output ➡️` ||A string consisting of all the elements of the sequence delimited by the separator. | | [`String`](../../types/#string) |
| `Separator` | :fontawesome-solid-circle-plus:{title="No"}  | The string to use as a separator. | `` | [`String`](../../types/#string) |

</div>

Concatenates all the elements of a string sequence, using the specified separator between each element.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/String/Join/1.shs"
  ```

  ```
  --8<-- "samples/shards/String/Join/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

