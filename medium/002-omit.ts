/*
  3 - Omit
  --------
  난이도: medium · 태그: union, built-in · 출제: Anthony Fu (@antfu)

  ### 문제

  `T`에서 `K` 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Omit<T, K>`를 이를 사용하지 않고 구현하세요.

  예시:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type MyOmit<T, K> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
  Expect<Equal<Expected3, MyOmit<Todo1, 'description' | 'completed'>>>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

interface Expected3 {
  readonly title: string
}

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/3/solutions
*/
