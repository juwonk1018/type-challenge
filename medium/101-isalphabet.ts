/*
  35252 - IsAlphabet
  ------------------
  난이도: medium · 출제: Kanon (@ysknsid25)

  ### 문제

  Determine if the given letter is an alphabet.

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/35252-medium-isalphabet/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type IsAlphabet<S extends string> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<IsAlphabet<"A">, true>>,
  Expect<Equal<IsAlphabet<"z">, true>>,
  Expect<Equal<IsAlphabet<"9">, false>>,
  Expect<Equal<IsAlphabet<"!">, false>>,
  Expect<Equal<IsAlphabet<"😂">, false>>,
  Expect<Equal<IsAlphabet<"">, false>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/35252/solutions
*/
