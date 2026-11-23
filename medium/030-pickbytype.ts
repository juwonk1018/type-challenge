/*
  2595 - PickByType
  -----------------
  난이도: medium · 태그: object · 출제: jiangshan (@jiangshanmeta)

  ### 문제

  From `T`, pick a set of properties whose type are assignable to `U`.

  For Example

  ```typescript
  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/02595-medium-pickbytype/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type PickByType<T, U> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean, isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/2595/solutions
*/
