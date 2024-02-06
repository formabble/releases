# Formabble Samples

Upon loading Formabble, you will see a Sample Domain that has been shared with. This Domain provides a selection of sample forms, each designed to highlight the functionalities and versatility of different Shards within the Formabble environment. These samples however, are more than just demonstrations—they are also practical tools for game creation.
We encourage you to interact with these samples. Experimenting with them will offer you a clearer perspective on the potential of Formabble and its Shards. Feel free to also adopt and adapt these samples into your own domain for your creations. This page will provide a summary of what each form demonstrates.

### 3d-collision-character

This sample renders a 3d-character model and gives it a rigid body that can interact and collide with other rigid bodies using `Physics.Cuboid `and `Physics.Dynamicbody`. These shards allows the 3d model to respond to gravity and other forces. We then relay the information provided by the rigid-body from physics-behavior to graphics behavior using fbl-dispatch to update the position of the rendered 3d-model. Formalize *"3d-collision-floor"* and *"3d-collision-dynamic-cube"* along with this sample,to see the different physics bodies interacting with each other.

### 3d-collision-dynamic-cube

This sample renders a cube and gives it a rigid body that can interact and collide with other rigid bodies using `Physics.Cuboid` and `Physics.Dynamicbody`. These shards allows the 3d cube to respond to gravity and other forces. We then relay the information provided by the rigid body from physics-behavior to graphics behavior using `Fbl.Dispatch` to update the position of the rendered cube. Formalize *"3d-collision-floor"* and *"3d-collision-character"* along with this sample, to see the different physics bodies interacting with each other.

### 3d-collision-floor

This sample renders render a flat cube to act as a floor and gives it a rigid body using `Physics.Cuboid` and `Physics.StaticBody`. This allows it to affect other `Physics.Dynamic` bodies in the scene. Use `Physics.KinematicBody` instead if you want the floor to be moveable. Formalize *"3d-collision-character"* and *"3d-collision-dynamic-cube"* along with this sample to see the different physics bodies interacting with each other.

### angle-movement-sample

This sample formalizes a 2D-ship. This ship moves with acceleration and its movement is influenced by the ship's rotation using trigonometry shards such as `Math.Cos` and `Math.Sin`.

### animation-2d-sample

In this sample, we demonstrate how to create a 2d-animation. We do this, by placing the different frames of our 2d-animation into a sequence and cycling through the image that is rendered using `UI.Image`.

### animation-3d-sample

In this sample, we render a 3d model with animations. To do this, we take the different animations that are present in the gltf file and tell the AnimationController in `GFX.glTF` whih specific animation to play.

### button-input-sample

This sample we demonstrates how a 2d animated character can be made to move using button inputs. We do this by using `Input.KeyDown` and `Input.KeyUp` shards to change the state of our character. We then dispatch this information from input-behavior which governs input to ui-behavior which governs rendering our image.

### conditionals-sample

This sample explores how conditionals can be created using `If` and When shards alongside comparison shards like `Is`, `IsMore`, `IsLess`, `IsLessEqual`, `IsMoreEqual`. Conditionals are the bread and butter to controlling game behavior.

### dispatch-communication-between-behavior

This sample demonstrates how we can establish a two-way communication between ui-behavior and logic-behavior using `Fbl.Dispatch` and `Fbl.Fetch`. This allows ui-behavior to communicate with logic-behavior to control the equipment table shown on screen. `Fbl.Dispatch` is a shard that sends information to a specific behavior within the same form or another form. `Fbl.Fetch` on the other hand is a shard that retrieves information from another behavior within the same form or another form.

### DispatchVsSpawn

This sample demonstrates the differences between `Detach` and `Spawn` shards. Both of these shards provide the means to run wires asynchronously from the main parent wire. Both `Detach` and `Spawn` will attach its specified wire in the same mesh and behavior as it's parent wire. The key difference is that only one unique wire can be detached at any given time. If the same wire were to be detached again, the shard will be ignored. In contrast, `Spawn` will and can create an number number of unique copies of the specified wire.

### DoVsStepSample

This sample demonstrates the differences between `Do` and `Step` shards. Both `Do` and `Step` shards will execute a specified wire. However, `Do` will execute a shard to its completion, even if there are `Pause` shards within the wire it is executing. `Step` on the otherhand, will execute the specified wire, but will relinquish control back to the parent wire if it was paused. When the wire is stepped again, its state is progressed by continuing the wire from where it was last left.

### fbl-formalize

This sample demonstrates how we can have a form that formalizes other forms using `Fbl.Formalize`.

### fbl-formalize-mascot

This is the sample that "fbl-formalize" uses to demonstrate formalizing other forms using `Fbl.Formalize`. It is a 3-character with animations that will move left or right when the left or right directional keys are pressed.

### forms-interaction-1

In this sample we demonstrate how *"forms-interaction-1"* interacts and sends instructions to *"forms-interaction-2"*. We achieve this by using the output from `Fbl.Formalize` to obtain the form uuid, and subsequently using this uuid as input for `Fbl.Dispatch` to send instructions to that specific form. We also use this uuid in `Fbl.Fetch` to set up a two way communication between the two forms.

### forms-interaction-2

In this sample we are showcasing how *"forms-interaction-1"* can interact and send instructions to *"forms-interaction-2"*. *"forms-interaction-2"* is a 3D character that receives the instructions from *"forms-interaction-1"*. It will move left, or right or stand still depending on the instruction received from *"forms-interaction-1"*.

### load-2d-asset

This sample demonstrates how to render 2D assets using the `UI.Image` shard in ui-behavior.

### load-3d-asset

In this sample, we render a 3D model using the `GFX.glTF` shard. `GFX.glTF` requires a transformation matrix to render the 3d model. To create this  transformation matrix, we use `fbl/translation`, `fbl/rotation` and `fbl/scale` to provide the translation, rotation and scale values required.

### load-other-forms-assets

This sample demonstrates how a form can reference other forms. Here, we reference *"form-to-load-defense"* and *"form-to-load-attack"* to have our character attack and defend accordingly. We do this by setting up a namespaces for our `@template` and `@define` in *"form-to-load-defense"* and *"form-to-load-attack"*. Ensure that *"form-to-load-defense"* and *"form-to-load-attack"* are added to the reference list of this form. You now can call any template, definitions and wires from the referenced forms.  Splitting up your code into different forms that reference each other is a good way to organize your code, especially for bigger and more complex projects.

### matrix-transformation-sample

This sample we demonstrates how we can move a 3d model by changing the translation, rotation or scale of its transformation matrix.

### resume-wire-sample

This sample shows how we can pause and resume the state of a wire using the `Suspend` and `Resume` shards. Do note that Restart can also be used in place of `Resume`. However unlike `Resume`, which resumes the wire from its current suspended state, Restart runs the wire from the beginning.

### scene-management

In this sample we use `Detach` and `Stop` to create a scene management system. When a wire is detached, it is detached in the same behavior as the wire it is being detached from. This `Detach` and `Stop` combo is useful for making levels and map management systems. It is important to note however, that the since the previous wire is stopped, its state is not preserved. To preserve the state of a wire before switching, one can use `SwitchTo` instead, which suspends the current wire before switching to the wire specified. Also note, when stopping a wire, remember not to `Stop` the parent wire where the detached wire is detached from. Stopping the parent wire will deformalize the form and stop all detached wires.

### form-to-load-defense
This form is used and referenced in *"load-other-forms-assets"*. It contains a definition that is set up using `@define` and called in *"load-other-forms-assets"*.

### form-to-load-attack

This form is used and referenced in *"load-other-forms-assets"*.  It contains a template that is set up using `@template` and called in *"load-other-forms-assets"*.

### spawn-sample

This sample uses `Spawn` to schedule multiple bullet wires. Similar to `Detach`, `Spawn` presents a way for a wire to be run asynchronously. But unlike `Detach`, where only one wire can be detached, an unlimited number of bullet wires can be spawned using `Spawn`. It is also worth noting that spawning wires within a single form is more memory-efficient compared to formalizing multiple forms using `Fbl.Formalize`.

### step-sample

In this sample we are using `Step` to execute wires *"monster-1"*, *"monster-2"* and *"monster-3"*. Step will progress the state of the stepped wires before relinquishing control back to the parent wire.

### ui-sample

This sample showcases the different UI shards that are available for use. Do note that most UI shards require being wrapped in a UI Parent shard like `UI.Window` and `UI.Area` to function.

