/*
  35045 - Longest Common Prefix
  -----------------------------
  난이도: medium · 출제: Tom Cleary (@thomcleary)

  ### 문제

  ### Longest Common Prefix

  Write a type, `LongestCommonPrefix` that returns the longest common prefix string amongst a tuple of strings.

  If there is no common prefix, return an empty string `""`.

  ```ts
  type Common = LongestCommonPrefix<["flower", "flow", "flight"]>
  //   ?^ "fl"

  type Uncommon = LongestCommonPrefix<["dog", "racecar", "race"]>
  //   ?^ ""
  ```
  Inspired by [LeetCode 14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/35045-medium-longest-common-prefix/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type LongestCommonPrefix<T extends string[], P extends string = ""> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<LongestCommonPrefix<["flower", "flow", "flight"]>, "fl">>,
  Expect<Equal<LongestCommonPrefix<["dog", "racecar", "race"]>, "">>,
  Expect<Equal<LongestCommonPrefix<["", "", ""]>, "">>,
  Expect<Equal<LongestCommonPrefix<["a", "", ""]>, "">>,
  Expect<Equal<LongestCommonPrefix<["", "a", ""]>, "">>,
  Expect<Equal<LongestCommonPrefix<["", "", "a"]>, "">>,
  Expect<Equal<LongestCommonPrefix<["a", "a", ""]>, "">>,
  Expect<Equal<LongestCommonPrefix<["a", "", "a"]>, "">>,
  Expect<Equal<LongestCommonPrefix<["", "a", "a"]>, "">>,
  Expect<Equal<LongestCommonPrefix<["a", "a", "a"]>, "a">>,
  Expect<Equal<LongestCommonPrefix<["abc", "abcd", "abcde"]>, "abc">>,
  Expect<Equal<LongestCommonPrefix<[" ", " ", " "]>, " ">>,
  Expect<
    Equal<
      LongestCommonPrefix<["type-challenges", "type-hero", "typescript"]>,
      "type"
    >
  >,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/35045/solutions
*/
