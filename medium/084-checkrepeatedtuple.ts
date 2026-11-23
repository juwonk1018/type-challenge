/*
  27958 - CheckRepeatedTuple
  --------------------------
  난이도: medium · 출제: bowen (@jiaowoxiaobala)

  ### 문제

  Implement type `CheckRepeatedChars<T>` which will return whether type `T` contains duplicated member

  For example:

  ```ts
  type CheckRepeatedTuple<[1, 2, 3]>   // false
  type CheckRepeatedTuple<[1, 2, 1]>   // true
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/27958-medium-checkrepeatedtuple/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type CheckRepeatedTuple<T extends unknown[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CheckRepeatedTuple<[number, number, string, boolean]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[number, string]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 3]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 1]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[]>, false>>,
  Expect<Equal<CheckRepeatedTuple<string[]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[number, 1, string, '1', boolean, true, false, unknown, any]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[never, any, never]>, true>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/27958/solutions
*/
