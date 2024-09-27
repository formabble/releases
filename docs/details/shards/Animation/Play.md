This shard can only play existing animation obtained from a gltf model. It is used in conjunction with `Animation.Timer` and the `AnimationController` parameter of the `GFX.glTF` to play animations.

The `Animation.Timer` shard advances the time of the animation every frame. The output of `Animation.Timer` is supplied to `Animation.Play` to evaluate the animation and interpolate the animation data at each time frame. The output of `Animation.Play` is then applied to the glTF model via the `AnimationController` parameter which causes the animation to plau.

