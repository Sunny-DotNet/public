# Sunny（深圳）

GitHub: [Sunny-DotNet](https://github.com/Sunny-DotNet)<br>
Twitter: [m67186636](https://twitter.com/m67186636)<br>
LinkedIn: [sunny-dotnet](https://www.linkedin.com/in/sunny-dotnet)<br>
邮箱: m67186636@gmail.com

---

## 个人简介

高级 .NET 技术专家与开源开发者，拥有十余年工程经验。专注 C# 后端架构、NuGet SDK 库开发、分布式系统设计，同时具备大数据采集与检索、AI/大模型应用集成、物联网设备联动和 3D 场景展示的综合能力。曾主导省级重点工程与百万级数据平台交付，在 GitHub 维护 70+ 个公开仓库，并发布多个面向全球 .NET 开发者的开源 SDK。

---

## 技术优势与核心能力

- **.NET 生态深度实践**：精通 .NET 6/7/8/9/10、ABP Framework（DDD 分层、多租户、权限体系）、EF Core，主导微服务架构与模块化应用开发。
- **NuGet SDK 库开发**：独立设计并发布多个高质量 .NET SDK，覆盖云服务、AI 模型、大数据解析等领域，遵循依赖注入、异步优先、多目标框架、多语言文档的工业级标准。
- **AI 与大模型集成**：封装 DashScope.Net、CloudflareAI.DotNet 等 SDK；集成 dify、Ollama 本地大模型，应用于无人直播智能互动、内容生成与弹幕语义理解。
- **分布式与高并发处理**：大数据采集、高并发分布式爬虫、Common Crawl 解析、MongoDB/Elasticsearch 百万级检索、异步管道、ETL 与聚合分析。
- **工业级设备联动系统**：负责万平展厅及上百台设备中控，覆盖时钟同步、TCP/IP 与串口通信、复杂设备同步调度与容灾机制。
- **前端与跨端开发**：熟悉 JavaScript/TypeScript、Vue 3、Blazor Server/WASM、THREE.JS 3D 场景渲染、UNI-APP 小程序、MAUI 跨平台桌面应用。
- **嵌入式与机器人系统**：Arduino/ESP32 硬件驱动，结合 3D 打印与微机中控，实现多模块分布式协作与自动化。
- **DevOps 与持续交付**：GitHub Actions CI/CD、Docker/Kubernetes 容器化部署、Selenium WebDriver 端到端测试、NuGet 自动发布流水线。

---

## 技能栈

- **后端/分布式**：C#/.NET 6+，ABP Framework，Dapr，Quartz.NET，EF Core，SignalR，HangFire
- **SDK/NuGet 库**：CommonCrawl.Net，DigitalOcean.Net，DashScope.Net，CloudflareAI.DotNet，MusicBrainz.Net
- **大数据/AI**：MongoDB，Elasticsearch，Common Crawl，dify，Ollama，ML.NET，OpenCV/Emgu CV，Tesseract OCR
- **前端/跨端**：JavaScript，TypeScript，Vue 3，Blazor Server/WASM，Ant Design Vue，Element UI，ECharts/Chart.js，THREE.JS，UNI-APP，MAUI
- **物联网/嵌入式**：Arduino，ESP32，TCP/IP，串口通信，时钟同步（NTP）
- **DevOps/测试**：GitHub Actions，Azure DevOps，Docker，Kubernetes，Selenium WebDriver，Allure
- **其它**：Redis，IdentityServer，RESTful API，JWT，OAuth2.0，SourceLink，敏捷开发

---

## 主要项目经验

### 开源 .NET SDK 库

独立设计并维护多个面向 .NET 生态的开源 SDK 库，统一遵循依赖注入、异步优先、多目标框架编译、多语言文档的设计规范。

| SDK 库 | 功能描述 | 技术亮点 |
|--------|---------|---------|
| [**CommonCrawl.Net**](https://github.com/Sunny-DotNet/CommonCrawl.Net) | Common Crawl 大规模网页档案解析库 | WARC 格式解析、Parquet 索引读取、断点续传、`IAsyncEnumerable<T>` 流式处理 |
| [**DigitalOcean.Net**](https://github.com/Sunny-DotNet/DigitalOcean.Net) | DigitalOcean 云服务 API 客户端 | 覆盖 40+ 资源分类、OpenAPI 自动代码生成、强类型 DTO |
| [**DashScope.Net**](https://github.com/Sunny-DotNet/DashScope.Net) | 阿里云灵积（通义千问等）大模型 SDK | Chat/Video 生成接口、函数调用、SSE 流式响应 |
| [**CloudflareAI.DotNet**](https://github.com/Sunny-DotNet/CloudflareAI.DotNet) | Cloudflare Workers AI 轻量 SDK | SSE 流式输出、模型发现与元数据映射、环境变量配置 |
| [**MusicBrainz.Net**](https://github.com/Sunny-DotNet/MusicBrainz.Net) | MusicBrainz 音乐元数据库客户端 | 媒体信息检索、视频下载、元数据解析 |

### ExchangeRates —— 国际汇率自动化数据服务

- 基于 GitHub Actions 构建的全自动国际汇率数据服务，每小时同步一次，持续稳定运行。
- 覆盖全球主要货币汇率，输出完整版与精简版 JSON 格式，支持 ISO 4217 标准。
- 将数据采集、校验、格式化与发布流程完全自动化，适合作为业务系统、数据看板和开放接口的轻量级数据源。

[ExchangeRates 项目仓库](https://github.com/Sunny-DotNet/ExchangeRates)

### 省级重点展厅系统 —— 万平级展厅设备联动与 3D 场景展示

- 负责某省重点大型展厅整体技术架构设计与落地，现场面积超一万平方米，集成百余台显示屏、投影仪、灯光音视频、自动机械设备。
- 基于 C#/.NET 搭建中控后台与调度服务，通过 TCP/IP/串口协议将硬件设备分区管理，支持多组设备同步、分区联动和大秀模式切换。
- 独立研发时钟同步机制（NTP 与私有协议），全场终端动作触发精准到毫秒级。
- 实现分布式故障诊断与容灾调度，设备健康监控与异常远程预警。
- 使用 THREE.JS 完成多屏幕 3D 场景渲染与特效联动，包括虚拟空间漫游、全息投影、动态粒子等高级特效。
- 全程主导健康监控与自动调度系统稳定交付，获业主高度评价。

### Global-sites —— 大数据分布式采集与百万级检索

- 主导高并发大数据采集与内容分析系统，支撑百万级网页数据实时处理与检索。
- .NET 核心分布式调度架构，基于自研 CommonCrawl.Net SDK 采集 Common Crawl 数据集并批量解析 WARC 格式，自动抽取页面结构和元信息。
- MongoDB 分片集群 + Elasticsearch 全文索引，支撑百 GB 量级数据查询与聚合。
- 设计数据去重与清洗管道，保障统计与分析准确性。
- 可扩展批量 ETL 管道，为多业务线输出高质量数据底座。

[Global-sites 项目仓库](https://github.com/Sunny-DotNet/Global-sites)

### 智能美业管理平台（beauty）

- 后端模块化开发（.NET Core + Dapr 微服务）、EF Core 建模及高效查询。
- Elasticsearch 实时日志与运营统计分析。
- Vue.js + TypeScript + Ant Design Vue 前端，接口归一与业务解耦。
- UNI-APP 小程序，快速集成微信、支付宝、抖音等主流平台，业务功能多端一键上线。
- 三端统一 API 网关，自动化部署流水线，支持多角色权限分权、消息推送与第三方支付集成。

[beauty 项目仓库](https://github.com/Sunny-DotNet/beauty)

### 无人值守矩阵直播平台（mt）

- 建设矩阵式无人直播平台，支持自动排障、远程推流、弹幕互动与观众行为智能分析。
- .NET Core + SignalR 实时互动 + Quartz.NET 自动化直播调度，Docker 弹性部署。
- AI 集成：自研 DashScope.Net SDK 对接通义千问系列模型，引入 dify 与 Ollama，实现自动弹幕应答、内容生成与业务脚本规划。
- 多平台多账号矩阵自动化运营，容器化高并发处理。

[mt 项目仓库](https://github.com/Sunny-DotNet/mt)

### 视觉识别平台（Vision）

- 运用 OpenCV for .NET/Emgu CV 图像处理、Tesseract OCR 文本识别、ML.NET 机器学习模型集成。
- ABP 微服务架构，支持多租户和复杂权限管理，模块化 DDD 分层设计。
- Blazor/Vue 前端分离式设计、Docker 自动化测试与部署。

[Vision 项目仓库](https://github.com/Sunny-DotNet/Vision)

### 嵌入式机器人与 IoT 组装项目

- Arduino 平台控制舵机、机械臂和传感器，结合开源 3D 打印进行模块化组装。
- 中控微机多模块互联，支持简单语音对话、机器人动作决策、在线升级与多任务协同。
- 技术落地应用于教育场景及智能展厅展示。

### ABP 企业级业务系统开发

- 在 GuorunAbp、OpenHub、Soobn.Music 等多个项目中深度实践 ABP Framework。
- 模块化领域驱动设计（DDD），完整分层：Application/Core/EntityFrameworkCore/Web。
- 多数据库兼容，IdentityServer 身份认证、细粒度权限管理及多租户落地。
- HangFire 后台任务调度、Redis 分布式缓存、SignalR 实时推送。
- Vue 3/Blazor 前端复杂页面开发，支撑多业态业务搭建。

### Selenium WebDriver 自动化测试平台

- 端到端 UI 自动化测试，Allure 可视化报告，结合 GitHub Actions CI/CD 流水线实现高效自动化验收。
- 浏览器自动化（Puppeteer/Selenium）应用于多个项目的回归测试与数据采集场景。

---

## 教育背景

中国国家开放大学<br>
计算机信息管理专业

---

## 资格认证

- **Foundational C# with Microsoft**<br>
  freeCodeCamp · 颁发日期：2025 年 10 月<br>
  认证编号：sunny-dotnet-fcswm

---

## 个人亮点

- 能把复杂想法落成可运行系统：从数据采集、后端架构、前端展示到设备联动与自动化部署，具备端到端交付能力。
- 能把经验沉淀成可复用产品：独立设计并发布 NuGet SDK，重视类型安全、异步模型、依赖注入、多目标框架和多语言文档。
- 擅长跨边界系统集成：同时处理高并发数据、AI 模型、硬件协议、3D 可视化和业务流程，把分散技术组合成稳定方案。
- 保持开源工程习惯：用公开项目、自动化流水线和持续文档化证明技术判断力与长期维护能力。

---

## 开源与社区

- GitHub 公开仓库 70+，涵盖 SDK 库、大数据、AI、物联网、自动化、3D/小程序等工程。
- 发布多个 NuGet 开源包，面向全球 .NET 开发者提供多语言文档（中/英/日/法）。
- 持续参与技术社区与行业交流。

---

## 语言能力

- 中文（母语）
- 英文（具备技术文档与资料阅读能力）

---

> 更多项目与技术细节，欢迎访问我的 GitHub 主页 [Sunny-DotNet](https://github.com/Sunny-DotNet)。如需补充项目亮点或优化内容，欢迎联系！
