# Sunny (Shenzhen)

GitHub: [Sunny-DotNet](https://github.com/Sunny-DotNet)<br>
Twitter: [m67186636](https://twitter.com/m67186636)<br>
LinkedIn: [sunny-dotnet](https://www.linkedin.com/in/sunny-dotnet)<br>
Email: m67186636@gmail.com

---

## Profile

Senior .NET engineer and open-source contributor with over ten years of hands-on engineering experience. Specialized in C# backend architecture, NuGet SDK development, and distributed system design, with broad experience across big-data ingestion and retrieval, AI/LLM integration, IoT device orchestration, and 3D scene delivery. Led provincial key projects and million-scale data platforms, maintains 70+ public GitHub repositories, and publishes open-source SDKs for the global .NET community.

---

## Strengths & Core Skills

- **Deep .NET ecosystem practice**: Expert in .NET 6/7/8/9/10, ABP Framework (DDD layering, multi-tenancy, permission systems), and EF Core; led microservice architectures and modular application development.
- **NuGet SDK development**: Independently designed and published production-grade .NET SDKs for cloud services, AI models, and big-data parsing, following dependency injection, async-first APIs, multi-target frameworks, and multilingual documentation standards.
- **AI & LLM integration**: Authored DashScope.Net and CloudflareAI.DotNet SDKs; integrated dify and Ollama local LLMs for intelligent unattended live-streaming interaction, content generation, and bullet-chat semantic understanding.
- **Distributed & high-concurrency processing**: Large-scale data ingestion, high-concurrency distributed crawling, Common Crawl parsing, MongoDB/Elasticsearch million-scale search, async pipelines, ETL, and aggregate analysis.
- **Industrial-grade device orchestration**: Architected central control for 10,000+ square meter exhibition spaces and 100+ devices, covering clock synchronization, TCP/IP and serial communication, synchronized scheduling, and disaster recovery.
- **Frontend & cross-platform development**: Skilled with JavaScript/TypeScript, Vue 3, Blazor Server/WASM, THREE.JS 3D scene rendering, UNI-APP mini programs, and MAUI cross-platform desktop applications.
- **Embedded & robotics systems**: Arduino/ESP32 hardware drivers, 3D printing, and microcomputer control for distributed modular collaboration and automation.
- **DevOps & continuous delivery**: GitHub Actions CI/CD, Docker/Kubernetes deployments, Selenium WebDriver E2E testing, and automated NuGet publishing pipelines.

---

## Tech Stack

- **Backend/Distributed**: C#/.NET 6+, ABP Framework, Dapr, Quartz.NET, EF Core, SignalR, HangFire
- **SDK/NuGet Libraries**: CommonCrawl.Net, DigitalOcean.Net, DashScope.Net, CloudflareAI.DotNet, MusicBrainz.Net
- **Big Data/AI**: MongoDB, Elasticsearch, Common Crawl, dify, Ollama, ML.NET, OpenCV/Emgu CV, Tesseract OCR
- **Frontend/Cross-platform**: JavaScript, TypeScript, Vue 3, Blazor Server/WASM, Ant Design Vue, Element UI, ECharts/Chart.js, THREE.JS, UNI-APP, MAUI
- **IoT/Embedded**: Arduino, ESP32, TCP/IP, serial communication, clock synchronization (NTP)
- **DevOps/Testing**: GitHub Actions, Azure DevOps, Docker, Kubernetes, Selenium WebDriver, Allure
- **Other**: Redis, IdentityServer, RESTful API, JWT, OAuth2.0, SourceLink, Agile development

---

## Major Project Experience

### Open-Source .NET SDK Libraries

Independently designed and maintained multiple open-source SDK libraries for the .NET ecosystem, consistently following dependency injection, async-first APIs, multi-target framework compilation, and multilingual documentation standards.

| SDK Library | Description | Technical Highlights |
|-------------|-------------|---------------------|
| [**CommonCrawl.Net**](https://github.com/Sunny-DotNet/CommonCrawl.Net) | Common Crawl web archive parsing library | WARC parsing, Parquet index reading, resume support, `IAsyncEnumerable<T>` streaming |
| [**DigitalOcean.Net**](https://github.com/Sunny-DotNet/DigitalOcean.Net) | DigitalOcean cloud API client | 40+ resource categories, OpenAPI code generation, strongly typed DTOs |
| [**DashScope.Net**](https://github.com/Sunny-DotNet/DashScope.Net) | Alibaba Cloud DashScope/Tongyi Qianwen LLM SDK | Chat/video generation APIs, function calling, SSE streaming |
| [**CloudflareAI.DotNet**](https://github.com/Sunny-DotNet/CloudflareAI.DotNet) | Lightweight SDK for Cloudflare Workers AI | SSE streaming output, model discovery and metadata mapping, environment-based configuration |
| [**MusicBrainz.Net**](https://github.com/Sunny-DotNet/MusicBrainz.Net) | MusicBrainz music metadata client | Media information retrieval, video download, metadata parsing |

### ExchangeRates — Automated International Exchange Rate Service ⭐5

- Fully automated international exchange rate data service built with GitHub Actions, syncing every hour with continuous stable operation.
- Covers major global currencies, outputting both full and compact JSON formats with ISO 4217 compliance.
- Earned 5 GitHub stars as the highest-starred personal project and has been adopted by external developers.

[ExchangeRates project repo](https://github.com/Sunny-DotNet/ExchangeRates)

### Provincial Key Exhibition Hall System — Large-Scale Device Orchestration & 3D Scene Display

- Led architecture and implementation for a provincial key exhibition hall spanning over 10,000 square meters, integrating 100+ screens, projectors, AV systems, lighting, and automated mechanical devices.
- Built C#/.NET central-control backend and scheduling services, managing hardware by zones through TCP/IP and serial protocols with grouped synchronization and show-mode switching.
- Developed NTP/private clock synchronization mechanisms with millisecond-level trigger precision across all terminals.
- Implemented distributed fault diagnosis, disaster recovery scheduling, device health monitoring, and remote abnormal alerts.
- Delivered multi-screen 3D scene rendering and visual-effect orchestration with THREE.JS, including virtual roaming, holographic projection, and dynamic particles.
- Led stable delivery of health monitoring and automated scheduling systems, earning strong stakeholder recognition.

### Global-sites — Distributed Big Data Collection & Million-Scale Search

- Led high-concurrency data collection and content analytics supporting real-time processing and retrieval of millions of web records.
- Built a .NET distributed scheduling architecture, using the self-developed CommonCrawl.Net SDK to ingest Common Crawl datasets, batch parse WARC files, and extract page structure and metadata.
- MongoDB sharded clusters + Elasticsearch full-text indexing for querying and aggregating hundreds of GB of data.
- Designed deduplication and cleansing pipelines to improve statistical and analytical accuracy.
- Built extensible batch ETL pipelines as a reusable high-quality data foundation.

[Global-sites project repo](https://github.com/Sunny-DotNet/Global-sites)

### Smart Beauty Management Platform (beauty)

- Delivered modular backend development with .NET Core + Dapr microservices, EF Core modeling, and efficient querying.
- Implemented real-time logging and operational analytics with Elasticsearch.
- Built Vue.js + TypeScript + Ant Design Vue frontend experiences with unified APIs and decoupled business modules.
- Launched UNI-APP mini programs for WeChat, Alipay, Douyin, and other mainstream platforms.
- Unified API gateway across mobile, web, and mini programs with automated deployment, role-based permissions, push messaging, and third-party payment integration.

[beauty project repo](https://github.com/Sunny-DotNet/beauty)

### Unattended Matrix Live Streaming Platform (mt)

- Built a matrix-style unattended live-streaming platform with automated recovery, remote streaming, bullet-chat interaction, and audience behavior analytics.
- .NET Core + SignalR for real-time interaction, Quartz.NET for automated live scheduling, and Docker for elastic deployments.
- AI integration: authored DashScope.Net SDK for Tongyi Qianwen models and integrated dify and Ollama for automatic bullet-chat replies, content generation, and business script planning.
- Multi-platform, multi-account automated operations with containerized high-concurrency processing.

[mt project repo](https://github.com/Sunny-DotNet/mt)

### Vision Recognition Platform (Vision)

- Applied OpenCV for .NET/Emgu CV image processing, Tesseract OCR, and ML.NET machine-learning model integration.
- ABP microservice architecture with multi-tenancy, fine-grained permissions, and modular DDD layering.
- Decoupled Blazor/Vue frontend design with Docker-based automated testing and deployment.

[Vision project repo](https://github.com/Sunny-DotNet/Vision)

### Embedded Robotics & IoT Assembly

- Controlled servos, robotic arms, and sensors on Arduino platforms, combined with open-source 3D printing for modular assembly.
- Connected multiple microcontroller modules for simple voice interaction, robot action decisions, online upgrades, and multitask collaboration.
- Applied in educational scenarios and intelligent exhibition displays.

### ABP Enterprise Business Systems

- Deep ABP Framework practice across GuorunAbp, OpenHub, Soobn.Music, and related projects.
- Modular domain-driven design with full Application/Core/EntityFrameworkCore/Web layering.
- Multi-database support, IdentityServer authentication, fine-grained permissions, and multi-tenancy.
- HangFire background jobs, Redis distributed caching, and SignalR real-time push.
- Complex Vue 3/Blazor frontend development supporting multiple business domains.

### Selenium WebDriver Automated Testing Platform

- End-to-end UI automation testing with Allure reports, integrated with GitHub Actions CI/CD for efficient acceptance.
- Browser automation with Puppeteer/Selenium applied to regression testing and data collection scenarios.

---

## Education

China National Open University<br>
Major: Computer Information Management

---

## Certifications

- **Foundational C# with Microsoft**<br>
  freeCodeCamp · Issued: Oct 2025<br>
  Certificate ID: sunny-dotnet-fcswm

---

## Highlights

- Multi-domain hands-on experience across big data, IoT, AI/LLM, exhibition device orchestration, embedded robotics, and 3D/mini-program delivery.
- Proven ability to independently design and publish production-grade NuGet SDK libraries following industry-standard open-source practices.
- Strong complex-system integration capability, especially in high-concurrency and multi-protocol hardware scenarios.
- Passionate about open source and knowledge sharing, with strong communication and coordination skills.

---

## Open Source & Community

- 70+ public GitHub repositories covering SDK libraries, big data, AI, IoT, automation, 3D, mini programs, and more.
- Published multiple NuGet open-source packages with multilingual documentation (Chinese/English/Japanese/French) for global .NET developers.
- Continuously participates in technical communities and industry exchanges.

---

## Languages

- Chinese (native)
- English (able to read technical documentation and resources)

---

> For more projects and technical details, visit my GitHub profile [Sunny-DotNet](https://github.com/Sunny-DotNet). Please get in touch for additional project highlights or resume customization.
