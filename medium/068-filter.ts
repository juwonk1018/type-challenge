/*
  18220 - Filter
  --------------
  난이도: medium · 태그: array, filter · 출제: Mu-Hun (@mu-hun)

  ### 문제

  타입 `Filter<T, Predicate>`를 구현하세요. 여기서 `T`는 배열이고, `Predicate`는 원시 타입 또는 원시 타입의 유니온입니다. 결과는 `Predicate`에 속하는 원시 타입만 가진 배열이어야 합니다.

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/18220-medium-filter/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Filter<T extends any[], P> = []

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Falsy = false | 0 | '' | null | undefined

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/18220/solutions
*/
