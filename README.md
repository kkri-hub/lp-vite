# lp-vite

Viteをベースにしたランディングページ。`docs/` ディレクトリをGitHub Pagesで公開しています。

## プロジェクト構成

- **src/** - ソースファイル（開発時に使用）
- **docs/** - ビルド出力（GitHub Pages で公開）
- **public/** - 静的アセット

## 更新手順

### 1. ローカルで編集・開発
```bash
npm run dev
```
`src/` 内のファイルを編集して動作確認します。

### 2. ビルド（src/ → docs/ に出力）
```bash
npm run build
```

### 3. Git へプッシュ
```bash
git add .
git commit -m "update: 説明"
git push origin main
```

### 4. Pages 反映
GitHub Actions で自動的に `docs/` が公開されます。  
設定確認: **Settings → Pages → Source: main / docs** を指定

> **直編集も可能**: `docs/` 内のファイルを直接編集 → push で即座に反映されます。

## コマンド一覧

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | ビルド（src → docs） |
| `npm run preview` | ビルド結果をプレビュー |
