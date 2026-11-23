/*
  35991 - MyUppercase
  -------------------
  난이도: medium · 출제: NaNix (@fusheng33)

  ### 문제

  Implement `Uppercase<T>`, convert all letter to uppercase

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/35991-medium-myuppercase/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type MyUppercase<T extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyUppercase<'a'>, 'A'>>,
  Expect<Equal<MyUppercase<'Z'>, 'Z'>>,
  Expect<Equal<MyUppercase<'A z h yy 😃cda\n\t  a   '>, 'A Z H YY 😃CDA\n\t  A   '>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/35991/solutions
*/
