---
layout: page
permalink: /
---

# 職務経歴書

1. [基本情報](#basic)
1. [スキル・資格](#skills)
1. [職務経歴](#carrer)
    - [株式会社シャペロン（2023/01〜現在）](#carrer_shaperon)
    - [株式会社QLife（2019/11〜2022/12）](#carrer_qlife)
    - [合同会社DMM.com（2015/04〜2019/10）](#carrer_dmm)
1. [業務外活動](#private)

---

<a id="basic"></a>

# 基本情報

### プロフィール
- **氏名**：いのもえ
- **生年月日**：1992/11/22

### 経歴

<div style="margin: 8px 0 4px;">
<div style="display: flex; font-size: 11px; line-height: 1.4;">
<div style="box-sizing: border-box; width: 66.43%; padding: 4px 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-right: 2px solid #fff; background: #cfe3f6;">エンジニア（後半は EM・スクラムマスターを兼務）</div>
<div style="box-sizing: border-box; width: 25.71%; padding: 4px 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-right: 2px solid #fff; background: #fdf0a6;">SM → アジャイルコーチ</div>
<div style="box-sizing: border-box; width: 7.86%; padding: 4px 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; background: #cfe3f6; padding-left: 2px; padding-right: 0; font-size: 9px; text-overflow: clip;">エンジニア</div>
</div>
<div style="display: flex;">
<div style="box-sizing: border-box; width: 66.43%; padding: 2px 0 0 3px; border-left: 1px solid #999; white-space: nowrap; color: #666; font-size: 10px;">2015/04</div>
<div style="box-sizing: border-box; width: 25.71%; padding: 2px 0 0 3px; border-left: 1px solid #999; white-space: nowrap; color: #666; font-size: 10px;">2023/01</div>
<div style="box-sizing: border-box; width: 7.86%; padding: 2px 0 0 3px; border-left: 1px solid #999; white-space: nowrap; color: #666; font-size: 10px;">2026/01</div>
</div>
</div>

### 職務要約
Web サービスのサーバーサイドからインフラまでを担うエンジニアとして 8 年働き、後半はエンジニアリングマネージャーも務めました。その後 3 年間は大規模スクラム（LeSS）のスクラムマスター・アジャイルコーチとしてチームと組織を支援しました。
2026 年からは再びエンジニアとして、コーポレート部門で AI 活用と業務の自動化を進めるとともに、エンジニアが在籍しない組織のシステム開発と IT 基盤の整備を担当しています。設計・実装はコーディングエージェント（Claude Code / Codex）に委ね、作業指示とレビューを担当しています。

### 発信・ポートフォリオ
[![Github](https://img.shields.io/badge/GitHub-miyakona-%2312100E.svg?style=flat-square&logo=Github&logoColor=white)](https://github.com/miyakona)
[![Zenn](https://img.shields.io/badge/Zenn-miyakona-3EA8FF?style=flat-square&logo=zenn&logoColor=white)](https://zenn.dev/miyakona)
[![Note](https://img.shields.io/badge/note.com-miyakona-41C9B4?style=flat-square&logo=note&logoColor=white)](https://note.com/miyakona)
[![LAPRAS](https://img.shields.io/badge/LAPRAS-miyakona-00A1E9?style=flat-square&logo=lapras&logoColor=white)](https://lapras.com/public/miyakona)
[![Podcast](https://img.shields.io/badge/Podcast-%E8%A6%B3%E5%AF%9F%E3%83%A9%E3%82%B8%E3%82%AA-1DB954?style=flat-square&logo=spotify&logoColor=white)](https://open.spotify.com/show/5cGW6Ar4hY5eLlCI8PkIvx)

<a id="skills"></a>

# スキル・資格

- **言語・フレームワーク**：PHP（Laravel、FuelPHP）、TypeScript / JavaScript（React、Vue.js、Next.js）、Python
- **インフラ・CI**：AWS（ECS / Fargate、Lambda、S3、CloudFront）、AWS CDK、Terraform、Docker、GitHub Actions
- **DB・データ**：MySQL、PostgreSQL、BigQuery
- **業務改善・AI**：n8n、Dify、MCP サーバー開発、Claude Code、Codex、Playwright
- **マネジメント**：スクラム・LeSS の運営、ファシリテーション、採用、IT ガバナンス（SaaS 管理・セキュリティ対応）
- **資格**：Certified LeSS Practitioner（2024/11）、Certified ScrumMaster®（2023/04）、AWS Certified Solutions Architect - Associate（2021/06）

<h1 id="carrer" class="pdf-page-start">職務経歴詳細</h1>

<a id="carrer_shaperon"></a>

## 株式会社シャペロン（2023/01〜現在）

2023/01〜2025/05 は大規模スクラム（LeSS）のスクラムマスター、2025/06〜2025/12 はアジャイルコーチとして活動しました。2026/01 からはコーポレート部門の専任となり、社内業務の自動化と、エンジニアが在籍しない組織への技術支援を担当しています。

<details>
<summary>主な業務内容</summary>

### コーポレート業務（2025/12〜現在、2026/01 から専任）
- 社内向け MCP サーバーを設計・開発し、IT 管理・勤怠管理・採用管理の SaaS を AI エージェントから操作できるように整備（90 以上のツール、認証付きのリモート環境）
- AI を使った業務フローを構築：セキュリティチェックシートの回答案の生成、採用スクリーニングでの AI と人の判定差の検知など。定期実行の業務フローは AWS へ移行
- コーポレートサイト（約 80 ページ）と製品サイトを、WordPress・ノーコードツールから静的サイト（AWS CloudFront・WAF）へ移行。URL・SEO を維持し、監視を整備したうえで旧ホスティングを解約
- 全社の SaaS・AI ツールのアカウント管理と利用ポリシーを担当。月次の棚卸し、利用状況に基づくプランの見直し、AI 活用ワークショップと利用基準の策定
- AWS のアクセス制限・脅威検知・権限境界の導入、コーディングエージェントの変更を push 前に確認させる仕組みなど、セキュリティと開発ルールを整備

### 非エンジニア組織への技術支援（2026〜現在）
エンジニアが在籍しない組織で、AWS 上の業務システムの開発・保守と IT 基盤の整備・運用を担当しています。

- **文献収集の自動化**：医薬・ヘルスケア領域の文献 PDF を収集するシステムの開発をリード（Python、AWS、AWS CDK、Playwright）
  - 人が集めた実績と定期的に突き合わせ、取りこぼしの原因を分類して改善。2026/08 → 2026/11 で実績取得率は国内 22.4% → 38.8%、海外 36.8% → 50.9%
  - 直した取りこぼしをテストケースとして蓄積して再発を防止。人手作業から自動処理への移行計画を推進
- **業務の自動化**：文献からの有害事象の抽出、定型成果物の生成、週次納品の自動送付（共同開発）
- **管理画面の共通基盤**：シングルサインオン・操作ログ・ファイル受け渡しを備えた共通部品を作り、3 つのシステムに展開
- **IT 基盤の整備**：1Password・VPN の導入、Google Workspace へのメール移行（送信ドメイン認証、旧メールの退避まで）、サービスサイトのコード管理と日英対応
- **AWS の組織運用**：マルチアカウント環境をコードで管理し、ガードレール・脆弱性と脅威の検知・コスト通知・退職時のアクセス停止手順を整備

### スクラムマスター（2023/01〜2025/05）・アジャイルコーチ（2025/06〜2025/12）
- **チーム体制**：プロダクトオーナー 1 名、エンジニアと PdM の混成 3 チーム、スクラムマスター 2 名
- スクラム・LeSS に基づくチーム支援、ワークショップ・勉強会の企画と実施、全社オフサイトのファシリテーション（[関連記事](https://note.com/miyakona/m/mdbbbee2284ad)）
- スクラムチームと LeSS チームの統合を 3 か月程度で完遂。新任スクラムマスターを 3 か月で自律的に活動できる状態に
- 部門 OKR の策定支援、人事評価方法の検討、開発生産性の指標の可視化など、開発体制の再構築を担当
- 採用業務（2023/03〜）：スクリーニング・スカウト・面接、評価基準の標準化と採用プロセスの自動化

</details>

<a id="carrer_qlife"></a>

## 株式会社QLife（2019/11〜2022/12）

医療系 Web サービスのフルスタックエンジニアとして、インフラからフロントまで担当しました。後期はエンジニアリングマネージャーとスクラムマスターも務めました。

<details>
<summary>主な業務内容</summary>

- **エンジニアリングマネージャー**（2022/06〜2022/12）：6 名のチーム（社員 3 名、業務委託 3 名）の採用・評価・キャリア支援
- **治験向け顧客管理サービス**（2019/11〜2022/12）：機能開発・保守から、スクラムマスター兼プロダクトオーナーとして運用改善を主導（PHP / Laravel、Vue.js、AWS、PostgreSQL、Terraform）
- **新規システムの構築**：コールセンター向けシステムの設計・実装（TypeScript、Next.js）、会員基盤システムの要求整理とステークホルダー調整
- **メディアサイトの保守・運用**：病院検索・お薬検索などのサービスで、仕様不明な機能の調査と復旧、バッチ処理、障害対応（PHP / Laravel、MySQL）

</details>

<a id="carrer_dmm"></a>

## 合同会社DMM.com（2015/04〜2019/10）

PHP（FuelPHP、Laravel）を中心としたサーバーサイドエンジニアとして、サービスの機能開発と保守、新規サービスの立ち上げに携わりました。

<details>
<summary>主な業務内容</summary>

- **電子書籍サービス**（2015/10〜2019/10）
  - オンプレミスから AWS への移行で、移行計画・影響調査・リリース計画とステークホルダー調整を担当（日売上 4000 万円規模）
  - 読み放題機能（サブスクリプション）の設計・実装と、停滞していたプロジェクトの立て直し
  - クーポン・セット販売機能の実装、PHP 5.3 → 7 へのリプレイス、障害対応
- **新規サービスの立ち上げ**：月間売上 1 億円規模のサービス（2017）、オフショア開発チームと連携した BtoCtoC サービス（2016）
- **社内活動**：技術書輪読会の主催（1 年間）、新卒社員のメンター（3 名）、全社 API の仕様書作成

</details>

<a id="private"></a>

# 業務外活動

- スクラムマスターのコミュニティ「スクラム実験室」運営メンバー
- 業務で得た技術的な知見を Zenn で発信：[Zenn](https://zenn.dev/miyakona)
