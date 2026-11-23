/*
  28333 - Public Type
  -------------------
  난이도: medium · 태그: object-keys · 출제: KaiKai (@kaikaibenkai)

  ### 문제

  Remove the key starting with `_` from given type `T`.

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/28333-medium-public-type/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type PublicType<T extends object> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
  Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
  Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
  Expect<Equal<PublicType<{ d: string, _e: string }>, { d: string }>>,
  Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
  Expect<Equal<PublicType<{ g: '_g' }>, { g: '_g' }>>,
  Expect<Equal<PublicType<{ __h: number, i: unknown }>, { i: unknown }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/28333/solutions
*/
