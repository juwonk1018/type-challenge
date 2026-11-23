/*
  116 - Replace
  -------------
  난이도: medium · 태그: template-literal · 출제: Anthony Fu (@antfu)

  ### 문제

  문자열 S에서 `From`를 찾아 한 번만 `To`로 교체하는 `Replace<S, From, To>`를 구현하세요.

  예시:

  ```ts
  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Replace<S extends string, From extends string, To extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/116/solutions
*/
