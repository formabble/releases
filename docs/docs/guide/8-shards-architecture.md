# Shards Architecture

Formabble uses the Shards coding language. This page is an explanation of the Shards architecture focused on the program flow, wire executors, regular vs pure wires, and concurrency model:

## Program Flow 1

- Shards code is written in `.shs` files which contain wires.
- Wires are composed of shards connected by data flow.
- Wires are scheduled on meshes.
- When a wire is scheduled on a mesh, it goes through the following steps:
    1. **Composing:** The shards are connected and validated. This builds the wire execution graph.
    2. **Warmup:** Any initialization logic in shards runs.
    3. **Running:** The wire executes on the mesh, with data flowing shard to shard.
- Wires can be executed concurrently on a mesh in different ways using wire executors.

## Program Flow 2

- Script file evaluation
    - Shards code is written in `.shs` files which contain the shard graph definition. These files are evaluated to create wires.
- Wire creation
    - Wires represent the shard graph and are created when evaluating the script files. A wire connects shards together into a directed acyclic graph.
- Mesh creation
    - A mesh manages and runs wires concurrently on a single thread. Creating multiple meshes allows wires to run concurrently across threads.
- Wire scheduling
    - Wires must be explicitly scheduled on a mesh in order to run. Scheduling a wire triggers the composing process.
- Composing of a Wire
    - The process of validating connections between shards and building the full shard graph. This happens when a wire is scheduled on a mesh.
- How wires are tied together
    - Wires form a directed acyclic graph via data flow between shards. The connections are validated during the composing process.
- Warmup of a Wire
    - Before a wire runs, the `warmup` method is called on each shard to initialize any state it may need.
- Wire running on Mesh
    - The mesh `tick` method runs scheduled wires by resuming their coroutine when they are ready to continue execution.

**Details 1**

> Understanding Program Flow
> 

> The way that Shards code operates is through the use of `.shs` files which is where all of the wires are written. These wires are made up of shards that are connected through a data flow system. The scheduling of these wires on meshes is where the task parallelism and isolation comes into play.
> 

> When a wire is scheduled on a mesh, it goes through a series of steps to ensure that it will execute properly. The first step is known as "composing", which is when the shards are connected and validated. This helps build the wire execution graph and ensure that everything is ready for execution.
> 

> The next step is the "warmup" phase, where any initialization logic in the shards runs. This is another important step to ensure that everything is ready for the final execution.
> 

> Finally, the wire is ready to execute on the mesh and will go through the "running" phase. During this phase, the wire will execute on the mesh and data will flow from shard to shard. This is where the true execution of the wire occurs.
> 

> It's important to note that wires can be executed concurrently on a mesh in different ways using wire executors. This allows for more flexibility and customization when it comes to the execution of these wires.
> 

## Wire Executors

There are various wire executors for running wires:

### Do & DoMany

- Runs the wire inline within the parent wire.
- A pause in the child wire will pause the parent wire.
- Inherits and uses the parent wire's context variables.
- The child wire is scheduled on the same mesh as the parent wire
- DoMany is similar to Do, but is able to schedule multiple copies of the same wire inline and give them different inputs

Use cases:

- Running short helper wires inline

Developer Notes:

- Note that calling `Do` on the same wire multiple times will reuse the same wire that was scheduled the first time `Do` is called, as they are unique, and so state is preserved every `Do` call.

**Details**

When using the `Do` function, the wire runs inline within the parent wire. Additionally, the `Do` function uses the parent wire's context variables, meaning any changes made to said variables will also be reflected on the parent wire. It is important to note that the child wire is not scheduled separately, and therefore any errors or pauses in the child wire will affect the entire parent wire.

`DoMany` is similar to `Do`, but it is able to schedule multiple copies of a wire and provide them each with a different input. When `DoMany` is called, it will execute all copies of the specified wire sequentially. Once the last wire has finished its execution, it will relinquish control back to the parent wire for it to continue with its execution.

One significant use case for `Do` is in implementing modular and reusable code segments. By encapsulating common functionality in separate Wires and using `Do` to execute them, developers can create more maintainable and flexible game systems.
`DoMany` shines in scenarios requiring sequential processing of multiple datasets. For instance, in a game with multiple AI-controlled characters, `DoMany` could be used to update each character's behavior sequentially within a single game tick.

In conclusion, `Do` and `DoMany` provide powerful mechanisms for inline Wire execution, enabling developers to create more modular, readable, and efficient code structures. They offer a balance between the simplicity of inline code and the modularity of separate Wires, making them valuable tools for organizing game logic, particularly in scenarios requiring sequential processing or frequent reuse of code segments.

```rust
@wire(do{
  x
  Math.Add(1) > x
  Log("Result do")
  ;; Results 3
})

@wire(main-wire {
  2 >= x
  Do(do)
  x
  Log("Result main")
  ;; Results  3
} Looped: false)

{graphics-behavior: main-wire}
```

```rust
@wire(do{
  x
  Math.Add(1) > x
  Log("Result do")
  ;; Results in 3 then 4 then 5
})

@wire(main-wire {
  2 >= x
  [1 2 3]
  DoMany(do)
  x
  Log("Result main")
  ;; Results  5
} Looped: false)

{graphics-behavior: main-wire}
```

### Detach

- Schedules and executes a specified Wire asynchronously on the same mesh.
- Allows the parent Wire to continue execution independently of the detached Wire.
- Copies the parent Wire's context variables.
- Only one unique copy of a specified Wire can be detached at a time.

Use cases:

- Running longer computations without blocking the parent Wire
- Implementing background tasks or processes
- Managing parallel game systems

**Details**

`Detach` is a feature that allows you to run a wire asynchronously on the same mesh. This means that if you have a child wire that is paused, the parent wire will not be paused along with it. Additionally, the detached wire copies the parent wire's context variables, meaning, changes made to said variables will not be reflected on the parent. Note however that only one unique copy of a wire can be detached. Meaning, if there is another call for `Detach` to detach the exact same wire, it will be ignored.

One of the main benefits of using the `Detach` is that it allows you to run longer computations without blocking the parent wire. This is particularly useful if you have a process that requires a significant amount of time to complete, but you don't want to pause the parent wire while it runs.

`Detach` also excels in managing parallel game systems. For instance, in a simulation game, you could use `Detach` to run various city management systems (e.g., population growth, economic simulations) concurrently with the main game loop.

In conclusion, the `Detach` shard provides a powerful mechanism for asynchronous Wire execution, enabling developers to create more responsive and efficient game systems.

```rust
@wire(detach{
  x
  Math.Add(1) > x
  Log("Result detach")
  ;; Results 3
})

@wire(main-wire {
  2 >= x
  Detach(detach)
  x
  Log("Result main")
  ;; Results  2
} Looped: false)

{graphics-behavior: main-wire}
```

### Spawn

- Schedules and runs a new copy of the specified Wire on the mesh asynchronously.
- Copies the parent Wire's context variables.
- Like Detach, the parent Wire is not blocked.
- Unlike Detach, creates a new copy of the Wire each time it's called.
- Returns a reference to the spawned Wire.

Use cases:

- Starting background Wires to run concurrently
- Running short-lived worker Wires
- Implementing dynamic, parallel game systems

**Details**

`Spawn` is a function that spawns and runs the wire on the mesh similar to`Detach` . Like `Detach`, the parent wire is not blocked when using `Spawn` and it also copies the context variables from the parent wire. This means that if the spawned wire was paused or stopped, it will not pause or stop the parent wire.  However, unlike `Detach`, `Spawn`creates a new copy of the Wire each time it's called, allowing for multiple copies of the Wire to run concurrently.

There are several important use cases for `Spawn`. One primary application is starting background Wires to run concurrently. This can significantly increase efficiency when managing multiple tasks simultaneously, such as processing game physics, AI behaviors, or environmental simulations in parallel.
Another key use is running short-lived worker Wires. This is particularly useful when you need to execute specific tasks quickly and efficiently without impacting the main game loop. For example, you might spawn Wires to handle particle effects, sound processing, or quick calculations.

Overall, `Spawn` is a powerful tool that offers flexibility and efficiency in managing concurrent processes. It allows developers to create more responsive and dynamic game systems by easily scheduling and managing multiple parallel tasks.

```rust
@wire(spawn{
  x
  Math.Add(1) > x
  Log("Result spawn")
  ;; Results 3
} Looped: false)

@wire(main-wire {
  2 >= x
  Spawn(spawn)
  x
  Log("Result main")
  ;; Results 2
} Looped: false)

{graphics-behavior: main-wire}
```

### Suspend and Resume

- `Suspend`, paused a specified wire
- `Resume`  un-suspends a wire that was previously paused using Suspend.

Use cases:

- Pausing a game during cutscenes or when in a menu

**Details**

The `Suspend` shard pauses the execution of a specified wire indefinitely, halting its progress until explicitly resumed. The `Resume` shard, on the other hand, continues the execution of a previously suspended wire from the exact point where it was paused. These shards allow for fine-grained control over the flow of execution in your game or application, enabling you to pause and resume specific processes or behaviors as needed.

One use case for the `Suspend` and `Resume` shards for example is to implement pausing into your game. One could `Suspend` the main wire controlling the logic when the player enters a pause menu and `Resume` it when they exit from the point it was suspended.

One could also use it to control AI behaviour: wires that control the logic for certain NPCs for example could be suspended when they are not within the player’s vicinity and resumed when they are.

Overall `Suspend` and `Resume` allows for precise and flexible control over the flow of logic in your program.

```rust
@wire(suspend-resume {
  x | Math.Add(1) > x
  Log("Result suspend-resume")
} Looped: true)

@wire(main-wire {
  Once({
    1 >= x
  })
  Detach(suspend-resume)
  Pause(1.0)
  Suspend(suspend-resume)
  Pause(1.0)
  Resume(suspend-resume)
  Log("Result main-wire")
} Looped: true)

{graphics-behavior: main-wire}
```

### Step & StepMany

- Progresses the state of a wire before relinquishing control back to the parent wire.
- Keeps state between activations.
- `StepMany` like `Step` but runs shards of multiple wires each activation.
- The parent wire is not blocked.
- Inherits and uses the parent wire's context variables.

Use cases:

- Implementing coroutines
- Managing turn-based game systems

**Details**

The `Step` shard is a powerful tool for controlling the execution flow of wires. When activated, it progresses the state of the specified wire before returning control to the parent wire. Importantly, `Step` maintains the wire's state between activations, allowing for continuous progression across multiple calls. The parent wire is never blocked when using `Step`, meaning if the stepped wire is suspended, the parent wire regains control and continues its execution. Step also inherits and uses the parent wire’s context variables, meaning any changes made to the said variables in the stepped wire is also reflected on the parent wire.

`StepMany` is similar to `Step`, but instead of progressing the state of a single wire, it is able to progress the state of multiple copies of the specified wire and provide different inputs to different copies.

One key use case for `Step` and `StepMany` is in the implementation of coroutines, enabling efficient management of complex, multi-stage processes. In game development, `Step` can be particularly useful for managing turn-based game systems. For example, in a strategy game, you could use `Step` to progress through each player's turn, allowing for intricate turn logic while maintaining overall game flow. `StepMany` could be used in scenarios like managing multiple AI entities, where each entity's behavior wire needs to be stepped with different input data.

In conclusion, the `Step` and `StepMany` shard provides a flexible and powerful mechanism for management of wires and their states. `Step` offers fine-grained control over individual wire execution, while `StepMany` enables efficient handling of multiple similar processes.

```rust
@wire(step{
  x
  Math.Add(1) > x
  Log("Result step")
  ;; Results 3
})

@wire(main-wire {
  2 >= x
  Step(step)
  x
  Log("Result main")
  ;; Results  3
} Looped: false)

{graphics-behavior: main-wire}
```

```rust
@wire(step{
  x
  Math.Add(1) > x
  Log("Result do")
  ;; Results in 3 then 4 then 5
})

@wire(main-wire {
  2 >= x
  [1 2 3]
  StepMany(step)
  x
  Log("Result main")
  ;; Results  5
} Looped: false)

{graphics-behavior: main-wire}
```

### **Branch**

- Creates a new child mesh from a specified Mesh.
- Schedules and runs multiple Wires asynchronously on this branch.
- Progresses the state of all specified Wires each time it's called.
- Continues execution of the current Wire without blocking.
- Inherits and uses the context variables from the parent wire. Changes made to said variables on the child wires will be reflected on the parent wire

Use cases:

- Managing parallel game systems
- Implementing background tasks
- Handling complex AI behaviors

**Details**

The `Branch` shard is a powerful tool for creating and managing parallel execution paths in your game or application. When activated, it creates a new child mesh from a specified mesh (or the current one if not specified) and schedules all the specified Wires to run on this child mesh. Each time the `Branch` shard is called, it progresses the state of all these Wires asynchronously, allowing for concurrent execution of multiple game systems or tasks. It is similar to `Step`, however, instead of progressing the state of just one wire, it is able to progress the state of multiple different wires.

One significant use case for `Branch` is in managing parallel game systems. For example, in an open-world game, you could use `Branch` to handle different aspects like NPC behaviors, environmental simulations, and quest progressions concurrently, improving overall game performance and responsiveness. `Branch` is also excellent for implementing background tasks that need to run alongside the main game loop. This could include things like asset loading, AI pathfinding calculations, or network synchronization.

In conclusion, the `Branch` shard provides a robust mechanism for creating and managing parallel execution paths in your game. It enables developers to build more complex, responsive, and efficient game systems by allowing multiple processes to run concurrently while maintaining clean separation of concerns in the code structure.

```rust
@wire(branch1{
  x
  Math.Add(1) > x
  Log("Result branch1")
  ;; Results 3
} Looped: false)
@wire(branch2{
  x
  Math.Add(2) > x
  Log("Result branch2")
  ;;Results 5
} Looped: false)

@wire(branch3{
  x
  Math.Add(3) > x
  Log("Result branch3")
  ;;Results 8
} Looped: false)

@wire(main-wire {
  2 >= x
  Branch([branch1 branch2 branch3])
  x
  Log("Result main")
} Looped: false)

{graphics-behavior: main-wire}
```

### **Expand**

- Schedules multiple copies of a specified Wire to run in parallel.
- Takes a single input and provides it to all copies of the Wire.
- Waits for all copies to complete before continuing execution.
- Makes copies of the parent wire's context variables. Any changes to said variables will not be reflected on the parent wire.
- Returns outputs based on a specified policy.

Use cases:

- Parallel processing of a single data set
- Implementing Monte Carlo simulations
- Load testing or stress testing game systems

**Details**

The `Expand` shard is a powerful tool for parallel execution of a single Wire multiple times. When activated, it creates a specified number of copies of a Wire and runs them concurrently. Each copy receives the same input, allowing for parallel processing of the same data or task.

One significant use case for `Expand` is in implementing Monte Carlo simulations in games. For example, in a strategy game, you could use `Expand` to simulate multiple possible outcomes of a player's action, each copy of the Wire representing a different random seed or scenario. `Expand` is also excellent for load testing or stress testing game systems. By creating multiple copies of a Wire that simulates player actions or game events, developers can easily test how their game performs under heavy load.

In conclusion, the `Expand` shard provides a robust mechanism for parallel execution of a single task or process multiple times. It enables developers to build more efficient and scalable game systems by leveraging parallel processing, while also offering flexibility in how results are collected and processed. This makes it a valuable tool for various scenarios in game development, from simulation and AI to performance testing and optimization.

```rust
@wire(expand{
  Math.Add(1)
  Log("Result expand")
  ;;Results 3
})

@wire(main-wire {
  2 >= x
  Expand(
    Size: 5
    Wire: expand
    Policy: WaitUntil::SomeSuccess
    Threads: 5
  )
  Log("Result Expand main")
  ;; Results [3 3 3 3 3]
  x
  Log("Result main")
  ;; Results 2
} Looped: false)

{graphics-behavior: main-wire}
```

### **TryMany**

- Schedules multiple copies of a specified Wire to run in parallel.
- Takes a sequence of inputs, providing each element to a corresponding Wire copy.
- Executes all Wire copies asynchronously.
- Returns outputs based on a specified policy.
- Copies context variables from the parent wire. Changing said variables in the scheduled wires are not reflected on the parent wire.

Use cases:

- Parallel processing of multiple datasets
- Implementing concurrent AI decision-making
- Batch processing of game assets or data

**Details**

The `TryMany` shard is a powerful tool for parallel execution of a single Wire with multiple inputs. When activated, it creates a copy of the specified Wire for each element in the input sequence and runs them concurrently. Each copy receives a different input from the sequence, allowing for parallel processing of multiple datasets or tasks.

One significant use case for `TryMany` is in implementing concurrent AI decision-making in games. For example, in a strategy game, you could use `TryMany` to evaluate multiple possible moves simultaneously, each copy of the Wire representing a different potential action. `TryMany` is also excellent for batch processing of game assets or data. By creating multiple copies of a Wire that processes different assets or data chunks, developers can significantly speed up tasks like texture processing, level generation, or data analysis.

In conclusion, the `TryMany` shard provides a robust mechanism for parallel execution of a single task or process with multiple inputs. It enables developers to build more efficient and scalable game systems by leveraging parallel processing, while also offering flexibility in how results are collected and processed. This makes it a valuable tool for various scenarios in game development, from AI and decision-making to asset processing and data analysis, especially when dealing with multiple datasets or tasks simultaneously.

```rust
@wire(try-many{
  Math.Add(x) > x
  Log("Result try-many")
} Looped: false)

@wire(main-wire {
  2 >= x
  [1 2 3 4 5]
  TryMany(
    Wire: try-many
    Policy: WaitUntil::AllSuccess
    Threads: 5
  )
  Log("Result TryMany main")
  ;; Results [3 4 5 6 7]
  x
  ;; Results 2
  Log("Result main")
} Looped: false)

{graphics-behavior: main-wire}
```

### SwitchTo

- Suspends the current Wire and switches execution to a specified Wire.
- Can restart the target Wire or resume from its previous state.
- The child wire that execution is switched to, copies context variables from the parent wire but not vice-versa. Changes to the said variables on the child wire will not be reflected on the parent wire. New variables created on the child wire, will remain unknown to the parent wire.
- Returns the output of the switched Wire upon returning to the parent Wire.

Use cases:

- Transitioning between game levels or states
- Implementing complex state machines
- Managing different modes of gameplay

**Details**

The `SwitchTo` shard is a powerful tool for controlling the flow of execution between different Wires. When activated, it suspends the current Wire and transfers control to a specified target Wire. This allows for seamless transitions between different parts of your game logic or application flow.

One significant use case for `SwitchTo` is in transitioning between game levels. For example, in a multi-level game, you could use `SwitchTo` to seamlessly move from one level to the next, ensuring that all necessary state is transferred and the new level starts correctly. This allows for smooth progression through the game while maintaining separation between level-specific logic. `SwitchTo` is also excellent for implementing complex state machines. In a game with multiple distinct modes (e.g., exploration, combat, inventory management), `SwitchTo` can be used to transition between these modes, each represented by a different Wire. This creates a clear separation of concerns and allows for more maintainable game logic. Another use case is in managing different gameplay modes. For instance, in a game that switches between 2D and 3D perspectives, `SwitchTo` could be used to transition between the Wires handling each perspective, ensuring that all necessary setup and teardown occurs during the switch.

In conclusion, the `SwitchTo` shard provides a powerful mechanism for managing complex flow control in games and applications. It enables developers to create more modular and maintainable code structures by allowing clear separation between different states or modes of operation.

```rust
@wire(switch{
  x
  Math.Add(1) > x
  Log("Result switch")
  ;; Results 3
  SwitchTo(main-wire)
})

@wire(main-wire {
  2 >= x
  SwitchTo(switch)
  Log("Result switch main")
  ;; Results 3
  x
  Log("Result main")
  ;; Results 2
} Looped: false)

{graphics-behavior: main-wire}
```

## Regular vs Pure Wires

- Regular wires can access the parent wire's context variables.
- Pure wires cannot access the parent wire's context. They are isolated.

Use cases:

- Pure wires provide safety for untrusted code
- Regular wires allow sharing state between wires

**Details**

Regular wires and pure wires are two types of wires that serve different purposes. Each type has its unique features and use cases that developers should consider when creating their applications.

Regular wires, as the name suggests, can access the parent wire's context variables, which means they can inherit and share state between wires. This feature is particularly useful when developers want to share data between components or when they need to connect different parts of their application that depend on the same data. Regular wires provide a convenient way to access and manipulate data without having to pass it through multiple components, which can be time-consuming and error-prone.

On the other hand, pure wires cannot access the parent wire's context. They are isolated, which means they operate independently of their parent wire and do not share state with other wires. This feature makes pure wires an excellent choice for untrusted code, where security is a top priority. By isolating pure wires, developers can ensure that any malicious code cannot access or manipulate sensitive data, which can be critical in applications that handle confidential information.

In summary, regular wires and pure wires serve different purposes and have unique features that developers should consider when creating their applications. While regular wires allow sharing state between wires, pure wires provide safety for untrusted code. By understanding the differences between these two types of wires, developers can choose the right one for their specific use case and build more secure and efficient applications.

## Concurrency Model

- Wires provide task parallelism running concurrently on meshes.
- A mesh runs on a single thread, so no intra-wire parallelism.
- Shards have no shared mutable state, removing synchronization needs within a wire.
- Different meshes run independently and can run on different threads.
- Wires on the same mesh can interleave shard execution but shards have no side effects.
- Wire parameters are immutable once running.
- No shard execution ORDER guarantees between wires on a mesh.

So in summary:

- Safety within a wire comes from shards being side effect free.
- Safety between wires comes from shard immutability and no execution order guarantees.
- Multiple meshes provide full task parallelism.

I couldn't find information about the shard parameter validation rules or how meshes provide mutual exclusion.

## **Answers to specific questions**

- Multiple meshes allow shard graphs to run concurrently across threads.
- A mesh provides thread isolation - wires in separate meshes run concurrently.
- Coroutines yield execution between shards in a wire and between scheduled wires.
- Shard parameters define typed, validated inputs.
- Parameters must have compatible types to connected shards.
- Validation happens once at compose time to optimize performance.
- A shard's state persists between activations.
- Shards don't share mutable state so no synchronization needed.
- Concurrent data flows minimize shared mutable state.
- Shard graph structure is invariant under deformation.
- Context variables share state between parent/child wires.
- Context variables are scoped to a wire and its children.
- Context variables avoid explicitly passing state through shards.