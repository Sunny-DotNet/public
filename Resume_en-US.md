# Sunny (Shenzhen)

GitHub: [Sunny-DotNet](https://github.com/Sunny-DotNet)  
Twitter: [m67186636](https://twitter.com/m67186636)  
LinkedIn: [sunny-dotnet](https://www.linkedin.com/in/sunny-dotnet)  
Email: m67186636@gmail.com

---

## Profile

Senior .NET developer and open-source contributor with over ten years of experience. Specializing in C# backend architecture, NuGet SDK library development, and distributed system design, with broad expertise in big data collection and retrieval, AI/LLM integration, IoT device orchestration, and 3D content delivery. Led multiple provincial key projects and million-scale data platforms. Maintaining 70+ public repositories on GitHub with several published .NET open-source SDK libraries.

---

## Strengths & Core Skills

- **Deep .NET Practice**: Expert in .NET 6/7/8/9/10, ABP Framework (DDD layering, multi-tenancy, permission systems), EF Core; led microservice architectures and modularized application development.
- **NuGet SDK Library Development**: Independently designed and published multiple production-grade .NET SDKs covering cloud services, AI models, and big data parsing — following dependency injection, async-first, multi-target framework (netstandard2.0/net8.0/net10.0), and multi-language documentation standards.
- **AI & LLM Integration**: Authored DashScope.Net (Alibaba Cloud Tongyi Qianwen) and CloudflareAI.DotNet (Workers AI) SDKs; integrated dify and Ollama local LLMs for smart live-streaming interaction, content generation, and semantic parsing.
- **Distributed & High Concurrency Processing**: Large-scale data ingestion, high-concurrency distributed crawlers (Common Crawl parsing), MongoDB/Elasticsearch million-scale search and async pipelines, ETL and aggregate analysis.
- **Industrial-Grade Device Orchestration**: Architect for large exhibition halls with 100+ devices, including clock synchronization, TCP/IP and serial communications, precise device orchestration, and disaster recovery.
- **Frontend & Cross-platform Development**: Proficient in JavaScript/TypeScript, Vue 3, Blazor Server/WASM, THREE.JS for 3D scene rendering, UNI-APP mini programs, and MAUI cross-platform desktop applications.
- **IoT & Robotics**: Arduino/ESP32 hardware drivers, coordinated with 3D printing and microcontroller orchestration, distributed modular automation.
- **DevOps & Continuous Delivery**: GitHub Actions CI/CD, Docker/K8s containerized deployment, Selenium WebDriver E2E testing, NuGet automated publishing pipelines.

---

## Tech Stack

- **Backend/Distributed**: C#/.NET 6+, ABP Framework, Dapr, Quartz.NET, EF Core, SignalR, HangFire
- **SDK/NuGet Libraries**: CommonCrawl.Net, DigitalOcean.Net, DashScope.Net, CloudflareAI.DotNet, MusicBrainz.Net
- **Big Data/AI**: MongoDB, Elasticsearch, Common Crawl, dify, Ollama, ML.NET, OpenCV/Emgu CV, Tesseract OCR
- **Frontend/Cross-platform**: JavaScript, TypeScript, Vue 3, Blazor Server/WASM, Ant Design Vue, Element UI, ECharts/Chart.js, THREE.JS, UNI-APP, MAUI
- **IoT/Embedded**: Arduino, ESP32, TCP/IP, Serial comm, Clock sync (NTP)
- **DevOps/Testing**: GitHub Actions, Azure DevOps, Docker, Kubernetes, Selenium WebDriver, Allure
- **Other**: Redis, IdentityServer, RESTful API, JWT, OAuth2.0, SourceLink, Agile development

---

## Major Project Experience

### Open-Source .NET SDK Libraries

Independently designed and maintained multiple open-source SDK libraries for the .NET ecosystem, consistently following dependency injection, async-first, multi-target framework compilation, and multi-language documentation standards.

| SDK Library | Description | Technical Highlights |
|-------------|-------------|---------------------|
| [**CommonCrawl.Net**](https://github.com/Sunny-DotNet/CommonCrawl.Net) | Common Crawl web archive parsing library | WARC parsing, Parquet index reading, resume support, `IAsyncEnumerable<T>` streaming |
| [**DigitalOcean.Net**](https://github.com/Sunny-DotNet/DigitalOcean.Net) | DigitalOcean cloud API client | 40+ resource categories, OpenAPI code generation, strongly-typed DTOs |
| [**DashScope.Net**](https://github.com/Sunny-DotNet/DashScope.Net) | Alibaba Cloud DashScope (Tongyi Qianwen) LLM SDK | Chat/Video generation APIs, function calling, SSE streaming |
| [**CloudflareAI.DotNet**](https://github.com/Sunny-DotNet/CloudflareAI.DotNet) | Cloudflare Workers AI lightweight SDK | SSE streaming output, model discovery & metadata mapping |
| [**MusicBrainz.Net**](https://github.com/Sunny-DotNet/MusicBrainz.Net) | MusicBrainz music metadata client | Media info retrieval, video download, metadata parsing |

---

### ExchangeRates — Automated International Exchange Rate Service ⭐5

- Fully automated international exchange rate data service built with GitHub Actions, syncing every hour with continuous stable operation.
- Covers major global currency exchange rates, outputting both full and compact JSON formats with ISO 4217 compliance.
- Earned 5 GitHub stars — the highest-starred personal project, adopted by external developers.

[ExchangeRates project repo](https://github.com/Sunny-DotNet/ExchangeRates)

---

### Provincial Key Exhibition Hall System — Large-Scale Device Orchestration & 3D Scene Display

- Led the architecture and implementation for a provincial key project: an exhibition hall spanning over 10,000 square meters, integrating 100+ screens, projectors, AV systems, and automated mechanical devices.
- Built core orchestration services in C#/.NET for backend control, device partition management, multi-zone / grouped live show switch, and remote troubleshooting.
- Developed proprietary clock sync protocols (NTP/private) for millisecond-precision device triggers across all endpoints.
- Implemented distributed failure detection, health monitoring and disaster recovery, with real-time abnormal alerting and automated scheduling.
- Delivered immersive 3D scene display and visual effects, powered by THREE.JS, including virtual roaming, holography, dynamic particle effects, and multiple-screen coordination.
- Achieved stable delivery and received high praise from stakeholders for reliability and technical depth.

---

### Global-sites — Distributed Big Data Collection & Million-Scale Search

- Led high-performance data ingestion and analytics service, supporting live analysis and retrieval of millions of web records.
- Built scalable .NET backend architecture with distributed scheduling; leveraged self-developed CommonCrawl.Net SDK for Common Crawl WARC batch processing, automated text/structure/meta extraction.
- MongoDB sharded clusters + Elasticsearch full-text index, sub-second query for hundreds of GB of data.
- Custom deduplication and cleansing pipeline for accurate statistics and deep content mining.
- Extensible ETL pipeline foundation for multiple business lines.

[Global-sites project repo](https://github.com/Sunny-DotNet/Global-sites)

---

### Smart Beauty Management Platform (beauty)

- Backend core developer, delivered modular .NET Core + Dapr microservices, EF Core data models, and efficient querying.
- Real-time log analytics and operational statistics using Elasticsearch.
- Developed Vue.js + TypeScript + Ant Design Vue frontend for multichannel business scenario interaction.
- Launched UNI-APP based Mini Programs for quick cross-platform feature rollout to WeChat, Alipay, Douyin, etc.
- Unified API gateway for mobile, web, mini program; automated deployment pipeline, multi-role permission management, message pushes, third-party payment integration.

[beauty project repo](https://github.com/Sunny-DotNet/beauty)

---

### Unattended Matrix Live Streaming Platform (mt)

- Built a scalable, fully unattended matrix live streaming platform including automated stream control, remote push, multi-channel bullet chat, and audience behavior analysis.
- .NET Core backend with SignalR for real-time interaction, Quartz.NET for automated scheduling and Docker for elastic deployments.
- AI integration: Authored DashScope.Net SDK for Tongyi Qianwen model access; integrated dify (AI knowledge base, QA bot) and Ollama (local LLM inference), enabling smart bullet chat response, automatic content generation, and script planning.
- Multi-account multi-platform control, containerized high concurrency processing.

[mt project repo](https://github.com/Sunny-DotNet/mt)

---

### Vision Recognition Platform (Vision)

- Utilized OpenCV for .NET and Emgu CV for image processing, Tesseract OCR, ML.NET for ML model integration.
- ABP-based modular microservices with DDD layering, multitenancy and fine-grained permission management.
- Frontend decoupled (Blazor/Vue), Docker-based automated testing and deployment.

[Vision project repo](https://github.com/Sunny-DotNet/Vision)

---

### Embedded Robotics & IoT Assembly

- Arduino control for servos, sensors, robotic arms; integrated open source 3D modeling and printing for modular assembly.
- Custom microcontroller communication protocols for distributed robot module orchestration; supported basic speech interaction and action logic.
- Applied in educational settings and interactive exhibitions.

---

### ABP Enterprise Business System

- Deep ABP Framework practice across multiple projects (GuorunAbp, OpenHub, Soobn.Music).
- Modular domain-driven design (DDD), complete layering: Application/Core/EntityFrameworkCore/Web.
- Multi-DB support, IdentityServer authentication, fine-grained permission management and multi-tenancy.
- HangFire background task scheduling, Redis distributed caching, SignalR real-time push.
- Complex frontend with Vue 3/Blazor, supporting multiple business verticals.

---

### Selenium WebDriver Automated Testing Platform

- End-to-end UI testing, Allure reporting, integrated with GitHub Actions CI/CD for efficient automated acceptance.
- Browser automation (Puppeteer/Selenium) applied across multiple projects for regression testing and data collection scenarios.

---

## Education

China National Open University  
Major: Computer Information Management

---

## Certifications

- **Foundational C# with Microsoft**  
  freeCodeCamp · Issued: Oct 2025  
  Certificate ID: sunny-dotnet-fcswm  
  ![image1](image1)

---

## Highlights

- Multi-domain hands-on experience: big data, IoT, AI/LLM, exhibition device orchestration, robotics, 3D/mini program implementation
- Proven ability to independently design and publish production-grade NuGet SDK libraries following industry-standard open-source practices
- Strong complex engineering & system integration capability, excels in high concurrency and multi-protocol hardware solutions
- Passionate open source contributor, excellent communication and collaboration skills

---

## Open Source & Community

- 70+ public GitHub repositories: SDK libraries, big data, AI, IoT, 3D, automation, mini programs and more
- Published multiple NuGet open-source packages with multi-language documentation (Chinese/English/Japanese/French) for global .NET developers
- Active in technical forums and industry exchanges

---

## Languages

- Chinese (native)
- English (able to read technical documentation & resources)

---

> For more projects and details, visit my GitHub profile [Sunny-DotNet](https://github.com/Sunny-DotNet). For project highlights or resume customization, please get in touch!
