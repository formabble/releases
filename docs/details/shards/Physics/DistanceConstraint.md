You can leave the `FirstBody` or `SecondBody` parameters unset to attach the set body to a fixed point in world space instead of attaching it to another body. For example, if `FirstBody` is set and `SecondBody` is unset, the first body will be attached to the fixed point specified in the `SecondPoint` parameter and vice versa.

The `Space` parameter defines the coordinate system that the shard will use.
 - If set to `ConstraintSpace::WorldSpace`, all constraint properties are specified in world space coordinates. The constraint also maintains the initial relative position between the ship and the orb in world space. 
 - If set to `ConstraintSpace::LocalToBodyCOM`, all constraint properties are specified relative to the center of mass (COM) of each body.

The `FirstPoint` parameter and `SecondPoint` parameter accepts a float3 that defines the position of the connection points for the two bodies. It functions differently depending on the `Space` parameter.
 - If `Space` is set to `ConstraintSpace::LocalToBodyCOM`, the position provided in the `FirstPoint` and `SecondPoint` parameters define the position of the connection point on the first and second body respectively, with respect to the body's center of mass (COM).
 - If `Space` is set to `ConstraintSpace::WorldSpace`, the position provided in the `FirstPoint` and `SecondPoint` parameters define the position of the connection point in world space. Meaning, the connection point will be created in the specified world space, and the relative position between the point and the respective body will be maintained as the body moves.

The `FirstPoint` and `SecondPoint` parameters will automatically treat the position supplied as `ConstraintSpace::WorldSpace` if their respective bodies was left unset to fix the body to a point in world space. For example:
```shards
Physics.DistanceConstraint(
  FirstBody: body
  SecondBody: none
  Static: true
  Enabled: true
  Space: ConstraintSpace::LocalToBodyCOM
  FirstPoint: @f3(0 0 0)
  SecondPoint: @f3(0 0 0)
  MinDistance: 0.0
  MaxDistance: 10.0
)
```
In the above example the `body` in `FirstBody` is attached to a fixed point in world space. The `FirstPoint` parameter will attach the first connection point on `body` relative to its Center of Mass as `Spaces` was set to `ConstraintSpace::LocalToBodyCOM`. The `SecondPoint` parameter will attach to second connection point to the location `(0 0 0)` in world space despite spaces being set to `ConstraintSpace::LocalToBodyCOM`.

The `LimitSpringSettings` parameter defines how the slider behaves as it settles into its final position as it reaches the limits defined by the `MinDistance` and `MaxDistance` parameters.

`LimitSpringSettings` can take two different types of tables:
  - {damping: Float frequency: Float}
    - `damping`: Is a ration between 0 and 1. A higher damping value will cause the slider's motion to be more smoothed out, with less overshoot.
    - `frequency`: Is a value measured in Hz (cycles per second). A higher frequency value will cause the slider to reach its final position more quickly.
  - {damping: Float stiffness: Float}
    - `damping`: Is a ration between 0 and 1.A higher damping value will cause the slider to experience more resistance to motion, slowing it down more as it approaches its final position.
    - `stiffness`: Is a value in units of force per distance (N/m for linear springs). A higher stiffness value will cause the slider to respond more forcefully to displacement from its target.

If either `MinDistance` or `MaxDistance` are set to a negative number and `Space` was set to `ConstraintSpace::WorldSpace`, the negative value will be replaced by the initial distance between the two points in world space.

When `Space` is set to `ConstraintSpace::LocalToBodyCOM`, if `MinDistance` is set to a positive number, it will be ignored. If set to a negative number, it will be the minimum distance that has to be kept between the two bodies. Conversely, if `MaxDistance` is set to a negative number, it will treat the maximum distance between the two bodies as 0.0. If set to a positive number, it will be the maximum distance that can be kept between the two bodies.


