/*
  108 - Trim
  ----------
  난이도: medium · 태그: template-literal · 출제: Anthony Fu (@antfu)

  ### 문제

  정확한 문자열 타입이고 양쪽 끝의 공백이 제거된 새 문자열을 반환하는 `Trim<T>`를 구현하십시오.

  예시

  ```ts
  type trimmed = Trim<'  Hello World  '> // 기대되는 결과는 'Hello World'입니다.
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Trim<S extends string> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/108/solutions
*/
