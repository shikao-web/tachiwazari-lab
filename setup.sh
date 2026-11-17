#!/bin/bash
set -e
echo "setup began ..."

# 1. .env.local の作成
if [ ! -f .env.local ] && [ ! -f .env ]; then
  if [ -f .env.example ]; then
    cp .env.example .env.local
    echo "created '.env.local' from '.env.example'"
  else
    echo "'.env.example' not found so it skipped."
  fi
else
  echo "'.env.local' or '.env' found."
fi

# 2. パッケージのインストール
echo "[processing] npm install ..."
npm install

echo "[Success] finished setup"
