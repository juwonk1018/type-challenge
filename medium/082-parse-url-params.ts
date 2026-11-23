/*
  9616 - Parse URL Params
  -----------------------
  난이도: medium · 태그: infer, string, template-literal · 출제: Anderson. J (@andersonjoseph)

  ### 문제

  You're required to implement a type-level parser to parse URL params string into an Union.

  ```ts
  ParseUrlParams<':id'> // id
  ParseUrlParams<'posts/:id'> // id
  ParseUrlParams<'posts/:id/:user'> // id | user
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/09616-medium-parse-url-params/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type ParseUrlParams<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ParseUrlParams<''>, never>>,
  Expect<Equal<ParseUrlParams<':id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user'>, 'id' | 'user'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user/like'>, 'id' | 'user'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/9616/solutions
*/
