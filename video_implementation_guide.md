# はりま産学交流会 - AI生成動画の挿入ガイド

## 概要

このガイドでは、はりま産学交流会のウェブサイトにAI生成動画を挿入する方法を説明します。

## ステップ1: AI動画生成ツールの選択

### 推奨ツール

#### 1. **Runway** (https://runwayml.com/)
- **メリット**: 高品質な動画生成、無料プランあり（125クレジット）
- **用途**: プロフェッショナルな組織紹介動画
- **難易度**: 中級

#### 2. **invideo AI** (https://invideo.io/)
- **メリット**: 簡単操作、日本語対応、無料プラン充実
- **用途**: ソーシャルメディア向け短編動画
- **難易度**: 初級

#### 3. **Synthesia** (https://www.synthesia.io/)
- **メリット**: アバターによる説明動画、多言語対応
- **用途**: 組織説明、事業紹介
- **難易度**: 初級

## ステップ2: 動画コンセプトの設計

### はりま産学交流会向けプロンプト例

#### シーン1: オープニング（5秒）
```
Aerial view of Himeji Castle at sunrise, transitioning to modern research facilities and factories in Harima region, professional cinematic style, blue and red color scheme
```

#### シーン2: 産学交流の様子（10秒）
```
Diverse group of university students and industry professionals collaborating in a modern conference room, discussing innovative projects, bright professional atmosphere, blue and red accent colors
```

#### シーン3: 活動紹介（10秒）
```
Montage of business presentations, factory visits, networking events, and project contests in Harima region, dynamic and engaging, professional color grading with blue and red tones
```

#### シーン4: クロージング（5秒）
```
Logo animation of Harima Industry-Academic Association with blue and red colors, clean professional background, fade to contact information
```

## ステップ3: 動画の生成

### Runwayを使用する場合

1. **アカウント作成**
   - https://runwayml.com/ にアクセス
   - 無料アカウントを作成（125クレジット付与）

2. **プロジェクト作成**
   - "Text to Video" または "Gen-3 Alpha" を選択
   - 上記のプロンプトを入力

3. **設定調整**
   - 解像度: 1080p推奨
   - アスペクト比: 16:9（ウェブサイト用）
   - 長さ: 5-10秒/シーン

4. **生成とダウンロード**
   - 各シーンを個別に生成
   - MP4形式でダウンロード

### invideo AIを使用する場合

1. **アカウント作成**
   - https://invideo.io/ にアクセス
   - 無料アカウントを作成

2. **プロンプト入力**
   - 「Create a 30-second video about Harima Industry-Academic Association...」
   - 日本語でも可能

3. **カスタマイズ**
   - ロゴを追加
   - BGM選択
   - テキストオーバーレイ追加

4. **エクスポート**
   - 1080p MP4形式でエクスポート

## ステップ4: ウェブサイトへの動画挿入

### 方法1: HTML5 Videoタグ（推奨）

動画ファイルをプロジェクトに追加し、HTMLで埋め込みます。

```html
<!-- index.htmlのヒーローセクションに追加 -->
<section class="hero">
    <video class="hero-video" autoplay muted loop playsinline>
        <source src="assets/videos/harima-intro.mp4" type="video/mp4">
        お使いのブラウザは動画タグをサポートしていません。
    </video>
    <div class="hero-overlay"></div>
    <div class="hero-content-wrapper">
        <!-- 既存のコンテンツ -->
    </div>
</section>
```

### 対応するCSS

```css
/* assets/css/styles.css に追加 */

.hero {
    position: relative;
    overflow: hidden;
}

.hero-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    z-index: 0;
    object-fit: cover;
}

/* 動画の上にオーバーレイを配置 */
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
        rgba(40, 74, 148, 0.75) 0%,
        rgba(184, 43, 44, 0.65) 30%,
        rgba(40, 74, 148, 0.75) 100%
    );
    z-index: 1;
}

/* コンテンツを最前面に */
.hero-content-wrapper {
    position: relative;
    z-index: 2;
}

/* モバイル対応 */
@media (max-width: 768px) {
    .hero-video {
        display: none; /* モバイルでは非表示にしてパフォーマンス向上 */
    }
}
```

### 方法2: YouTube埋め込み

動画をYouTubeにアップロードして埋め込む方法です。

```html
<section class="video-section">
    <div class="container">
        <h2 class="section-title section-title-center">はりま産学交流会について</h2>
        <div class="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen>
            </iframe>
        </div>
    </div>
</section>
```

### 対応するCSS

```css
.video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
    margin: 0 auto;
    border: 2px solid var(--primary-blue);
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

### 方法3: 専用の動画セクション

既存のvideo-sectionを活用します。

```html
<!-- index.htmlの適切な位置に追加 -->
<section class="video-section">
    <div class="container">
        <h2 class="section-title section-title-center">活動紹介動画</h2>
        <p class="lead-text">
            はりま産学交流会の活動をご紹介します。産業界と学術界の連携による、
            地域の発展と人材育成の取り組みをご覧ください。
        </p>
        <div class="video-container">
            <video controls poster="assets/images/video-thumbnail.jpg">
                <source src="assets/videos/harima-activities.mp4" type="video/mp4">
                お使いのブラウザは動画タグをサポートしていません。
            </video>
        </div>
        <div class="video-cta">
            <a href="pages/about.html" class="btn btn-primary">詳しく見る</a>
        </div>
    </div>
</section>
```

### 対応するCSS

```css
.video-container {
    max-width: 900px;
    margin: 0 auto 2rem;
    border: 2px solid var(--primary-blue);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(40, 74, 148, 0.15);
}

.video-container video {
    width: 100%;
    height: auto;
    display: block;
}

.video-container video:hover {
    cursor: pointer;
}
```

## ステップ5: 動画ファイルの最適化

### 推奨設定
- **解像度**: 1920x1080 (1080p)
- **フォーマット**: MP4 (H.264コーデック)
- **ビットレート**: 5-8 Mbps
- **フレームレート**: 30fps
- **ファイルサイズ**: 10MB以下（ウェブ用）

### 圧縮ツール
- **HandBrake** (無料): https://handbrake.fr/
- **FFmpeg** (コマンドライン):
  ```bash
  ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4
  ```

## ステップ6: ファイル配置

```
harima/
├── assets/
│   ├── videos/
│   │   ├── harima-intro.mp4        # ヒーロー背景動画
│   │   ├── harima-activities.mp4   # 活動紹介動画
│   │   └── video-thumbnail.jpg     # サムネイル画像
│   ├── css/
│   └── images/
└── index.html
```

## ステップ7: パフォーマンス最適化

### Lazy Loading

```html
<video loading="lazy" preload="metadata" ...>
```

### 代替画像の提供

```html
<video poster="assets/images/video-poster.jpg" ...>
```

### モバイル対応

```css
@media (max-width: 768px) {
    .hero-video {
        display: none;
    }
    
    .hero {
        background-image: url('../images/hero-bg.jpg');
    }
}
```

## 実装チェックリスト

- [ ] AI動画生成ツールでアカウント作成
- [ ] プロンプトを使用して動画を生成
- [ ] 動画を最適化（圧縮、フォーマット変換）
- [ ] `assets/videos/` ディレクトリを作成
- [ ] 動画ファイルをプロジェクトに配置
- [ ] HTMLに動画タグを追加
- [ ] CSSでスタイリング
- [ ] モバイル対応を確認
- [ ] ページ読み込み速度をテスト
- [ ] 各ブラウザで動作確認

## トラブルシューティング

### 動画が再生されない
- ファイルパスを確認
- ブラウザのコンソールでエラーをチェック
- 動画フォーマットがサポートされているか確認

### ファイルサイズが大きすぎる
- HandBrakeやFFmpegで圧縮
- 解像度を下げる（720pなど）
- 動画の長さを短くする

### モバイルで自動再生されない
- `playsinline` 属性を追加
- `muted` 属性を追加（音声なしで自動再生）

## 参考リンク

- [Runway](https://runwayml.com/)
- [invideo AI](https://invideo.io/)
- [Synthesia](https://www.synthesia.io/)
- [HandBrake](https://handbrake.fr/)
- [MDN Web Docs - Video element](https://developer.mozilla.org/ja/docs/Web/HTML/Element/video)

