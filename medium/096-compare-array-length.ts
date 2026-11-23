/*
  34007 - Compare Array Length
  ----------------------------
  난이도: medium · 태그: recursion, array · 출제: alviner (@ScriptBloom)

  ### 문제

  Implement `CompareArrayLength` to compare two array length(T & U). 

  If length of T array is greater than U, return 1;
  If length of U array is greater than T, return -1;
  If length of T array is equal to U, return 0.

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/34007-medium-compare-array-length/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type CompareArrayLength<T extends any[], U extends any[]> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<CompareArrayLength<[1, 2, 3, 4], [5, 6]>, 1>>,
  Expect<Equal<CompareArrayLength<[1, 2], [3, 4, 5, 6]>, -1>>,
  Expect<Equal<CompareArrayLength<[], []>, 0>>,
  Expect<Equal<CompareArrayLength<[1, 2, 3], [4, 5, 6]>, 0>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/34007/solutions
*/
