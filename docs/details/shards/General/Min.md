The input and the value in the `Operand` parameter must be of the same type. (e.g you cant compare an integer with a float, a sequence of integers can only be compared with an integer or sequence of integers, a int vector can only be compared with an int or another int vector)

If a sequence of numbers was provided as input, and a single  the shard will compare each element in the sequence with the value in the `Operand` parameter and output a sequence of numbers with the minimum value for each element.

If a sequence of numbers was provided as input and a sequence was also provided in the `Operand` parameter, the shard will compare each element in the input sequence with the corresponding element in the `Operand` sequence and output a sequence of numbers with the minimum value for each element. If the operand sequence is shorter than the input sequence, the shard will loop back to the first element of the operand sequence and continue the comparison. If the operand sequence is longer than the input sequence, the extra elements in the operand sequence will be ignored. This shard will behave the same if the input and operand are vectors.

