#!/usr/bin/env bash

set -euo pipefail

BIN_DIR=../bin

cabal update
cd cardano-node
cabal install cardano-node \
  --install-method=copy \
  --installdir=${BIN_DIR} \
  --overwrite-policy=always \
  -f -systemd
cabal install cardano-cli \
  --install-method=copy \
  --installdir=${BIN_DIR} \
  --overwrite-policy=always \
  -f -systemd
