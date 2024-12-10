---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ChaChaPoly.Encrypt

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string or byte array to encrypt. | | [`String`](../../types/#string)[`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The encrypted byte array. | | [`Bytes`](../../types/#bytes) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The private key to be used to encrypt/decrypt the input. Must be 32 bytes long. | `none` | [`Bytes`](../../types/#bytes)[`Var(Bytes)`](../../types/#contextvar) |

</div>

This shard takes the input string or byte array and encrypts it using the ChaCha20-Poly1305 algorithm with the provided key (provided in the Key parameter). It then outputs the encrypted byte array.

--8<-- "includes/license.md"

