- This shard is able to use a special temporary variable `$0` which acts as an Accumulator which will hold the intermediate result during the reduction process.

- For example consider the following: `[1 2 3 4 5] | Reduce(Math.Subtract($0))`
  This shard will be processed as follows:
  - Each element of the sequence will be passed as input to Math.Subtract and the Accumulator($0) will be subtracted from it.
  - The result will then be set as the new value of the Accumulator($0).
  - First, $0 is initialized with the first element of the sequence: $0 = 1
  - 2 - 1 = 1 ($0 then becomes 1)
  - 3 - 1 = 2 ($0 then becomes 2)
  - 4 - 2 = 2 ($0 then becomes 2)
  - 5 - 2 = 3 ($0 then becomes 3)
  - The final value of `$0` is then returned.