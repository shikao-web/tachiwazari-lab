# Project Name

Next.js (App Router) ベースのWebアプリケーションテンプレートです。

## 技術スタック
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Bootstrap

---

## 新規プロジェクト開始時のセットアップ手順

1. **リポジトリのクローン / テンプレートから作成**
   ```bash
   git clone <repository-url> my-new-project
   cd my-new-project
   ```

2. **セットアップ**
   ```bash
   bash setup.sh
   ```

3. **環境変数の設定**
   `.env.example` をコピーして `.env.local` を作成し、実際のAPI URLやキーを設定します。
   ```bash
   cp .env.example .env.local
   ```

4. **開発サーバーの起動**
   ```bash
   npm run dev
   ```
   ブラウザで `http://localhost:3000` にアクセスして確認します。

---

## ディレクトリ構成と配置ルール

```text
(project-root)/
├── app/            # ルーティング（URLごとの画面・Server Actions・Route Handlers）
├── components/     # 複数ページで使い回すUI部品（Button, Headerなど）
└── lib/            # 外部API通信（Pythonサーバー連携など）や共通ロジック
```

### 実装時のルール
* **外部API通信（Python連携など）:**
  * 通信処理は `lib/` 配下に接続先ごとのファイル（例: `mainApi.ts`, `aiApi.ts`）を作成して記述します。
  * APIキーの漏洩を防ぐため、サーバー側専用ファイルの先頭には `import 'server-only';` を記述してください。
* **コンポーネントの配置:**
  * 全体で使い回す部品は `components/` に置きます。
  * 特定のページでしか使わない部品は `app/<ページ名>/_components/` に配置します。
