/*
  298 - Length of String
  ----------------------
  난이도: medium · 태그: template-literal · 출제: Pig Fang (@g-plane)

  ### 문제

  `String#length`처럼 동작하는 문자열 리터럴의 길이를 구하세요.

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type LengthOfString<S extends string> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/298/solutions
*/
