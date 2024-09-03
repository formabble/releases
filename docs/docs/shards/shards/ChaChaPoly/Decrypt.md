---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ChaChaPoly.Decrypt

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The encrypted byte array to decrypt. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The decrypted byte array. | | [`Bytes`](../../types/#bytes) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The private key to be used to encrypt/decrypt the input. Must be 32 bytes long. | `None` | [`Bytes`](../../types/#bytes)[`Var(Bytes)`](../../types/#contextvar) |

</div>

This shard decrypts an input ChaCha20-Poly1305 encrypted byte array using the provided key (provided in the Key parameter). It then returns the decrypted byte array.

## Details

--8<-- "details/shards/ChaChaPoly/Decrypt.md"


--8<-- "includes/license.md"

