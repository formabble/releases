---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Jwt.Verify

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`String`](../../types/#string) |
| `Output ➡️` ||The resulting output of the shard | | [`Bool`](../../types/#bool) |
| `Jwk` | :fontawesome-solid-circle-plus:{title="No"} No  | The Key in JWK format to use for verifying the token signature. | `none` | [`None`](../../types/#none)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `PemEc` | :fontawesome-solid-circle-plus:{title="No"} No  | The Key in PEM ECDSA format to use for verifying the token signature. | `none` | [`None`](../../types/#none)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `PemRsa` | :fontawesome-solid-circle-plus:{title="No"} No  | The Key in PEM RSA format to use for verifying the token signature. | `none` | [`None`](../../types/#none)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |

</div>

Verifies a JWT token signature without fully decoding it

--8<-- "includes/license.md"

