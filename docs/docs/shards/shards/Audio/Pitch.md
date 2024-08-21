---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Audio.Pitch

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A float value representing the new pitch. 1.0 being the original pitch. | | [`Float`](../../types/#float) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Float`](../../types/#float) |
| `Sound` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The sound object to manipulate | `None` | [`Object`](../../types/#object)[`Var(Object)`](../../types/#contextvar) |

</div>

The Audio.Pitch shard adjusts the pitch of a sound object in the mesh, thus allowing for dynamic control over the pitch of individual sound objects during playback. It takes the Sound object, created by Audio.Sound that is specified in the Sound parameter, and sets the pitch to the float value provided as input. 1.0 being the original pitch, values greater than 1.0 will increase the pitch, while values between 0 and 1.0 will decrease the pitch. 0.5, for example, will lower the pitch by one octave, while 2.0 will raise it by one octave. It's typically used in conjunction with Audio.Engine, Audio.Sound, Audio.Start, and other audio shards to manage audio playback and create pitch-based effects.

--8<-- "includes/license.md"

