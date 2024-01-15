`Hashed` takes a single shard or a sequence of shards and hashes the output of the last shard (or the only shard) in this sequence. So this shard can be used to group together certain shards when you want their final output to be hashed.

The input to `Hashed` becomes input to the first shard in the hashed sequence and the output of this shard becomes the input for the next shard in the hashed sequence (following the regular Shards data flow pattern).

!!! note
    `Hashed` has an alias `|#`.
