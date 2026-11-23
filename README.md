# type-challenge

[type-challenges](https://github.com/type-challenges/type-challenges)의 warm-up·easy·medium 118문제를 로컬에서 푸는 저장소입니다.

## 푸는 방법

1. `npm install`로 의존성을 설치합니다.
2. `easy/00-hello-world.ts`부터 순서대로 파일을 엽니다.
3. `여기에 코드 작성` 아래의 타입을 구현합니다. `테스트 케이스` 아래는 고치지 않습니다.
4. 파일에 타입 오류가 하나도 없으면 통과입니다. VS Code에서는 빨간 줄이 모두 사라지면 됩니다.

문제를 풀며 놓친 점은 풀이 바로 위에 주석으로 짧게 적어 둡니다. 예: [easy/01-pick.ts](easy/01-pick.ts)

VS Code가 "워크스페이스 TypeScript 버전을 사용할지" 물으면 허용해 주세요. 그래야 에디터와 `npm run check`가 같은 TypeScript(5.x)로 검사합니다.

## 진행 현황 확인

| 명령                       | 하는 일                                                            |
| -------------------------- | ------------------------------------------------------------------ |
| `npm run check`            | 전체 문제의 통과 여부와 폴더별 통과 수를 출력합니다                |
| `npm run check -- easy/01` | 경로에 `easy/01`이 들어간 문제만 검사하고 오류 내용까지 출력합니다 |

## 코드 서식

Prettier 기본 설정을 씁니다. VS Code에 Prettier 확장을 설치하면 저장할 때 자동으로 정리됩니다.

| 명령                   | 하는 일                       |
| ---------------------- | ----------------------------- |
| `npm run format`       | 전체 파일의 서식을 정리합니다 |
| `npm run format:check` | 서식이 맞는지 검사만 합니다   |

## 문제 목록

- 파일 이름 앞의 숫자가 푸는 순서입니다. 원본 문제 번호는 각 파일 맨 위 주석과 아래 표에 있습니다.
- easy는 원본 번호 순서(오래된 순)이고, warm-up 문제인 Hello World를 맨 앞(00)에 뒀습니다.
- medium은 풀이 제출 수가 많은 순서입니다. 제출 수가 같으면 원본 번호가 작은 것이 먼저입니다.
- 풀이 제출 수는 원본 저장소에서 해당 문제 번호 라벨이 붙은 이슈 수이며, 2026-11-23에 조회한 값입니다.
- 문제 설명은 한국어 번역이 있는 47문제만 한국어이고, 나머지 71문제는 영어 원문입니다.

### easy (14문제)

| 순서 | 문제                                          | 원본 번호 | 풀이 제출 수 |
| ---- | --------------------------------------------- | --------- | ------------ |
| 00   | [Hello World](easy/00-hello-world.ts)         | 13        | 1618         |
| 01   | [Pick](easy/01-pick.ts)                       | 4         | 1681         |
| 02   | [Readonly](easy/02-readonly.ts)               | 7         | 1513         |
| 03   | [Tuple to Object](easy/03-tuple-to-object.ts) | 11        | 1148         |
| 04   | [First of Array](easy/04-first-of-array.ts)   | 14        | 1277         |
| 05   | [Length of Tuple](easy/05-length-of-tuple.ts) | 18        | 1037         |
| 06   | [Exclude](easy/06-exclude.ts)                 | 43        | 818          |
| 07   | [Awaited](easy/07-awaited.ts)                 | 189       | 969          |
| 08   | [If](easy/08-if.ts)                           | 268       | 951          |
| 09   | [Concat](easy/09-concat.ts)                   | 533       | 890          |
| 10   | [Includes](easy/10-includes.ts)               | 898       | 671          |
| 11   | [Push](easy/11-push.ts)                       | 3057      | 722          |
| 12   | [Unshift](easy/12-unshift.ts)                 | 3060      | 651          |
| 13   | [Parameters](easy/13-parameters.ts)           | 3312      | 655          |

### medium (104문제)

| 순서 | 문제                                                                           | 원본 번호 | 풀이 제출 수 |
| ---- | ------------------------------------------------------------------------------ | --------- | ------------ |
| 001  | [Get Return Type](medium/001-get-return-type.ts)                               | 2         | 852          |
| 002  | [Omit](medium/002-omit.ts)                                                     | 3         | 783          |
| 003  | [Readonly 2](medium/003-readonly-2.ts)                                         | 8         | 682          |
| 004  | [Tuple to Union](medium/004-tuple-to-union.ts)                                 | 10        | 601          |
| 005  | [Last of Array](medium/005-last-of-array.ts)                                   | 15        | 593          |
| 006  | [Deep Readonly](medium/006-deep-readonly.ts)                                   | 9         | 587          |
| 007  | [Pop](medium/007-pop.ts)                                                       | 16        | 543          |
| 008  | [Chainable Options](medium/008-chainable-options.ts)                           | 12        | 417          |
| 009  | [Trim](medium/009-trim.ts)                                                     | 108       | 394          |
| 010  | [Type Lookup](medium/010-type-lookup.ts)                                       | 62        | 377          |
| 011  | [Replace](medium/011-replace.ts)                                               | 116       | 356          |
| 012  | [ReplaceAll](medium/012-replaceall.ts)                                         | 119       | 355          |
| 013  | [Flatten](medium/013-flatten.ts)                                               | 459       | 349          |
| 014  | [Append Argument](medium/014-append-argument.ts)                               | 191       | 348          |
| 015  | [Trim Left](medium/015-trim-left.ts)                                           | 106       | 345          |
| 016  | [Capitalize](medium/016-capitalize.ts)                                         | 110       | 345          |
| 017  | [Length of String](medium/017-length-of-string.ts)                             | 298       | 336          |
| 018  | [Merge](medium/018-merge.ts)                                                   | 599       | 329          |
| 019  | [String to Union](medium/019-string-to-union.ts)                               | 531       | 310          |
| 020  | [Promise.all](medium/020-promise-all.ts)                                       | 20        | 309          |
| 021  | [Diff](medium/021-diff.ts)                                                     | 645       | 302          |
| 022  | [Append to object](medium/022-append-to-object.ts)                             | 527       | 272          |
| 023  | [KebabCase](medium/023-kebabcase.ts)                                           | 612       | 271          |
| 024  | [Absolute](medium/024-absolute.ts)                                             | 529       | 257          |
| 025  | [AnyOf](medium/025-anyof.ts)                                                   | 949       | 249          |
| 026  | [IsNever](medium/026-isnever.ts)                                               | 1042      | 238          |
| 027  | [Drop Char](medium/027-drop-char.ts)                                           | 2070      | 221          |
| 028  | [Percentage Parser](medium/028-percentage-parser.ts)                           | 1978      | 212          |
| 029  | [Reverse](medium/029-reverse.ts)                                               | 3192      | 191          |
| 030  | [PickByType](medium/030-pickbytype.ts)                                         | 2595      | 182          |
| 031  | [IsUnion](medium/031-isunion.ts)                                               | 1097      | 176          |
| 032  | [ReplaceKeys](medium/032-replacekeys.ts)                                       | 1130      | 174          |
| 033  | [Permutation](medium/033-permutation.ts)                                       | 296       | 170          |
| 034  | [StartsWith](medium/034-startswith.ts)                                         | 2688      | 169          |
| 035  | [PartialByKeys](medium/035-partialbykeys.ts)                                   | 2757      | 169          |
| 036  | [ObjectEntries](medium/036-objectentries.ts)                                   | 2946      | 168          |
| 037  | [OmitByType](medium/037-omitbytype.ts)                                         | 2852      | 166          |
| 038  | [BEM style string](medium/038-bem-style-string.ts)                             | 3326      | 164          |
| 039  | [Tuple to Nested Object](medium/039-tuple-to-nested-object.ts)                 | 3188      | 163          |
| 040  | [Flip Arguments](medium/040-flip-arguments.ts)                                 | 3196      | 160          |
| 041  | [Greater Than](medium/041-greater-than.ts)                                     | 4425      | 157          |
| 042  | [EndsWith](medium/042-endswith.ts)                                             | 2693      | 156          |
| 043  | [Remove Index Signature](medium/043-remove-index-signature.ts)                 | 1367      | 154          |
| 044  | [Shift](medium/044-shift.ts)                                                   | 3062      | 151          |
| 045  | [RequiredByKeys](medium/045-requiredbykeys.ts)                                 | 2759      | 148          |
| 046  | [Mutable](medium/046-mutable.ts)                                               | 2793      | 145          |
| 047  | [MinusOne](medium/047-minusone.ts)                                             | 2257      | 144          |
| 048  | [Without](medium/048-without.ts)                                               | 5117      | 142          |
| 049  | [Join](medium/049-join.ts)                                                     | 5310      | 139          |
| 050  | [Fill](medium/050-fill.ts)                                                     | 4518      | 136          |
| 051  | [Zip](medium/051-zip.ts)                                                       | 4471      | 131          |
| 052  | [Chunk](medium/052-chunk.ts)                                                   | 4499      | 131          |
| 053  | [FlattenDepth](medium/053-flattendepth.ts)                                     | 3243      | 128          |
| 054  | [IndexOf](medium/054-indexof.ts)                                               | 5153      | 126          |
| 055  | [Flip](medium/055-flip.ts)                                                     | 4179      | 125          |
| 056  | [Trunc](medium/056-trunc.ts)                                                   | 5140      | 123          |
| 057  | [Fibonacci Sequence](medium/057-fibonacci-sequence.ts)                         | 4182      | 120          |
| 058  | [Number Range](medium/058-number-range.ts)                                     | 8640      | 119          |
| 059  | [Trim Right](medium/059-trim-right.ts)                                         | 4803      | 115          |
| 060  | [Unique](medium/060-unique.ts)                                                 | 5360      | 115          |
| 061  | [LastIndexOf](medium/061-lastindexof.ts)                                       | 5317      | 112          |
| 062  | [IsTuple](medium/062-istuple.ts)                                               | 4484      | 101          |
| 063  | [InorderTraversal](medium/063-inordertraversal.ts)                             | 3376      | 87           |
| 064  | [MapTypes](medium/064-maptypes.ts)                                             | 5821      | 86           |
| 065  | [AllCombinations](medium/065-allcombinations.ts)                               | 4260      | 79           |
| 066  | [Construct Tuple](medium/066-construct-tuple.ts)                               | 7544      | 77           |
| 067  | [FirstUniqueCharIndex](medium/067-firstuniquecharindex.ts)                     | 9286      | 74           |
| 068  | [Filter](medium/068-filter.ts)                                                 | 18220     | 69           |
| 069  | [GetMiddleElement](medium/069-getmiddleelement.ts)                             | 9896      | 65           |
| 070  | [Subsequence](medium/070-subsequence.ts)                                       | 8987      | 63           |
| 071  | [All](medium/071-all.ts)                                                       | 18142     | 63           |
| 072  | [Appear only once](medium/072-appear-only-once.ts)                             | 9898      | 59           |
| 073  | [ToPrimitive](medium/073-toprimitive.ts)                                       | 16259     | 53           |
| 074  | [Combination](medium/074-combination.ts)                                       | 8767      | 51           |
| 075  | [Integer](medium/075-integer.ts)                                               | 10969     | 50           |
| 076  | [Replace First](medium/076-replace-first.ts)                                   | 25170     | 41           |
| 077  | [DeepMutable](medium/077-deepmutable.ts)                                       | 17973     | 40           |
| 078  | [Combination key type](medium/078-combination-key-type.ts)                     | 21106     | 40           |
| 079  | [CheckRepeatedChars](medium/079-checkrepeatedchars.ts)                         | 9142      | 38           |
| 080  | [Count Element Number To Object](medium/080-count-element-number-to-object.ts) | 9989      | 37           |
| 081  | [Public Type](medium/081-public-type.ts)                                       | 28333     | 37           |
| 082  | [Parse URL Params](medium/082-parse-url-params.ts)                             | 9616      | 35           |
| 083  | [FindAll](medium/083-findall.ts)                                               | 21104     | 35           |
| 084  | [CheckRepeatedTuple](medium/084-checkrepeatedtuple.ts)                         | 27958     | 35           |
| 085  | [JSON Schema to TypeScript](medium/085-json-schema-to-typescript.ts)           | 26401     | 34           |
| 086  | [Deep Omit](medium/086-deep-omit.ts)                                           | 29785     | 33           |
| 087  | [ExtractToObject](medium/087-extracttoobject.ts)                               | 29650     | 32           |
| 088  | [MergeAll](medium/088-mergeall.ts)                                             | 27932     | 31           |
| 089  | [IsOdd](medium/089-isodd.ts)                                                   | 30301     | 29           |
| 090  | [Transpose](medium/090-transpose.ts)                                           | 25270     | 28           |
| 091  | [CartesianProduct](medium/091-cartesianproduct.ts)                             | 27862     | 23           |
| 092  | [Triangular number](medium/092-triangular-number.ts)                           | 27152     | 21           |
| 093  | [Square](medium/093-square.ts)                                                 | 27133     | 20           |
| 094  | [Permutations of Tuple](medium/094-permutations-of-tuple.ts)                   | 21220     | 19           |
| 095  | [Pascal's triangle](medium/095-pascals-triangle.ts)                            | 30958     | 17           |
| 096  | [Compare Array Length](medium/096-compare-array-length.ts)                     | 34007     | 16           |
| 097  | [Trace](medium/097-trace.ts)                                                   | 35191     | 14           |
| 098  | [Tower of hanoi](medium/098-tower-of-hanoi.ts)                                 | 30430     | 12           |
| 099  | [IsFixedStringLiteralType](medium/099-isfixedstringliteraltype.ts)             | 30970     | 11           |
| 100  | [MyUppercase](medium/100-myuppercase.ts)                                       | 35991     | 10           |
| 101  | [IsAlphabet](medium/101-isalphabet.ts)                                         | 35252     | 8            |
| 102  | [Defined Partial Record](medium/102-defined-partial-record.ts)                 | 34857     | 5            |
| 103  | [Longest Common Prefix](medium/103-longest-common-prefix.ts)                   | 35045     | 5            |
| 104  | [IsEqual](medium/104-isequal.ts)                                               | 19749     | 1            |
