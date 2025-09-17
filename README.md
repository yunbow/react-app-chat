# チャットアプリ (TypeScript + React + Storybook)

React 18とTypeScript、Atomic Designパターンで構築されたチャットアプリケーションです。
（疑似的に応答して通信は行いません。）

## デモプレイ
https://yunbow.github.io/react-app-chat/demo/

## 主要機能

### チャット機能
- メッセージの送信・表示
- 自動返信機能（デモ用）
- リアルタイムな時刻表示
- 自動スクロール機能
- レスポンシブデザイン

### 操作方法
- **Enterキー**: メッセージを送信
- **送信ボタン**: メッセージを送信
- **自動返信**: 1秒後にランダムな返信メッセージを表示

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── components/
│   ├── atoms/          # 基本コンポーネント
│   │   ├── Button/     # 送信ボタン
│   │   ├── Input/      # 入力フィールド
│   │   └── Text/       # テキスト表示
│   ├── molecules/      # 機能単位コンポーネント
│   │   ├── Message/    # メッセージ項目
│   │   └── InputArea/  # 入力エリア
│   └── organisms/      # 画面領域コンポーネント
│       ├── ChatHeader/ # ヘッダー
│       ├── MessageList/# メッセージ一覧
│       ├── ChatContainer/ # コンテナ
│       └── ChatApp/    # アプリ全体
├── stories/            # Storybook用ストーリー
├── types/              # TypeScript型定義
├── hooks/              # カスタムフック
├── utils/              # 共通処理
├── Config.ts           # 設定値
├── App.tsx             # メインアプリ
└── main.tsx            # エントリーポイント
```

## Atomic Design構成

### Atoms（基本コンポーネント）
- `Button` - 送信ボタン
- `Input` - テキスト入力
- `Text` - テキスト表示（content/time/title）

### Molecules（機能単位）
- `Message` - 個別メッセージ項目
- `InputArea` - 入力フォーム（input + button）

### Organisms（画面領域）
- `ChatHeader` - ヘッダー部分
- `MessageList` - メッセージ一覧表示
- `ChatContainer` - コンテナ
- `ChatApp` - アプリケーション全体

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License
