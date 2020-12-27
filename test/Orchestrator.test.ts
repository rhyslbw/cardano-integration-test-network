import path from 'path'
import { createOrchestrator, Orchestrator } from '@src/Orchestrator'

describe('Orchestrator', () => {
  let orchestrator: Orchestrator

  beforeAll(() => {
    orchestrator = createOrchestrator({
      CARDANO_CLI_PATH: process.env.CARDANO_CLI_PATH || path.resolve(__dirname, '..', 'bin', 'cardano-cli'),
      CARDANO_NODE_PATH: process.env.CARDANO_NODE_PATH || path.resolve(__dirname, '..', 'bin', 'cardano-node')
    })
  })

  describe('binaryVersions', () => {
    it('returns the cardano software versions', async () => {
      const versions = await orchestrator.binaryVersions()
      expect(versions).toMatchSnapshot()
    })
  })
})
