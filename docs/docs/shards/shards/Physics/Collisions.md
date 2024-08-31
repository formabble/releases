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
| `Enter` | :fontawesome-solid-circle-plus:{title="No"} No  | Triggered when a new contact is removed | `None` | [`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Leave` | :fontawesome-solid-circle-plus:{title="No"} No  | Triggered when a new contact is removed | `None` | [`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

Outputs the list of contacts of a physics body

--8<-- "includes/license.md"

