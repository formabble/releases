---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Jwt.Encode

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`String`](../../types/#string) |
| `Output ➡️` ||The resulting output of the shard | | [`String`](../../types/#string) |
| `PemEc` | :fontawesome-solid-circle-plus:{title="No"} No  | The Key in PEM ECDSA format to use for encoding the token. | `none` | [`None`](../../types/#none)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `PemRsa` | :fontawesome-solid-circle-plus:{title="No"} No  | The Key in PEM RSA format to use for encoding the token. | `none` | [`None`](../../types/#none)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Algorithm` | :fontawesome-solid-circle-plus:{title="No"} No  | The algorithm to use for encoding (RS256, RS384, ES256, ES384). | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Audience` | :fontawesome-solid-circle-plus:{title="No"} No  | The audience to encode in the token claims. | `none` | [`None`](../../types/#none)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Issuer` | :fontawesome-solid-circle-plus:{title="No"} No  | The issuer to encode in the token claims. | `none` | [`None`](../../types/#none)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `ExpirationTime` | :fontawesome-solid-circle-plus:{title="No"} No  | The expiration time in seconds from now. | `none` | [`None`](../../types/#none)[`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |

</div>

Encodes a JSON payload into a JWT token

--8<-- "includes/license.md"

