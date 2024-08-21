---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# WireRunner

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The wire variable to compose and run. | `None` | [`Wire`](../../types/#wire)[`Var(Wire)`](../../types/#contextvar) |
| `Mode` | :fontawesome-solid-circle-plus:{title="No"} No  | The way to run the wire. Inline: will run the sub wire inline within the root wire, a pause in the child wire will pause the root too; Detached: will run the wire separately in the same mesh, a pause in this wire will not pause the root; Stepped: the wire will run as a child, the root will tick the wire every activation of this shard and so a child pause won't pause the root. | `Enum: 0 vendor: 0x66726167 type: 0x72756e43` | [`RunWireMode`](../../../enums/RunWireMode) |

</div>



--8<-- "includes/license.md"

