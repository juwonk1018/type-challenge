/*
  10 - Tuple to Union
  -------------------
  난이도: medium · 태그: infer, tuple, union · 출제: Anthony Fu (@antfu)

  ### 문제

  튜플 값으로 유니온 타입을 생성하는 제네릭 `TupleToUnion<T>`를 구현하세요.

  예시:

  ```ts
  type Arr = ['1', '2', '3']

  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type TupleToUnion<T> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/10/solutions
*/
