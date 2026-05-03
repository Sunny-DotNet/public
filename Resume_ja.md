# Sunny（深圳）

GitHub: [Sunny-DotNet](https://github.com/Sunny-DotNet)<br>
Twitter: [m67186636](https://twitter.com/m67186636)<br>
LinkedIn: [sunny-dotnet](https://www.linkedin.com/in/sunny-dotnet)<br>
メール: m67186636@gmail.com

---

## プロフィール

10 年以上の実務経験を持つシニア .NET エンジニア兼オープンソース開発者です。C# バックエンドアーキテクチャ、NuGet SDK 開発、分散システム設計を専門とし、大規模データ収集・検索、AI/LLM 連携、IoT デバイス制御、3D シーン表示まで幅広く対応できます。省級重点プロジェクトやミリオンスケールのデータ基盤を主導し、GitHub で 70 以上の公開リポジトリを管理し、グローバルな .NET 開発者向けに複数のオープンソース SDK を公開しています。

---

## 強みと主要スキル

- **.NET エコシステムの深い実践**：.NET 6/7/8/9/10、ABP Framework（DDD レイヤリング、マルチテナント、権限管理）、EF Core に精通し、マイクロサービスアーキテクチャとモジュール化アプリケーション開発を主導。
- **NuGet SDK 開発**：クラウドサービス、AI モデル、大規模データ解析向けの .NET SDK を独立して設計・公開。依存性注入、非同期優先 API、マルチターゲット、複数言語ドキュメントを重視。
- **AI/LLM 連携**：DashScope.Net、CloudflareAI.DotNet などの SDK を開発。dify と Ollama ローカル LLM を連携し、無人ライブ配信の対話、コンテンツ生成、コメント意味理解に活用。
- **分散・高並行処理**：大規模データ収集、高並行分散クローリング、Common Crawl 解析、MongoDB/Elasticsearch によるミリオンスケール検索、非同期パイプライン、ETL、集計分析。
- **産業レベルの設備連動**：1 万平方メートル超の展示空間と 100 台以上の設備を対象に、時刻同期、TCP/IP・シリアル通信、同期スケジューリング、障害復旧を含む中控システムを設計。
- **フロントエンド・クロスプラットフォーム**：JavaScript/TypeScript、Vue 3、Blazor Server/WASM、THREE.JS、UNI-APP、MAUI に対応。
- **組込み・ロボティクス**：Arduino/ESP32、3D プリント、マイコン制御を組み合わせた分散モジュール協調と自動化。
- **DevOps・継続的デリバリー**：GitHub Actions CI/CD、Docker/Kubernetes、Selenium WebDriver E2E テスト、NuGet 自動公開パイプライン。

---

## 技術スタック

- **バックエンド/分散**：C#/.NET 6+、ABP Framework、Dapr、Quartz.NET、EF Core、SignalR、HangFire
- **SDK/NuGet ライブラリ**：CommonCrawl.Net、DigitalOcean.Net、DashScope.Net、CloudflareAI.DotNet、MusicBrainz.Net
- **ビッグデータ/AI**：MongoDB、Elasticsearch、Common Crawl、dify、Ollama、ML.NET、OpenCV/Emgu CV、Tesseract OCR
- **フロントエンド/クロスプラットフォーム**：JavaScript、TypeScript、Vue 3、Blazor Server/WASM、Ant Design Vue、Element UI、ECharts/Chart.js、THREE.JS、UNI-APP、MAUI
- **IoT/組込み**：Arduino、ESP32、TCP/IP、シリアル通信、時刻同期（NTP）
- **DevOps/テスト**：GitHub Actions、Azure DevOps、Docker、Kubernetes、Selenium WebDriver、Allure
- **その他**：Redis、IdentityServer、RESTful API、JWT、OAuth2.0、SourceLink、アジャイル開発

---

## 主なプロジェクト経験

### オープンソース .NET SDK ライブラリ

.NET エコシステム向けに複数のオープンソース SDK を独立して設計・保守し、依存性注入、非同期優先 API、マルチターゲットビルド、複数言語ドキュメントの設計基準を一貫して適用しています。

| SDK ライブラリ | 機能概要 | 技術的特徴 |
|---------------|----------|------------|
| [**CommonCrawl.Net**](https://github.com/Sunny-DotNet/CommonCrawl.Net) | Common Crawl 大規模ウェブアーカイブ解析ライブラリ | WARC 解析、Parquet インデックス読み取り、レジューム対応、`IAsyncEnumerable<T>` ストリーミング |
| [**DigitalOcean.Net**](https://github.com/Sunny-DotNet/DigitalOcean.Net) | DigitalOcean クラウド API クライアント | 40 以上のリソースカテゴリ、OpenAPI 自動コード生成、厳密型 DTO |
| [**DashScope.Net**](https://github.com/Sunny-DotNet/DashScope.Net) | Alibaba Cloud DashScope/Tongyi Qianwen LLM SDK | Chat/Video 生成 API、関数呼び出し、SSE ストリーミング |
| [**CloudflareAI.DotNet**](https://github.com/Sunny-DotNet/CloudflareAI.DotNet) | Cloudflare Workers AI 向け軽量 SDK | SSE ストリーミング出力、モデル検出とメタデータマッピング、環境変数設定 |
| [**MusicBrainz.Net**](https://github.com/Sunny-DotNet/MusicBrainz.Net) | MusicBrainz 音楽メタデータクライアント | メディア情報検索、動画ダウンロード、メタデータ解析 |

### ExchangeRates — 国際為替レート自動データサービス

- GitHub Actions で構築した完全自動の国際為替レートデータサービス。1 時間ごとに同期し、安定稼働。
- 主要通貨の為替レートをカバーし、ISO 4217 に準拠した完全版・軽量版 JSON を出力。
- データ収集、検証、整形、公開を完全自動化し、業務システム、データダッシュボード、公開 API の軽量データソースとして利用可能。

[ExchangeRates プロジェクト](https://github.com/Sunny-DotNet/ExchangeRates)

### 省級重点展示ホールシステム — 大規模設備連動と 3D シーン表示

- 1 万平方メートル超の省級重点展示ホールで、100 台以上のスクリーン、プロジェクター、音響映像、照明、自動機械設備を統合する全体技術アーキテクチャを主導。
- C#/.NET で中控バックエンドとスケジューリングサービスを構築し、TCP/IP・シリアルプロトコルで設備をゾーン管理、グループ同期とショーモード切替に対応。
- NTP と独自プロトコルによる時刻同期機構を開発し、端末動作のミリ秒級トリガー精度を実現。
- 分散障害診断、障害復旧スケジューリング、設備ヘルスモニタリング、リモート異常通知を実装。
- THREE.JS による複数スクリーン 3D レンダリングと演出連動を実現し、仮想空間移動、ホログラム投影、動的パーティクルなどを提供。
- ヘルスモニタリングと自動スケジューリングシステムの安定納品を主導し、関係者から高い評価を獲得。

### Global-sites — 分散型ビッグデータ収集とミリオンスケール検索

- 高並行のデータ収集・コンテンツ分析システムを主導し、数百万規模のウェブデータ処理と検索を支援。
- .NET 分散スケジューリング基盤を構築し、自社開発の CommonCrawl.Net SDK で Common Crawl データセットを収集、WARC をバッチ解析し、ページ構造とメタ情報を抽出。
- MongoDB シャーディングクラスタ + Elasticsearch 全文検索により、数百 GB 規模のデータ照会と集計を支援。
- 重複排除とクレンジングパイプラインを設計し、統計・分析の精度を向上。
- 複数業務向けに再利用可能なバッチ ETL データ基盤を構築。

[Global-sites プロジェクト](https://github.com/Sunny-DotNet/Global-sites)

### スマート美容業務管理プラットフォーム（beauty）

- .NET Core + Dapr マイクロサービス、EF Core モデリング、高効率クエリによるモジュール化バックエンド開発。
- Elasticsearch によるリアルタイムログと運用統計分析。
- Vue.js + TypeScript + Ant Design Vue によるフロントエンド開発、API 統一と業務分離。
- UNI-APP ミニプログラムで WeChat、Alipay、Douyin など主要プラットフォームへ迅速展開。
- モバイル、Web、ミニプログラムを横断する統一 API ゲートウェイ、自動デプロイ、ロール権限、通知、外部決済連携を実装。

[beauty プロジェクト](https://github.com/Sunny-DotNet/beauty)

### 無人マトリックスライブ配信プラットフォーム（mt）

- 自動復旧、リモート配信、コメント対話、視聴者行動分析を備えたマトリックス型無人ライブ配信基盤を構築。
- .NET Core + SignalR によるリアルタイム対話、Quartz.NET による自動配信スケジューリング、Docker による弾力的デプロイ。
- AI 連携：DashScope.Net SDK で Tongyi Qianwen モデルに接続し、dify と Ollama により自動コメント応答、コンテンツ生成、業務台本作成を実現。
- 複数プラットフォーム・複数アカウントの自動運用とコンテナ化された高並行処理。

[mt プロジェクト](https://github.com/Sunny-DotNet/mt)

### 画像認識プラットフォーム（Vision）

- OpenCV for .NET/Emgu CV 画像処理、Tesseract OCR、ML.NET 機械学習モデルを統合。
- ABP マイクロサービスアーキテクチャで、マルチテナント、細粒度権限、モジュール化 DDD レイヤリングに対応。
- Blazor/Vue 分離型フロントエンド、Docker による自動テストとデプロイ。

[Vision プロジェクト](https://github.com/Sunny-DotNet/Vision)

### 組込みロボットと IoT 組立プロジェクト

- Arduino でサーボ、ロボットアーム、センサーを制御し、オープンソース 3D プリントと組み合わせてモジュール化。
- 中控マイコンで複数モジュールを連携し、簡易音声対話、ロボット動作判断、オンライン更新、マルチタスク協調に対応。
- 教育シーンとスマート展示で活用。

### ABP エンタープライズ業務システム開発

- GuorunAbp、OpenHub、Soobn.Music など複数プロジェクトで ABP Framework を深く実践。
- Application/Core/EntityFrameworkCore/Web の完全なレイヤリングを持つモジュール化 DDD。
- 複数データベース、IdentityServer 認証、細粒度権限、マルチテナントに対応。
- HangFire バックグラウンドジョブ、Redis 分散キャッシュ、SignalR リアルタイム通知。
- Vue 3/Blazor の複雑なフロントエンド開発で複数業態を支援。

### Selenium WebDriver 自動テストプラットフォーム

- Allure レポート付き E2E UI 自動テストを GitHub Actions CI/CD と統合し、効率的な受け入れテストを実現。
- Puppeteer/Selenium によるブラウザ自動化を、回帰テストとデータ収集に活用。

---

## 学歴

中国国家開放大学<br>
専攻：コンピュータ情報管理

---

## 資格・認定

- **Foundational C# with Microsoft**<br>
  freeCodeCamp · 発行：2025 年 10 月<br>
  認定 ID：sunny-dotnet-fcswm

---

## 個人の強み

- 複雑なアイデアを動くシステムに落とし込める：データ収集、バックエンド設計、フロントエンド表示、設備連動、自動デプロイまでエンドツーエンドで対応。
- 実務経験を再利用可能なプロダクトへ変換できる：型安全、非同期優先 API、依存性注入、マルチターゲット、複数言語ドキュメントを備えた NuGet SDK を独立設計・公開。
- 領域横断の統合に強い：高並行データ、AI モデル、ハードウェアプロトコル、3D 可視化、業務フローを組み合わせて安定した解決策を構築。
- オープンソース型のエンジニアリング習慣を持ち、公開プロジェクト、自動化パイプライン、継続的なドキュメント化で技術判断力と長期保守性を示す。

---

## オープンソースとコミュニティ

- SDK ライブラリ、ビッグデータ、AI、IoT、自動化、3D、ミニプログラムなどを含む 70 以上の公開 GitHub リポジトリ。
- グローバルな .NET 開発者向けに、中国語・英語・日本語・フランス語のドキュメントを持つ複数の NuGet オープンソースパッケージを公開。
- 技術コミュニティと業界交流に継続的に参加。

---

## 言語能力

- 中国語（母語）
- 英語（技術文書と資料の読解が可能）

---

> その他のプロジェクトと技術詳細は GitHub プロフィール [Sunny-DotNet](https://github.com/Sunny-DotNet) をご覧ください。プロジェクトの補足や履歴書の調整が必要な場合は、お気軽にご連絡ください。
