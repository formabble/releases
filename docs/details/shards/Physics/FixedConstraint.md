You can leave the `FirstBody` or `SecondBody` parameters unset to attach the set body to a fixed point in world space instead of attaching it to another body. For example, if `FirstBody` is set and `SecondBody` is unset, the first body will be attached to the fixed point specified in the `SecondReferenceFrame` parameter and vice versa.

The `Space` parameter defines the coordinate system that the shard will use.
 - If set to `ConstraintSpace::WorldSpace`, all constraint properties are specified in world space coordinates. The constraint also maintains the initial relative position between the ship and the orb in world space. 
 - If set to `ConstraintSpace::LocalToBodyCOM`, all constraint properties are specified relative to the center of mass (COM) of each body.

The `FirstReferenceFrame` parameter and `SecondReferenceFrame` parameter accepts a 4x4 tranformation matrix that defines both the location and rotation of the connection points for the two bodies and will function differently depending on the `Space` parameter.
 - If `Space` is set to `ConstraintSpace::LocalToBodyCOM`, the 4x4 transformation matrix provided in the `FirstReferenceFrame` and `SecondReferenceFrame` parameters define position and rotation of the connection point on the first and second body respectively, with respect to the body's center of mass (COM).
 - If `Space` is set to `ConstraintSpace::WorldSpace`, the 4x4 transformation matrix provided in the `FirstReferenceFrame` and `SecondReferenceFrame` parameters define the position and rotation of the connection point in world space.

The `FirstReferenceFrame` and `SecondReferenceFrame` parameters will automatically treat the position supplied as `ConstraintSpace::WorldSpace` if their respective bodies was left unset to fix the body to a point in world space. For example:
```shards
Physics.FixedConstraint(
  FirstBody: body
  SecondBody: none
  Static: true
  Enabled: true
  Space: ConstraintSpace::LocalToBodyCOM
  FirstReferenceFrame: [@f4(1 0 0 0) @f4(0 1 0 0) @f4(0 0 1 0) @f4(0 0 0 1)]
  SecondReferenceFrame: [@f4(1 0 0 0) @f4(0 1 0 0) @f4(0 0 1 0) @f4(0 0 0 1)]
)
```
In the above example the `body` in `FirstBody` is attached to a fixed point in world space. The `FirstReferenceFrame` parameter will attach the first connection point on `body` relative to its Center of Mass as `Spaces` was set to `ConstraintSpace::LocalToBodyCOM`. The `SecondReferenceFrame` parameter will attach to second connection point in world space despite `Spaces` being set to `ConstraintSpace::LocalToBodyCOM`.

This shard maintains the relative position and orientation of both bodies as defined by the `FirstReferenceFrame` and `SecondReferenceFrame` parameters.

The `AutoDetectPoint` parameter is only applicable if `Space` is set to `ConstraintSpace::WorldSpace`. If set to true, `FirstReferenceFrame` and `SecondReferenceFrame` will be ignored. The shard will instead automatically set the connection points to be the current location and rotation of the two bodies.


