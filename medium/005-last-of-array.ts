/*
  15 - Last of Array
  ------------------
  난이도: medium · 태그: array · 출제: Anthony Fu (@antfu)

  ### 문제

  > 이 챌린지에는 TypeScript 4.0 사용이 권장됩니다.

  배열 `T`를 사용하고 마지막 요소를 반환하는 제네릭 `Last<T>`를 구현합니다.

  예시

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type tail1 = Last<arr1> // expected to be 'c'
  type tail2 = Last<arr2> // expected to be 1
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Last<T extends any[]> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/15/solutions
*/
