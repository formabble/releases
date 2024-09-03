---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.BuiltinFeature

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The feature object for use in a rendering pass. | | [`GFX.Feature`](../../types/#gfx.feature) |
| `Id` | :fontawesome-solid-circle-plus:{title="No"} No  | Builtin feature id. | `BuiltinFeatureId::Transform` | [`BuiltinFeatureId`](../../../enums/BuiltinFeatureId) |

</div>

This shard creates the ready-made feature object of the feature specified in the ID parameter, for use in a rendering pass.

--8<-- "includes/license.md"

