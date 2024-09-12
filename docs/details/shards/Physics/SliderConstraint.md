You can leave the `FirstBody` or `SecondBody` parameters unset to attach the set body to a fixed point in world space instead of attaching it to another body. For example, if `FirstBody` is set and `SecondBody` is unset, the first body will be attached to the fixed point specified in the `SecondPoint` parameter and vice versa.

The `Space` parameter defines the coordinate system that the shard will use.
 - If set to `ConstraintSpace::WorldSpace`, all constraint properties are specified in world space coordinates. The constraint also maintains the initial relative position between the ship and the orb in world space. 
 - If set to `ConstraintSpace::LocalToBodyCOM`, all constraint properties are specified relative to the center of mass (COM) of each body.

The `FirstPoint` parameter and `SecondPoint` parameter accepts a float3 that defines the position of the connection points for the two bodies. It functions differently depending on the `Space` parameter.
 - If `Space` is set to `ConstraintSpace::LocalToBodyCOM`, the position provided in the `FirstPoint` and `SecondPoint` parameters define the position of the connection point on the first and second body respectively, with respect to the body's center of mass (COM).
 - If `Space` is set to `ConstraintSpace::WorldSpace`, the position provided in the `FirstPoint` and `SecondPoint` parameters define the position of the connection point in world space.

The `FirstPoint` and `SecondPoint` parameters will automatically treat the position supplied as `ConstraintSpace::WorldSpace` if their respective bodies was left unset to fix the body to a point in world space. For example:
```shards
Physics.SliderConstraint(
  FirstBody: body
  SecondBody: none
  Static: true
  Enabled: true
  Space: ConstraintSpace::LocalToBodyCOM
  FirstPoint: @f3(0 0 0)
  SecondPoint: @f3(0 0 0)
  SliderAxis: @f3(0 1 0)
  NormalAxis: @f3(0 0 1)
  LimitsMin: -10.0
  LimitsMax: 20.0
  LimitSpring: {damping: 1.0 frequency: 0.0}
)
```
In the above example the `body` in `FirstBody` is attached to a fixed point in world space. The `FirstPoint` parameter will attach the first connection point on `body` relative to its Center of Mass as `Spaces` was set to `ConstraintSpace::LocalToBodyCOM`. The `SecondPoint` parameter will attach to second connection point to the location `(0 0 0)` in world space despite spaces being set to `ConstraintSpace::LocalToBodyCOM`.
  

When `MotorSettings` parameter is set, the `MaximumFriction` parameter will be ignored.

The `MaxFrictionForce` parameter defines the amount of force required to move the slider. In other words, how "stiff" the slider is.

The `MotorSettings` parameter defines the minimum and maximum amount of force that is applied to the slider as it slides along the axis. In other words, it defines how fast or slow the slider can slide. This parameter will overwrite the `MaxFrictionForce` parameter.

The `MotorSettings` parameter accepts a table with the following parameters:
 - `minForceLimit`: The minimum amount of force that is applied on the slider. The slider will never move slower than what is defined here.
 - `maxForceLimit`: The maximum amount of force that is applied on the slider. The slider will never move faster than what is defined here.
 - `minTorqueLimit`: The minimum amount of rotational force that is applied to the slider.
 - `maxTorqueLimit`: The maximum amount of rotational force that is applied to the slider.

The `LimitSpringSettings` parameter defines how the slider behaves as it settles into its final position as it reaches the ends of the slider. 

The `MotorSpringSettings` parameter on the otherhand defines how the slider behaves as it settles into its final position along the axis.

Both parameters can take two different types of tables:
  - {damping: Float frequency: Float}
    - `damping`: Is a ration between 0 and 1. A higher damping value will cause the slider's motion to be more smoothed out, with less overshoot.
    - `frequency`: Is a value measured in Hz (cycles per second). A higher frequency value will cause the slider to reach its final position more quickly.
  - {damping: Float stiffness: Float}
    - `damping`: Is a ration between 0 and 1.A higher damping value will cause the slider to experience more resistance to motion, slowing it down more as it approaches its final position.
    - `stiffness`: Is a value in units of force per distance (N/m for linear springs). A higher stiffness value will cause the slider to respond more forcefully to displacement from its target.

