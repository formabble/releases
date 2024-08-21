# Shards Architecture

Formabble uses the Shards coding language. This page is an explanation of the Shards architecture focused on how the program flow works.

## The Shards Overall Architecture

- Shards code is written in `.shs` files which contain wires.
- Wires are composed of shards connected by data flow.
- Wires are scheduled on meshes.
- When a wire is scheduled on a mesh, it goes through the following steps:
    1. **Composing:** The shards are connected and validated. This builds the wire execution graph.
    2. **Warmup:** Any initialization logic in shards runs.
    3. **Running:** The wire executes on the mesh, with data flowing shard to shard.
- Wires can be executed concurrently on a mesh in different ways using wire executors.

## The Shards program lifetime

When a shards script is run, it undergoes the following steps:

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

## The Shards Concurrency Model

- Wires provide task parallelism running concurrently on meshes.
- A mesh runs on a single thread, so no intra-wire parallelism.
- Shards have no shared mutable state, removing synchronization needs within a wire.
- Different meshes run independently and can run on different threads.
- Wires on the same mesh can interleave shard execution but shards have no side effects.
- Wire parameters are immutable once running.
- No shard execution ORDER guaranteed between wires on a mesh.

So in summary:

- Safety within a wire comes from shards being side effect free.
- Safety between wires comes from shard immutability and no execution order guarantees.
- Multiple meshes provide full task parallelism.

## Additional Details

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