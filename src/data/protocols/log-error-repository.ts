export interface LogErrorRepository {
  logError: (stack: string) => Promise<any>
}
