import execa from 'execa'

export interface CardanoCli {
  getVersion(): Promise<string>
}

export function createCardanoCli (cardanoCliPath: string): CardanoCli {
  return {
    async getVersion (): Promise<string> {
      const parameters = ['--version']
      const { stdout, failed, stderr } = await execa(cardanoCliPath, parameters)
      if (failed) {
        throw new Error(stderr.toString())
      }
      return stdout
    }
  }
}
