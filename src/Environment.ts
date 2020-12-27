import envalid, { makeValidator } from 'envalid'
import fs from 'fs'

export interface Environment {
  CARDANO_CLI_PATH: string;
  CARDANO_NODE_PATH: string;
}

const existingFileValidator = makeValidator((filePath: string) => {
  if (fs.existsSync(filePath)) {
    return filePath
  }
  throw new Error(`${filePath} not found`)
})

export const parseEnvironment = (): Environment => {
  return envalid.cleanEnv(process.env, {
    CARDANO_CLI_PATH: existingFileValidator(),
    CARDANO_NODE_PATH: existingFileValidator()
  })
}
