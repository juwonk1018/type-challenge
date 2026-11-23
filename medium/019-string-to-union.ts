/*
  531 - String to Union
  ---------------------
  난이도: medium · 태그: union, string · 출제: Andrey Krasovsky (@bre30kra69cs)

  ### 문제

  문자열 인수를 입력받는 String to Union 유형을 구현하세요.
  출력은 입력 문자열의 Union type이어야 합니다.

  예시:

  ```ts
  type Test = "123"
  type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type StringToUnion<T extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/531/solutions
*/
