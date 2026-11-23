/*
  119 - ReplaceAll
  ----------------
  난이도: medium · 태그: template-literal · 출제: Anthony Fu (@antfu)

  ### 문제

  주어진 문자열 `S`에서 부분 문자열 `From`을 찾아 모두 `To`로 교체하는 제네릭 `ReplaceAll<S, From, To>`을 구현하세요.

  예시:

  ```ts
  type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type ReplaceAll<S extends string, From extends string, To extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/119/solutions
*/
