/*
  645 - Diff
  ----------
  난이도: medium · 태그: object · 출제: ZYSzys (@ZYSzys)

  ### 문제

  `O` & `O1`의 차이점인 `객체`를 가져옵니다

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Diff<O, O1> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string, gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string, gender: number }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/645/solutions
*/
