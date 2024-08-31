---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ChaChaPoly.Decrypt

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The encrypted bytes sequence to decrypt. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The decrypted bytes sequence. | | [`Bytes`](../../types/#bytes) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The private key to be used to encrypt/decrypt the input. Must be 32 bytes long. | `None` | [`Bytes`](../../types/#bytes)[`Var(Bytes)`](../../types/#contextvar) |

</div>

This shard decrypts an input ChaCha20-Poly1305 encrypted bytes sequence using the provided key (provided in the Key parameter). It then returns the decrypted bytes sequence.

## Details

--8<-- "details/shards/ChaChaPoly/Decrypt.md"


--8<-- "includes/license.md"

