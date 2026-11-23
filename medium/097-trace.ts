/*
  35191 - Trace
  -------------
  난이도: medium · 출제: csharpython (@csharpython)

  ### 문제

  The trace of a square matrix is the sum of the elements on its main diagonal.
  However, it's difficult to calculate the sum with type system. 
  To make things simple, let's return the elements on the main diagonal with union type.


  For example:

  ```ts
  type Arr = [
    [1,2],
    [3,4]
  ]
  type Test = Trace<Arr> // expected to be 1 | 4
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/35191-medium-trace/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Trace<T extends any[][]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trace<[[1, 2], [3, 4]]>, 1 | 4>>,
  Expect<Equal<Trace<[[0, 1, 1], [2, 0, 2], [3, 3, 0]]>, 0>>,
  Expect<Equal<Trace<[['a', 'b', ''], ['c', '', ''], ['d', 'e', 'f']]>, 'a' | '' | 'f'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/35191/solutions
*/
