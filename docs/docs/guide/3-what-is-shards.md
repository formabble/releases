# What is Shards?

Shards syntax directly maps a visual model enabling efficient round-trip code generation during visual development.
Shards powers an upcoming AI-powered game creation system where communities can play and collaborate in real time. While Shards is often not explicitly seen there, it is the language behind the AI-assisted visual interactions that will allow users to create games and experiences in a low to no-code environment.
In Shards, every primitive is a shard, flowing from shard to shard, to build a computational graph that represents a visual model. Example:

```shards
[[1 2 3] [2 3 4] [3 4 5]] | Reduce(Math.Add($0)) | Assert.Is([6 9 12]) | Log
;=> [6 9 12]
```
Even a literal is a shard. `[[1 2 3] [2 3 4] [3 4 5]]` is internally converted into `Const([[1 2 3] [2 3 4] [3 4 5]])` shard. Furthermore, each shard was programmed to guarantee the highest standards of performance, with low level optimizations in C++ and Rust.

### Goal
Shards achieves zero-compromise on four goals: Reach, Accuracy, Performance, and Simplicity.

### Accessibility
**Reach to People**

Using visual development engines like Formabble, anyone can build complex
applications like games, without prior coding skills.

**Reach of Platforms**

Shards is available in all major platforms: OS X, Windows, Mac, browser, IOS and Vision Pro

**Robust Reach**

Visual development powered by shards is suitable for solving a wide range of problems, from performance demanding games, to utility shell scripts, with batteries included: 550+ shards for all kinds of purposes.

### Accuracy
Automatically inferred strong types, and inter-shard type compatibility validation based on the data flowing in and out from shards while building the computational graph.

### Performance
**Zero waste visual development**

Code is manipulated without any unnecessary waste. We achieved through the 1-to-1 direct translation from Shard’s code to the final computational graph. This direct mapping ensures that changes made in one representation can seamlessly translate to the other, making the entire process efficient and error-free.

**Performant composition**

The straightforward architecture flow of shards allows for fast composition of the computational graph, which results in quick loading of programs.

**Performant runtime**

Inferring and validating types at compile time allows programs to run faster, as we no longer need to worry about types during runtime.

**Primitive performance**

Each primitive (Shard) in the computational graph was programmed to the highest standards of performance, using C++ and Rust.

**Parallel performance**

Built on top of co-routines. It’s extremely easy to unleash parallelism while maintaining a low syscall count.

### Simplicity
Shards is just shards flowing into shards, thus:
- Is designed to be visual and easy to understand at a glance.
- Trivial implementation and control of game loop code.
- Extremely easy to debug and dissect due to the straight forward flow of shards.
- Low learning curve to make changes to the code directly.


!!! note " Shards Article"

    For a more in-depth article on the capabilities of Shards, visit: [Shards: Coding Simplicity and Power](https://voidtarget.substack.com/p/shards-coding-simplicity-and-power)

    Or check out the [github repository](https://github.com/fragcolor-xyz/shards)
