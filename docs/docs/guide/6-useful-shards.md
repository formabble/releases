# Useful FBL Shards

Welcome to the comprehensive guide to Formabble's suite of Formabble specific Shards—your essential resource for unlocking the full potential of our game creation system. Whether you're a seasoned developer or just starting your journey into game design, this documentation is designed to provide you with a detailed understanding of the powerful tools at your disposal. Through clear and concise definitions and code examples, our aim is to help you understand the context and application of these shards, so that you can integrate them into your projects effectively.
Let's dive into the different Formabble specific shards that can help shape your imagination, into reality!

### Fbl Formalize
The first step of creating any game is to place your meticulously created pieces into the domain. Normally, you can easily do this using the convenient **Formalize** button, however you can also do this in-script using `Fbl.Formalize`.

  | Input/Output/Parameter | Data Type | Description |
  | -------- | -------- | -------- |
  | Input | Table | Takes in a table that includes a variable that is to be dispatched and the specific behavior to dispatch to. Example table: {Behavior: {”sHoRtId/variable-name”: variable-value”} |
  | Parameter - FormID: | String | Takes in the long id or name of the form that you want to formalize as a string. The form long id can be found in the Domain Inventory Window. |
  | Parameter - Wait  | Boolean | Dictates whether the the program will wait for the form to fully formalize before resuming.  |
  | Output | Int16 | Returns the formalized form’s UUID as an Int16 |

<br>

**Example**

``` shards
{Graphics: {"anIIEJZ5Z/direction": 1}}
Fbl.Formalize("ndnkXDDGZkYOruIIEJZ5Z" Wait: true)
= form-uuid
```

In this example, direction is being assigned a value of 1 and then is then set in the form *"ndnkXDDGZkYOruIIEJZ5Z"* that is being formalized. The program then waits for the form to be fully formalized, before updating the variable form-uuid with the output of `Fbl.Formalize`. (If Wait is set to false, it will update *form-uuid* before the new form is fully formalized.
There are many scenarios where you would want a script to formalize forms into the domain instead of using the formalize button. Having a mob spawner to spawn mobs into the map for example, or having a tower spawn fireballs to strike at the players.

### Fbl.Deform

Like two sides of a coin, the ability to create also comes with the ability to destroy. Similar to formalizing, while there are convenient buttons to easily delete forms, you can also delete forms in-script using `Fbl.Deform`.

  | Input/Output/Parameter | Data Type | Description |
  | -------- | -------- | -------- |
  | Input | Int16 | Takes in the form UUID of form to be destroyed as an int16. If input is none, the form with the script attached will be the one to be deformed. |
  | Parameter - FormID: | tbd | tbd |
  | Parameter - Wait  | Boolean | Dictates whether the the program will wait for the form to fully formalize before resuming.  |
  | Output | Int16 | Returns the formalized form’s UUID as an Int16 |

  <br>

**Example**

``` shards
form-uuid | Fbl.Deform
```

Continuing from the example in Fbl.Formalize, this example is deleting the form with the Form UUID stored in the variable *form-uuid*. In other words this example would delete the form formalized in the example in Fbl.Formalize.

Similarly, there are also numerous scenarios where you would want to delete a form in-script. Using `Fbl.Deform` to delete a monster when its health reaches zero or deleting a bullet once it has made contact for example.

fbl/pose

Naturally, just placing forms into a scene does not make a game. `fbl/pose` gives creators the ability to manipulate the translation, rotation and the scale of a form. `fbl/pose` in essence is a table with the transform, rotation and scale keys. To control the object’s transformation, one simply has to grab the appropriate values from the respective keys. Instead of using `fbl/pose | Take(scale)`, you can instead use `fbl/scale` to directly take the form’s scale. `fbl/rotation `and `fbl/translation` can be used the same way . Do note that `fbl/pose` is only available in Graphics behavior.

**Example**

``` shards
fbl/rotation | Math.Rotation >  rot-mat
fbl/translation | Math.Translation > tsl-mat
fbl/scale | Math.Scaling > scl-mat

tsl-mat | Math.MatMul(rot-mat) | Math.MatMul(scl-mat) > transform-matrix

transform-matrix
GFX.glTF(Copy: asset/r0)
@fbl/draw([])
```

In this example, we are taking rotation, translation and scale from `fbl/pose` directly by using `fbl/rotation`, `fbl/translation` and `fbl/scale` respectively. We are then using `Math.Rotation`, `Math.Translation` and `Math.Scaling` to create a rotation matrix (rot-mat), a translation matrix (tsl-mat) and a scale matrix (scl-mat). These matrixes are then put together using `Math.Mul` to create a transformation matrix (transform-matrix) which is in-turn fed into GFX.glTF to render the a 3D asset. Using `fbl/pose` to control the transformation of a form is good practice as it enables one to control said transformation using the form gizmos.

### Fbl.Fetch

Forms in Formabble are not isolated individuals that exist in a void. They can interact with each other seamlessly. One way to have forms interact is through `Fbl.Fetch`. It allows a form to grab variables from another behavior within the same form or from another form. Do note that `Fbl.Fetch`, the first time it is called, it will suspend the program momentarily till the variable is successfully fetched , subsequently it will return the most recent value.

  | Input/Output/Parameter | Data Type | Description |
  | -------- | -------- | -------- |
  | Input | Int16 | If the form wants to fetch a variable from another form, place the Form UUID of the form to take the variable from as an Int16 as input. If you are fetching from another behavior in the same form, use none as input. |
  | Parameter - Behavior: | WirePoolType::Enum | The behavior to grab the variable from. Eg. WirePoolType::UI, WirePoolType::Logic, WirePoolType::Graphics, WirePoolType::Physics |
  | Parameter - Name:  | String | short id of the form/name of the variable to fetch  |
  | Parameter - Key:  | String | Optional parameter for if the variable being fetched is a table  |
  | Parameter - NoCache:  | Boolean | Cache or not to cache variable states.  |
  | Parameter - Silent:  | Boolean | To Ignore or not Ignore failures without logging  |
  | Output | Any | Outputs the variable being fetched. |

<br>

**Example**

``` shards
none
Fbl.Fetch(Behavior: WirePoolType::UI Name: "aZmg4RodY/equipment-index")
ExpectInt > equipment-index
```

In this example, we are fetching the variable equipment-index from the form *aZmg4RodY* from UI behavior. Since the output of the `Fbl.Fetch` is type Any, we need an `ExpectInt` shard before pushing it into the variable *equipment-index*. If the variable being fetched from is housed in another form, replace none with the Form UUID of the form that hosts said variable. `Fbl.Fetch` can be used useful when there is a main form that acts as a logic center where every other form in the level can fetch data from.

!!! note "Creating Namespaces"
    It is immportant to note that by creating a name space for a variable. It eliminates the need for a short id to use `Fbl.Fetch`

    **Example**

    ```shards
    @wire(main-graphics-wire {
      Once({
        10 >= translation
      })

      none
      Fbl.Fetch(Behavior: WirePoolType::Physics Name: "physics/translation")

      > translation | Log("translation")
    })

    @wire(main-physics-wire {
      Once({
        0 >= physics/translation
      })
    })
    ```

    This way, we will not have to replace the short-id's every single time we want to use our assets that use `Fbl.Fetch` making them versatile and re-usable.


### Fbl.Dispatch

On the flipside, `Fbl.Dispatch` can be used to send variables from a behavior in a form to another behavior in the same from or another form. Similarly, like `Fbl.Fetch`, `Fbl.Dispatch`, the first time it is called, will suspend the program momentarily till the variable is successfully dispatched, subsequently it will return the most recent value.

  | Input/Output/Parameter | Data Type | Description |
  | -------- | -------- | -------- |
  | Input | Any | Variable to be dispatched |
  | Parameter - Form: | Int16/Int | Form UUID or Enitty Id of the form to dispatch to. Form UUID can be found in the Form Details window or by using Fbl.FormId. Omit this parameter if sending variable to different behavior within the same form. |
  | Parameter - Behaviour:  | WirePoolType::Enum | The behavior to dispatch the variable to. Eg. WirePoolType::UI, WirePoolType::Logic, WirePoolType::Graphics, WirePoolType::Physics  |
  | Parameter - Name:  | String | The variable name in the dispatch destination to update.  |
  | Parameter - NoCache:  | Boolean | Cache or not to cache variable states.  |
  | Output | none | none |

<br>

**Example**

``` shards
direction |
Fbl.Dispatch (Form: form-uuid Behavior: WirePoolType::Graphics Name:"anIIEJZ5Z/direction")
```

Here, we are dispatching the variable direction to the form with a Form UUID stored in the variable *form-uuid*. It is updating the variable direction in Graphics behavior. Continuing from the example in `Fbl.Formalize`, this example will send the variable direction to the form that has just been formalized. If you are sending variables from different behaviors within the same form, omit the `Form:` parameter. `Fbl.Dispatch` is especially when sending transformation-matrixes from Graphics behavior to Physics behavior as a psuedo way of making `fbl/pose` available in Physics behavior.

!!! note "Creating Namespaces"
    It is immportant to note that by creating a name space for a variable. It eliminates the need for a short id to use `Fbl.Dispatch`

    **Example**

    ```shards
    @wire(main-graphics-wire {
      Once({
        10 >= translation
      })
      translation
      Fbl.Dispatch(Behavior: WirePoolType::Physics Name: "physics/translation")
    })

    @wire(main-physics-wire {
      Once({
        0 >= physics/translation
      })

      physics/translation | Log("physics/translation")
    })
    ```

    This way, we will not have to replace the short-id's every single time we want to use our assets that use `Fbl.Dispatch` making them versatile and re-usable.

### Fbl.FormId

`Fbl.FormId` will return the Form UUID of the form that it is called from. Needless to say, the Form UUID is useful when used in conjunction with the other shards demonstrated above.