/*
  9286 - FirstUniqueCharIndex
  ---------------------------
  난이도: medium · 태그: string · 출제: jiangshan (@jiangshanmeta)

  ### 문제

  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by [leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/))

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/09286-medium-firstuniquecharindex/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type FirstUniqueCharIndex<T extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/9286/solutions
*/
