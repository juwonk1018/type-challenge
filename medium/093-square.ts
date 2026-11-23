/*
  27133 - Square
  --------------
  난이도: medium · 태그: tuple, array, math · 출제: null (@aswinsvijay)

  ### 문제

  Given a number, your type should return its square.

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/27133-medium-square/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Square<N extends number> = number;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Square<0>, 0>>,
  Expect<Equal<Square<1>, 1>>,
  Expect<Equal<Square<3>, 9>>,
  Expect<Equal<Square<20>, 400>>,
  Expect<Equal<Square<100>, 10000>>,
  Expect<Equal<Square<101>, 10201>>,

  // Negative numbers
  Expect<Equal<Square<-2>, 4>>,
  Expect<Equal<Square<-5>, 25>>,
  Expect<Equal<Square<-31>, 961>>,
  Expect<Equal<Square<-50>, 2500>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/27133/solutions
*/
