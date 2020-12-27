import { createCardanoCli } from './CardanoCli'
import { createCardanoNodeCli } from './cardano-node/CardanoNodeCli'
import { Environment } from './Environment'

export interface BinaryVersions {
  cardanoCli: string,
  cardanoNode: string
}

export interface Orchestrator {
  binaryVersions: () => Promise<BinaryVersions>
}

export function createOrchestrator (environment: Environment): Orchestrator {
  const cardanoCli = createCardanoCli(environment.CARDANO_CLI_PATH)
  return {
    binaryVersions: async () => {
      return {
        cardanoCli: await cardanoCli.getVersion(),
        cardanoNode: await createCardanoNodeCli(environment.CARDANO_NODE_PATH).getVersion()
      }
    }
  }
}
