- This shard can take a table as input that contains the following keys with the following values:
  - "transform": The 4x4 transformation matrix that contains the translation, rotation and scale for the glTF model to adopt.
  - "materials": A sub-table that contains information to modify the materials of the glTF model.
  - "nodes" (a sequence of strings representing the nodes to modify): A sub-table that contains information to modify the nodes of the glTF model.

- The sub-table that can be provided in the materials key of the input table will take the following format: `"key" : value` where the key will be the name of the material to modify and the value can either be: 
  - a material object to replace the current material of the glTF model with, or
  - another sub-table which contains information that can modify the current material.

- The sub-table that can be used to modify the material can take the following format:
  - "params": a table containing keys representing parameters specific to the material and values with their respective types. Providing the a value to a key here will modify the value of the parameter in the final glTF model.

- The input table can include keys representing nodes to modify. The keys can be a sequence of strings representing the nodes to modify. There can also be multiple keys with different sequences of nodes. The values for these node keys can be a table with the following keys:
  - "transform": A 4x4 transformation matrix (overrides individual components)
  - "translation": A float3 value for node translation
  - "rotation": A float4 quaternion for node rotation
  - "scale": A float3 value for node scaling
  - "params": A table of node-specific parameters (if applicable)

- In Formabble, the 3D asset is given to the `Copy` parameter for the shard to create the drawable object for that asset.

