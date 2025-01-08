This shard can take a table as input that contains the following keys with the following values:
  - "transform": The 4x4 transformation matrix that contains the translation, rotation and scale for the glTF model to adopt.
  - "materials": A sub-table that contains information to modify the materials of the glTF model.
  - ["bone1" "bone2" "bone3"]: A node can be modified by passing the bones path as a sequence of strings as the key and a sub-table containing the parameters to modify.
    Eg.
    ```shards
    {
      ["rootNode" "spine" "upperBody"]: {
        scale: @f3(2.0)
      }
    } GFX.glTF(Bytes: asset/my-model)
    ```

The sub-table that can be provided in the materials key of the input table will take the following format: `"key" : value` where the key will be the name of the material to modify and the value can either be:
  - a material object to replace the current material of the glTF model with, or
  - another sub-table which contains information that can modify the current material.

The sub-table that can be used to modify the material can take the following format:
  - "params": a table containing keys representing parameters specific to the material and values with their respective types. Providing the a value to a key here will modify the value of the parameter in the final glTF model.

The input table can include keys representing nodes to modify. The keys can be a sequence of strings representing the nodes to modify. There can also be multiple keys with different sequences of nodes. The values for these node keys can be a table with the following keys:
  - "transform": A 4x4 transformation matrix (overrides individual components)
  - "translation": A float3 value for node translation
  - "rotation": A float4 quaternion for node rotation
  - "scale": A float3 value for node scaling
  - "params": A table of node-specific parameters (if applicable)

In Formabble, the 3D asset is given to the `Copy` parameter for the shard to create the drawable object for that asset.

This shard uses caching, meaning that on its first activation, GFX.glTF creates all necessary resources. Subsequent activations reuse these cached resources, enhancing performance. However, this also means the glTF model cannot be dynamically modified.

To change the glTF model, place GFX.glTF in a separate wire and stop it whenever the model changes. This clears the cached resources. The following example demonstrates this:

```shards
@wire(draw-model {
  GFX.glTF(Copy: btn-model)
  @fbl/draw([])
} Looped: true)

@wire(main-wire-graphics {
  Once({
    0 >= btn-idx
    [
      asset/v-btn-apple
      asset/v-btn-avocado
      asset/v-btn-bacon
      asset/v-btn-banana
      asset/v-btn-beet
      asset/v-btn-bread
      asset/v-btn-broccoli
      asset/v-btn-burger
      asset/v-btn-cabbage
      asset/v-btn-cake
      asset/v-btn-candybar
      asset/v-btn-carrot
      asset/v-btn-cauliflower
      asset/v-btn-celery
      asset/v-btn-cheese
      asset/v-btn-cherries
      asset/v-btn-chocdonut
      asset/v-btn-chocolate
      asset/v-btn-coconut
      asset/v-btn-cookie
      asset/v-btn-corn
      asset/v-btn-corndog
      asset/v-btn-croissant
      asset/v-btn-cupcake
      asset/v-btn-dbl-burger
      asset/v-btn-donut
      asset/v-btn-egg
      asset/v-btn-eggplant
      asset/v-btn-fish
      asset/v-btn-fries
      asset/v-btn-gingerbread
      asset/v-btn-grapes
      asset/v-btn-honey
      asset/v-btn-hotdog
      asset/v-btn-icecream
      asset/v-btn-leek
      asset/v-btn-lemon
      asset/v-btn-loaf
      asset/v-btn-lollipop
      asset/v-btn-meatpatty
      asset/v-btn-mincemeatpie
      asset/v-btn-muffin
      asset/v-btn-mushroom
      asset/v-btn-onion
      asset/v-btn-orange
      asset/v-btn-pancakes
      asset/v-btn-paprika
      asset/v-btn-pie
      asset/v-btn-pineapple
      asset/v-btn-pizza
      asset/v-btn-popsicle
      asset/v-btn-pudding
      asset/v-btn-pumpkin
      asset/v-btn-radish
      asset/v-btn-redwine
      asset/v-btn-riceball
      asset/v-btn-roemaki
      asset/v-btn-salmonmaki
      asset/v-btn-sandwich
      asset/v-btn-sausage
      asset/v-btn-soda
      asset/v-btn-sprinkledonut
      asset/v-btn-strawberry
      asset/v-btn-sundae
      asset/v-btn-tomato
      asset/v-btn-turkey
      asset/v-btn-veggiemaki
      asset/v-btn-waffle
      asset/v-btn-watermelon
      asset/v-btn-whitewine
    ] >= model-array
  })
  
  btn-model-array | Take(btn-idx)
  Memoize({
    > btn-model
    Stop(draw-model) ; make sure we reset the model
  })
  
  @fbl/pose-matrix
  Step(draw-model)
} Looped: true)
```

