---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Argon2id.Hash

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`String`](../../types/#string) |
| `Output ➡️` ||The resulting output of the shard | | [`String`](../../types/#string) |
| `MemoryCost` | :fontawesome-solid-circle-plus:{title="No"} No  | The amount of memory to use in KiB. Default is 8192 (8 MB). | `8192` | [`Int`](../../types/#int) |
| `TimeCost` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of iterations to perform. Default is 4. | `4` | [`Int`](../../types/#int) |
| `Parallelism` | :fontawesome-solid-circle-plus:{title="No"} No  | The degree of parallelism to use. Default is 1. | `1` | [`Int`](../../types/#int) |

</div>

Hashes a password using the Argon2id algorithm.

--8<-- "includes/license.md"

