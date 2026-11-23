/*
  21104 - FindAll
  ---------------
  난이도: medium · 태그: template-literal, string · 출제: tunamagur0 (@tunamagur0)

  ### 문제

  Given a pattern string P and a text string T, implement the type `FindAll<T, P>` that returns an Array that contains all indices (0-indexed) from T where P matches.

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/21104-medium-findall/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type FindAll<T extends string, P extends string> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<
    Equal<FindAll<"Collection of TypeScript type challenges", "Type">, [14]>
  >,
  Expect<
    Equal<FindAll<"Collection of TypeScript type challenges", "pe">, [16, 27]>
  >,
  Expect<Equal<FindAll<"Collection of TypeScript type challenges", "">, []>>,
  Expect<Equal<FindAll<"", "Type">, []>>,
  Expect<Equal<FindAll<"", "">, []>>,
  Expect<Equal<FindAll<"AAAA", "A">, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<"AAAA", "AA">, [0, 1, 2]>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/21104/solutions
*/
