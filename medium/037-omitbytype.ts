/*
  2852 - OmitByType
  -----------------
  난이도: medium · 태그: object · 출제: jiangshan (@jiangshanmeta)

  ### 문제

  From ```T```, pick a set of properties whose type are not assignable to ```U```.

  For Example

  ```typescript
  type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { name: string; count: number }
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type OmitByType<T, U> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string, count: number }>>,
  Expect<Equal<OmitByType<Model, string>, { count: number, isReadonly: boolean, isEnable: boolean }>>,
  Expect<Equal<OmitByType<Model, number>, { name: string, isReadonly: boolean, isEnable: boolean }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/2852/solutions
*/
