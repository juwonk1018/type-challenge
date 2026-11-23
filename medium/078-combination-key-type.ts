/*
  21106 - Combination key type
  ----------------------------
  난이도: medium · 출제: Nauxscript (@Nauxscript)

  ### 문제

  1. Combine multiple modifier keys, but the same modifier key combination cannot appear.
  2. In the `ModifierKeys` provided, the priority of the previous value is higher than the latter value; that is, `cmd ctrl` is OK, but `ctrl cmd` is not allowed.

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/21106-medium-zu-he-jian-lei-xing-combination-key-type/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

// 实现 Combs
type Combs<T extends any[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']
type CaseTypeOne = 'cmd ctrl' | 'cmd opt' | 'cmd fn' | 'ctrl opt' | 'ctrl fn' | 'opt fn'

type cases = [
  Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/21106/solutions
*/
