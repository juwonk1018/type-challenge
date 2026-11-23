/*
  2946 - ObjectEntries
  --------------------
  난이도: medium · 태그: object · 출제: jiangshan (@jiangshanmeta)

  ### 문제

  Implement the type version of ```Object.entries```

  For example 

  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/02946-medium-objectentries/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type ObjectEntries<T> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]
type PartialModelEntries = ['name', string | undefined] | ['age', number | undefined] | ['locations', string[] | null | undefined]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, PartialModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/2946/solutions
*/
