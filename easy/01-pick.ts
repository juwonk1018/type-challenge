/*
  4 - Pick
  --------
  난이도: easy · 태그: union, built-in · 출제: Anthony Fu (@antfu)

  ### 문제

  `T`에서 `K` 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Pick<T, K>`을 이를 사용하지 않고 구현하세요.

  예시:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

/*
  놓친 것
  - K에 제약이 없었음. 선언부에 `K extends keyof T`를 걸어야 'invalid'를 넘긴 줄에서 오류가 남
  - `[P in K extends keyof T ? K : never]`는 제약이 아니라 필터라서, 오류 없이 걸러지기만 함
  - `// @ts-expect-error`는 "다음 줄이 오류여야 통과"라는 뜻
*/
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">,
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/4/solutions
*/
