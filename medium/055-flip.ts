/*
  4179 - Flip
  -----------
  난이도: medium · 태그: object · 출제: Farhan Kathawala (@kathawala)

  ### 문제

  Implement the type of `just-flip-object`. Examples:

  ```typescript
  Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
  Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
  Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
  ```

  No need to support nested objects and values which cannot be object keys such as arrays

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/04179-medium-flip/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Flip<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi', true: 'bool' }, Flip<{ pi: 3.14, bool: true }>>>,
  Expect<Equal<{ val2: 'prop2', val: 'prop' }, Flip<{ prop: 'val', prop2: 'val2' }>>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/4179/solutions
*/
