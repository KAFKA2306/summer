ぎ# Summer Heat Mitigation Guide | 夏季熱対策ガイド

科学的な形式で夏の暑さ対策情報を整理したウェブサイト

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://incredible-strudel-4d0778.netlify.app)

## 📝 概要

夏の暑さ対策について、学術論文のような形式で情報を整理・表示するウェブサイトです。UV遮蔽、体温調節、冷却システムなどの対策を科学的な説明とともに紹介しています。

### 特徴

- **学術論文風の構成** - Abstract、Methodology、Results等の形式
- **数式表示** - MathJaxを使用した数学的表現
- **データ可視化** - Chart.jsによるグラフ表示
- **製品推奨** - 各カテゴリで1つずつ製品を紹介

## 🎨 デザイン・技術要素

### 📐 学術的スタイル
- **論文構成** - Abstract、Methodology、Results、Referencesセクション
- **数式表示** - MathJaxによるLaTeX形式の数学的表現
- **学術的配色** - 紺・水色系の落ち着いた色調
- **専門的フォント** - Inter（本文）、JetBrains Mono（コード・数式）

### 📊 可視化機能
- **Chart.js** - 冷却効果の時間変化グラフ
- **レーダーチャート** - 製品性能の多次元比較
- **統計データ表示** - 信頼度や効果測定値の視覚化

### 🛠️ 技術実装
- **MathJax** - 数学的な式・方程式の美しい表示
- **レスポンシブデザイン** - モバイル・デスクトップ対応
- **スムーズアニメーション** - スクロール連動の要素表示

## 📁 ファイル構成

```
frontend/
├── index.html          # メインページ（学術論文風デザイン）
├── style.css           # スタイルシート（学術的配色・フォント）
├── script.js           # インタラクティブ機能（Chart.js・MathJax）
└── README.md           # プロジェクト説明
```

## 📖 内容構成

### 1. Abstract（要旨）
研究の背景・目的・結果の要約（学術論文風）

### 2. Methodology（手法）
- 物理化学的分析の説明
- 生理学的評価の紹介  
- 統計学的手法の解説

### 3. UV Blocking Technology（UV遮蔽技術）
- UV遮蔽の科学的メカニズム説明
- 数式による透過率の表現
- おすすめ製品の紹介

### 4. Thermoregulation Science（体温調節科学）
- 体温調節の生理学的説明
- 発汗冷却の数式表現
- おすすめ製品の紹介

### 5. Cooling Systems Engineering（冷却システム工学）
- ペルチェ効果の原理説明
- 熱電変換の数式表現
- おすすめ製品の紹介

### 6. Results and Statistical Analysis（結果・統計解析）
- 効果測定結果の表示
- 製品性能比較グラフ
- 統計データの可視化

### 7. References（参考文献）
参考情報・出典の一覧

## 🚀 デプロイ・アクセス

### ライブサイト
- **URL**: https://incredible-strudel-4d0778.netlify.app
- **ホスティング**: Netlify
- **レスポンシブ対応**: PC・タブレット・スマートフォン

### ローカル実行
```bash
# ファイルをダウンロード後
# ブラウザで index.html を開く
open index.html  # macOS
start index.html # Windows
```

## 🔧 技術仕様

### フロントエンド技術
- **HTML5**: セマンティックマークアップ
- **CSS3**: Grid・Flexbox、カスタムプロパティ
- **JavaScript**: ES6+、DOM操作

### 外部ライブラリ
- **MathJax**: 数式表示ライブラリ
- **Chart.js**: グラフ描画ライブラリ
- **Google Fonts**: Webフォント（Inter・JetBrains Mono）

### 機能
- **数式レンダリング**: LaTeX記法での数学表現
- **データ可視化**: 冷却効果・性能比較のグラフ
- **スクロールアニメーション**: 要素の段階的表示

## 🏆 推奨製品

サイト内で紹介している製品：

### UV遮蔽
**サンバリア100 完全遮光日傘**
- 完全遮光をうたう日傘ブランド
- 4層構造の特殊生地使用

### 体温調節  
**アネッサ パーフェクトUV スキンケアミルク NA**
- 資生堂の高SPF日焼け止め
- 汗・水に強い耐水性

### 冷却システム
**エレコム ペルチェ冷却ハンディファン**
- 冷却プレート付きハンディファン
- ペルチェ素子による冷却機能

**OIGAE 冷感ジェルマット**
- 接触冷感ジェルマット
- 高い冷感効果をうたう

## 🔧 カスタマイズ

### 配色変更
```css
/* style.css - 配色カスタマイズ */
:root {
    --primary-color: #1a237e;    /* メインカラー */
    --accent-color: #00acc1;     /* アクセントカラー */
    --equation-bg: #f8f9ff;      /* 数式背景色 */
}
```

### 数式追加例
```javascript
// MathJax記法での数式追加
// 例：効率計算式
$$\eta = \frac{ZT}{2+ZT}$$
```

### グラフ追加例
```javascript
// Chart.js使用例
new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'データ名',
            data: [データ配列]
        }]
    }
});
```

## 📄 ライセンス・免責事項

**MIT License** - 自由に使用・修正・配布可能

**免責事項**: 本サイトの情報は参考目的です。個人の体質や使用環境により効果は異なります。製品選択時は各自でご判断ください。