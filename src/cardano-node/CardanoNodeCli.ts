import execa from 'execa'

export interface CardanoNodeCli {
  getVersion(): Promise<string>
}

export function createCardanoNodeCli (cardanoNodePath: string): CardanoNodeCli {
  return {
    async getVersion (): Promise<string> {
      const parameters = ['--version']
      const { stdout, failed, stderr } = await execa(cardanoNodePath, parameters)
      if (failed) {
        throw new Error(stderr.toString())
      }
      return stdout
    }
  }
}
