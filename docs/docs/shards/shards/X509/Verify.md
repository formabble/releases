---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# X509.Verify

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`[[String]]`](../../types/#seq)[`[Bytes]`](../../types/#seq) |
| `Output ➡️` ||The resulting output of the shard | | [`Bool`](../../types/#bool) |
| `RootCert` | :fontawesome-solid-circle-plus:{title="No"} No  | The X509 root certificate in PEM format to use for verification. | `none` | [`None`](../../types/#none)[`Bytes`](../../types/#bytes)[`Var(Bytes)`](../../types/#contextvar)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |

</div>

Verifies a certificate chain against a root certificate

--8<-- "includes/license.md"

