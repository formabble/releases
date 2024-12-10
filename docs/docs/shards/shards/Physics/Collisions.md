---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.Collisions

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Physics.Body`](../../types/#physics.body) |
| `Output ➡️` ||The resulting output of the shard | | [`[{other: Physics.Body otherTag: Any penetrationDepth: Float normal: Float3}]`](../../types/#seq) |
| `Enter` | :fontawesome-solid-circle-plus:{title="No"} No  | The code to execute when a new contact is detected. | `none` | [`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Leave` | :fontawesome-solid-circle-plus:{title="No"} No  | The code to execute when a contact is removed. | `none` | [`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

Gets the list of current contacts for the input physics body and runs the shards specified when a new contact is detected or when a contact is removed.

--8<-- "includes/license.md"

