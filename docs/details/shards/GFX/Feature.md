- The `GFX.Feature` shard is used to create a custom feature using the parameters provided while the `GFX.BuiltinFeature` shard is for adding an existing "ready-made" feature.

- The feature object created by this shard is usually collected into a sequence, which is then in turn used to create a render pass using `GFX.DrawablePass`.