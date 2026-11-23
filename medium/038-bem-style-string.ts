/*
  3326 - BEM style string
  -----------------------
  난이도: medium · 태그: template-literal, union, tuple · 출제: Songhn (@songhn233)

  ### 문제

  The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS. 

  For example, the block component would be represented as `btn`, element that depends upon the block would be represented as `btn__price`, modifier that changes the style of the block would be represented as `btn--big` or `btn__price--warning`.

  Implement `BEM<B, E, M>` which generate string union from these three parameters. Where `B` is a string literal, `E` and `M` are string arrays (can be empty).

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/03326-medium-bem-style-string/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type BEM<B extends string, E extends string[], M extends string[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/3326/solutions
*/
