/*
  62 - Type Lookup
  ----------------
  난이도: medium · 태그: union, map · 출제: Anthony Fu (@antfu)

  ### 문제

  때때로 유니온 타입의 특정 속성을 기준으로 조회할 수도 있습니다.

  이 챌린지에서는 유니온 타입 `Cat | Dog`에서 공통으로 사용하는 `type` 필드를 기준으로 해당하는 타입을 얻고자 합니다. 다시 말해서, 다음 예시에서는 `LookUp<Cat | Dog, 'dog'>`으로 `Dog` 타입을, `LookUp<Cat | Dog, 'cat'>`으로 `Cat` 타입을 얻을 수 있습니다.

  ```ts
  interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
  }

  interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
  }

  type MyDogType = LookUp<Cat | Dog, 'dog'> // 기대되는 결과는 `Dog`입니다.
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type LookUp<U, T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/62/solutions
*/
