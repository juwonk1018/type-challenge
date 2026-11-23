import path from 'node:path'
import process from 'node:process'
import ts from 'typescript'

interface ProblemResult {
  relativePath: string
  diagnostics: readonly ts.Diagnostic[]
}

const PROJECT_ROOT: string = path.resolve(import.meta.dirname, '..')
const TSCONFIG_FILE_NAME = 'tsconfig.json'
const PROBLEM_DIRECTORIES: readonly string[] = ['easy', 'medium']
const SOLVED_MARK = '✅'
const UNSOLVED_MARK = '⬜'

const formatHost: ts.FormatDiagnosticsHost = {
  getCanonicalFileName: (fileName: string): string => fileName,
  getCurrentDirectory: (): string => PROJECT_ROOT,
  getNewLine: (): string => '\n',
}

function createProjectProgram(): ts.Program {
  const configPath = path.join(PROJECT_ROOT, TSCONFIG_FILE_NAME)
  const configFile = ts.readConfigFile(configPath, ts.sys.readFile)
  if (configFile.error) {
    throw new Error(ts.formatDiagnostic(configFile.error, formatHost))
  }
  const parsedConfig = ts.parseJsonConfigFileContent(configFile.config, ts.sys, PROJECT_ROOT)
  return ts.createProgram(parsedConfig.fileNames, parsedConfig.options)
}

function toRelativePath(fileName: string): string {
  return path.relative(PROJECT_ROOT, fileName).split(path.sep).join('/')
}

function isProblemFile(relativePath: string): boolean {
  return PROBLEM_DIRECTORIES.some((directory: string): boolean => relativePath.startsWith(`${directory}/`))
}

function collectProblemResults(program: ts.Program, pathFilter: string | undefined): ProblemResult[] {
  return program
    .getSourceFiles()
    .map((sourceFile: ts.SourceFile): ProblemResult => ({
      relativePath: toRelativePath(sourceFile.fileName),
      diagnostics: ts.getPreEmitDiagnostics(program, sourceFile),
    }))
    .filter((result: ProblemResult): boolean => isProblemFile(result.relativePath))
    .filter((result: ProblemResult): boolean => pathFilter === undefined || result.relativePath.includes(pathFilter))
    .sort((left: ProblemResult, right: ProblemResult): number => left.relativePath.localeCompare(right.relativePath))
}

function isSolved(result: ProblemResult): boolean {
  return result.diagnostics.length === 0
}

function formatStatusLine(result: ProblemResult): string {
  if (isSolved(result)) {
    return `${SOLVED_MARK} ${result.relativePath}`
  }
  return `${UNSOLVED_MARK} ${result.relativePath} (오류 ${result.diagnostics.length}개)`
}

function formatDirectorySummaries(results: readonly ProblemResult[]): string[] {
  return PROBLEM_DIRECTORIES.flatMap((directory: string): string[] => {
    const directoryResults = results.filter((result: ProblemResult): boolean => result.relativePath.startsWith(`${directory}/`))
    if (directoryResults.length === 0) {
      return []
    }
    const solvedCount = directoryResults.filter(isSolved).length
    return [`${directory}: ${solvedCount}/${directoryResults.length}`]
  })
}

function printErrorDetails(results: readonly ProblemResult[]): void {
  const diagnostics = results.flatMap((result: ProblemResult): readonly ts.Diagnostic[] => result.diagnostics)
  if (diagnostics.length === 0) {
    return
  }
  console.log(`\n${ts.formatDiagnosticsWithColorAndContext(diagnostics, formatHost)}`)
}

function main(): void {
  const pathFilter: string | undefined = process.argv[2]
  const results = collectProblemResults(createProjectProgram(), pathFilter)
  if (results.length === 0) {
    console.error(`조건에 맞는 문제 파일이 없습니다: ${pathFilter ?? '(전체)'}`)
    process.exitCode = 1
    return
  }

  console.log(results.map(formatStatusLine).join('\n'))
  if (pathFilter !== undefined) {
    printErrorDetails(results)
  }
  console.log(`\n통과 ${formatDirectorySummaries(results).join(' · ')}`)
}

main()
