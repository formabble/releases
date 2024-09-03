## Binary Operations on Sequences ##

*Using the `Math.Add` operator as an example.*

When sequences are passed as arguments, the operator processes pairs of correspondingly placed elements from these sequences and computes the result for each pair. This leads to different scenarios:

1. **Input** and `Operand` sequence sizes are equal

Each element in the **Input** sequence has a corresponding element in the `Operand` sequence. Therefore, the **Output** sequence has the same number of resultant elements and the same size as the argument sequences.

| Entity     | Sequence                                    | Seq. Size |
| ---------- | ------------------------------------------- | --------- |
| **Input**  | [a b c]                                     | 3         |
| `Operand`  | [1 2 3]                                     | 3         |
| **Output** | [(a \| Add(1)) (b \| Add(2)) (c \| Add(3))] | 3         |

2. **Input** sequence size is less than `Operand` sequence size

In this case, some `Operand` elements (`Operand` sequence size - **Input** sequence size) will not have corresponding **Input** elements to pair with. These `Operand` elements are ignored in the final **Output**. Hence, the **Output** sequence size will be the same as the **Input** sequence size.

| Entity     | Sequence                      | Seq. Size |
| ---------- | ----------------------------- | --------- |
| **Input**  | [a b]                         | 2         |
| `Operand`  | [1 2 3]                       | 3         |
| **Output** | [(a \| Add(1)) (b \| Add(2))] | 2         |

3. **Input** sequence size is greater than `Operand` sequence size

Once all the `Operand` elements have been paired and computed with the corresponding **Input** elements, the remaining **Input** elements (**Input** sequence size - `Operand` sequence size) will continue looping over the `Operand` sequence until all **Input** sequence elements have been used. As a result, the **Output** sequence will again be the same size as the **Input** sequence.

| Entity     | Sequence                                                                | Seq. Size |
| ---------- | ----------------------------------------------------------------------- | --------- |
| **Input**  | [a b c d e]                                                             | 5         |
| `Operand`  | [1 2]                                                                   | 2         |
| **Output** | [(a \| Add(1)) (b \| Add(2)) (c \| Add(1)) (d \| Add(2)) (e \| Add(1))] | 5         |

> [!NOTE]
> Such sequence operations are useful in transforming and translating 2D/3D grid values, which is a frequent requirement in graphics rendering. This is done by passing the transform inputs as an **Input** sequence (to be applied to every row/line for a 2D grid or to every 2D-matrix/plane for a 3D grid) of the 2D matrix and the `Operand` sequence as the set of 2D/3D coordinates (represented linearly) that is to be transformed.
