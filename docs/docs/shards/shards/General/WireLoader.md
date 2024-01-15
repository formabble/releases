---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# WireLoader

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Provider` |  | The shards wire provider. | `None` | [`Object`](../../types/#object)[`None`](../../types/#none) |
| `Mode` |  | The way to run the wire. Inline: will run the sub wire inline within the root wire, a pause in the child wire will pause the root too; Detached: will run the wire separately in the same mesh, a pause in this wire will not pause the root; Stepped: the wire will run as a child, the root will tick the wire every activation of this shard and so a child pause won't pause the root. | `Enum: 0 vendor: 0x66726167 type: 0x72756e43` | [`RunWireMode`](../../../enums/RunWireMode) |
| `OnReload` |  | Shards to execute when the wire is reloaded, the input of this flow will be the reloaded wire. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `OnError` |  | Shards to execute when a wire reload failed, the input of this flow will be the error message. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>



--8<-- "includes/license.md"

