---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Jwt.Decode

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`String`](../../types/#string) |
| `Output ➡️` ||The resulting output of the shard | | [`String`](../../types/#string) |
| `Jwk` | :fontawesome-solid-circle-plus:{title="No"} No  | The Key in JWK format to use for decoding the token. | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Audience` | :fontawesome-solid-circle-plus:{title="No"} No  | The audience to use for decoding the token. | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |

</div>

Decodes a JWT token

--8<-- "includes/license.md"

