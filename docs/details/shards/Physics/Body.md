The `Shape` parameter accepts a physics shape object variable to define the shape of the physics body. The physics shape object can be created using
  - `Physics.BoxShape`
  - `Physics.CircleShape`
  - `Physics.CapsuleShape`
  - `Physics.HullShape`

The `CollisionGroup` parameter accepts an int2 to define the collision group the physics body belongs to and which collision groups it can collide with.
 - The first component in the int2 defines the membership mask, which is the collision group the physics body is part of (represented in bits).
 - The second component in the int2 defines the filter mask, which is the collision groups that the physics body can collide with (represented in bits).
 - When the physics body is colliding with another physics body, it performas a bitwise AND operation between the membership mask and the filter mask of the other physics body and vice versa, to determine if the physics bodies are allowed to collide.

