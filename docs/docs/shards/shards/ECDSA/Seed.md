---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ECDSA.Seed

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The seed to generate the private key from. | | [`String`](../../types/#string) |
| `Output ➡️` ||The private key generated from the seed. | | [`Bytes`](../../types/#bytes) |
| `Compressed` | :fontawesome-solid-circle-plus:{title="No"} No  | Indicates if the output PublicKey should be in compressed format. | `false` | [`Bool`](../../types/#bool) |

</div>

Generates the private key from the seed using the ECDSA algorithm.

--8<-- "includes/license.md"

