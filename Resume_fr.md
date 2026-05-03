# Sunny (Shenzhen)

GitHub: [Sunny-DotNet](https://github.com/Sunny-DotNet)<br>
Twitter: [m67186636](https://twitter.com/m67186636)<br>
LinkedIn: [sunny-dotnet](https://www.linkedin.com/in/sunny-dotnet)<br>
E-mail: m67186636@gmail.com

---

## Profil

Ingénieur .NET senior et contributeur open source avec plus de dix ans d'expérience terrain. Spécialisé dans l'architecture backend C#, le développement de SDK NuGet et la conception de systèmes distribués, avec une expérience étendue en collecte et recherche de données massives, intégration IA/LLM, orchestration d'équipements IoT et rendu de scènes 3D. A piloté des projets provinciaux clés et des plateformes de données à l'échelle du million, maintient plus de 70 dépôts publics sur GitHub et publie plusieurs SDK open source pour la communauté .NET mondiale.

---

## Forces et compétences clés

- **Pratique approfondie de l'écosystème .NET** : maîtrise de .NET 6/7/8/9/10, ABP Framework (DDD, multi-tenant, permissions) et EF Core ; pilotage d'architectures microservices et d'applications modulaires.
- **Développement de SDK NuGet** : conception et publication de SDK .NET de niveau production pour les services cloud, les modèles IA et l'analyse de données massives, avec injection de dépendances, API asynchrones, multi-ciblage et documentation multilingue.
- **Intégration IA et LLM** : auteur de DashScope.Net et CloudflareAI.DotNet ; intégration de dify et d'Ollama pour l'interaction intelligente en live-streaming automatisé, la génération de contenu et la compréhension sémantique des messages.
- **Traitement distribué et haute concurrence** : ingestion de données à grande échelle, crawling distribué, analyse Common Crawl, recherche million-scale avec MongoDB/Elasticsearch, pipelines asynchrones, ETL et analyses agrégées.
- **Orchestration industrielle d'équipements** : architecture de contrôle central pour des espaces d'exposition de plus de 10 000 m² et plus de 100 équipements, incluant synchronisation horaire, TCP/IP, liaison série, planification synchronisée et reprise sur incident.
- **Frontend et multiplateforme** : JavaScript/TypeScript, Vue 3, Blazor Server/WASM, rendu 3D avec THREE.JS, mini-programmes UNI-APP et applications desktop MAUI.
- **Systèmes embarqués et robotique** : pilotes Arduino/ESP32, impression 3D et contrôle par micro-ordinateur pour collaboration modulaire distribuée et automatisation.
- **DevOps et livraison continue** : GitHub Actions CI/CD, Docker/Kubernetes, tests E2E Selenium WebDriver et pipelines de publication NuGet automatisés.

---

## Stack technique

- **Backend/Distribué** : C#/.NET 6+, ABP Framework, Dapr, Quartz.NET, EF Core, SignalR, HangFire
- **SDK/Bibliothèques NuGet** : CommonCrawl.Net, DigitalOcean.Net, DashScope.Net, CloudflareAI.DotNet, MusicBrainz.Net
- **Big Data/IA** : MongoDB, Elasticsearch, Common Crawl, dify, Ollama, ML.NET, OpenCV/Emgu CV, Tesseract OCR
- **Frontend/Multiplateforme** : JavaScript, TypeScript, Vue 3, Blazor Server/WASM, Ant Design Vue, Element UI, ECharts/Chart.js, THREE.JS, UNI-APP, MAUI
- **IoT/Embarqué** : Arduino, ESP32, TCP/IP, communication série, synchronisation horaire (NTP)
- **DevOps/Tests** : GitHub Actions, Azure DevOps, Docker, Kubernetes, Selenium WebDriver, Allure
- **Autres** : Redis, IdentityServer, RESTful API, JWT, OAuth2.0, SourceLink, développement Agile

---

## Expériences projet majeures

### Bibliothèques .NET SDK open source

Conception et maintenance indépendantes de plusieurs SDK open source pour l'écosystème .NET, avec une approche cohérente : injection de dépendances, API asynchrones, compilation multi-cible et documentation multilingue.

| Bibliothèque SDK | Description | Points techniques |
|------------------|-------------|-------------------|
| [**CommonCrawl.Net**](https://github.com/Sunny-DotNet/CommonCrawl.Net) | Bibliothèque d'analyse des archives web Common Crawl | Analyse WARC, lecture d'index Parquet, reprise, streaming `IAsyncEnumerable<T>` |
| [**DigitalOcean.Net**](https://github.com/Sunny-DotNet/DigitalOcean.Net) | Client API cloud DigitalOcean | 40+ catégories de ressources, génération de code OpenAPI, DTO fortement typés |
| [**DashScope.Net**](https://github.com/Sunny-DotNet/DashScope.Net) | SDK LLM Alibaba Cloud DashScope/Tongyi Qianwen | API chat/vidéo, function calling, streaming SSE |
| [**CloudflareAI.DotNet**](https://github.com/Sunny-DotNet/CloudflareAI.DotNet) | SDK léger pour Cloudflare Workers AI | Sortie SSE en streaming, découverte de modèles et mapping de métadonnées, configuration par variables d'environnement |
| [**MusicBrainz.Net**](https://github.com/Sunny-DotNet/MusicBrainz.Net) | Client de métadonnées musicales MusicBrainz | Recherche média, téléchargement vidéo, analyse de métadonnées |

### ExchangeRates — Service automatisé de taux de change internationaux

- Service de données de taux de change internationaux entièrement automatisé avec GitHub Actions, synchronisé toutes les heures et stable en continu.
- Couvre les principales devises mondiales et produit des JSON complets et compacts conformes ISO 4217.
- Automatise entièrement l'ingestion, la validation, le formatage et la publication des données, utilisable comme source légère pour systèmes métier, tableaux de bord et API publiques.

[Dépôt ExchangeRates](https://github.com/Sunny-DotNet/ExchangeRates)

### Système de hall d'exposition provincial — Orchestration d'équipements à grande échelle et scène 3D

- Pilotage de l'architecture et de la mise en œuvre d'un hall d'exposition provincial de plus de 10 000 m² intégrant 100+ écrans, projecteurs, systèmes audiovisuels, éclairages et équipements mécaniques automatisés.
- Construction d'un backend de contrôle central et de services de planification en C#/.NET, avec gestion zonée des équipements via TCP/IP et liaison série, synchronisation de groupes et modes show.
- Développement de mécanismes de synchronisation NTP et privés pour des déclenchements au niveau de la milliseconde.
- Mise en place du diagnostic distribué, de la reprise sur incident, du monitoring de santé des équipements et des alertes distantes.
- Rendu et orchestration multi-écrans avec THREE.JS : visite virtuelle, projection holographique, particules dynamiques et effets avancés.
- Livraison stable du monitoring et de la planification automatique, avec forte reconnaissance des parties prenantes.

### Global-sites — Collecte big data distribuée et recherche à l'échelle du million

- Pilotage d'un système de collecte et d'analyse de contenu haute concurrence pour le traitement et la recherche temps réel de millions de pages.
- Architecture distribuée .NET avec CommonCrawl.Net pour collecter Common Crawl, analyser les WARC en lots et extraire structures de pages et métadonnées.
- Clusters MongoDB shardés + indexation plein texte Elasticsearch pour requêter et agréger plusieurs centaines de Go de données.
- Conception de pipelines de déduplication et de nettoyage pour améliorer la précision statistique et analytique.
- Pipelines ETL batch extensibles servant de base de données réutilisable pour plusieurs usages.

[Dépôt Global-sites](https://github.com/Sunny-DotNet/Global-sites)

### Plateforme de gestion beauté intelligente (beauty)

- Développement backend modulaire avec microservices .NET Core + Dapr, modélisation EF Core et requêtes optimisées.
- Logs temps réel et analyses opérationnelles avec Elasticsearch.
- Frontend Vue.js + TypeScript + Ant Design Vue, avec API unifiées et séparation des modules métier.
- Mini-programmes UNI-APP pour WeChat, Alipay, Douyin et autres plateformes majeures.
- Passerelle API unifiée mobile/web/mini-programmes, déploiement automatisé, permissions par rôles, notifications et paiements tiers.

[Dépôt beauty](https://github.com/Sunny-DotNet/beauty)

### Plateforme de live-streaming matricielle sans surveillance (mt)

- Construction d'une plateforme de live-streaming automatisée avec reprise automatique, diffusion distante, interaction par messages et analyse du comportement des spectateurs.
- .NET Core + SignalR pour le temps réel, Quartz.NET pour la planification et Docker pour les déploiements élastiques.
- Intégration IA : SDK DashScope.Net pour Tongyi Qianwen, dify et Ollama pour réponses automatiques, génération de contenu et planification de scripts métier.
- Opérations automatisées multi-plateformes et multi-comptes avec traitement haute concurrence conteneurisé.

[Dépôt mt](https://github.com/Sunny-DotNet/mt)

### Plateforme de reconnaissance visuelle (Vision)

- Traitement d'image avec OpenCV for .NET/Emgu CV, OCR Tesseract et intégration de modèles ML.NET.
- Architecture microservices ABP avec multi-tenant, permissions fines et couches DDD modulaires.
- Frontend découplé Blazor/Vue, tests automatisés et déploiement avec Docker.

[Dépôt Vision](https://github.com/Sunny-DotNet/Vision)

### Robotique embarquée et assemblage IoT

- Contrôle de servos, bras robotisés et capteurs sur Arduino, combiné à l'impression 3D open source pour l'assemblage modulaire.
- Interconnexion de modules microcontrôleurs pour interaction vocale simple, décisions d'actions robotiques, mises à jour en ligne et collaboration multitâche.
- Applications dans l'éducation et les expositions intelligentes.

### Systèmes métier d'entreprise avec ABP

- Pratique approfondie d'ABP Framework sur GuorunAbp, OpenHub, Soobn.Music et d'autres projets.
- DDD modulaire avec couches Application/Core/EntityFrameworkCore/Web complètes.
- Support multi-base, authentification IdentityServer, permissions fines et multi-tenant.
- Tâches de fond HangFire, cache distribué Redis et push temps réel SignalR.
- Développement frontend Vue 3/Blazor pour des domaines métier variés.

### Plateforme de tests automatisés Selenium WebDriver

- Tests E2E UI automatisés avec rapports Allure, intégrés à GitHub Actions CI/CD pour l'acceptation.
- Automatisation navigateur Puppeteer/Selenium pour tests de régression et collecte de données.

---

## Formation

Université ouverte nationale de Chine<br>
Spécialité : gestion de l'information informatique

---

## Certifications

- **Foundational C# with Microsoft**<br>
  freeCodeCamp · Délivré : octobre 2025<br>
  ID de certification : sunny-dotnet-fcswm

---

## Points forts

- Transforme des idées complexes en systèmes opérationnels : livraison de bout en bout, de l'ingestion de données à l'architecture backend, l'interface frontend, l'orchestration d'équipements et le déploiement automatisé.
- Convertit l'expérience d'ingénierie en produits réutilisables : conception et publication indépendantes de SDK NuGet avec typage fort, API asynchrones, injection de dépendances, multi-ciblage et documentation multilingue.
- Forte capacité d'intégration transverse : combine données haute concurrence, modèles IA, protocoles matériels, visualisation 3D et workflows métier en solutions stables.
- Culture d'ingénierie open source : projets publics, pipelines automatisés et documentation continue démontrent jugement technique et maintenabilité à long terme.

---

## Open source et communauté

- Plus de 70 dépôts GitHub publics couvrant SDK, big data, IA, IoT, automatisation, 3D, mini-programmes et plus encore.
- Publication de plusieurs packages NuGet open source avec documentation multilingue (chinois/anglais/japonais/français) pour les développeurs .NET du monde entier.
- Participation continue aux communautés techniques et aux échanges sectoriels.

---

## Langues

- Chinois (langue maternelle)
- Anglais (lecture de documentation et ressources techniques)

---

> Pour plus de projets et de détails techniques, consultez mon profil GitHub [Sunny-DotNet](https://github.com/Sunny-DotNet). N'hésitez pas à me contacter pour ajouter des points forts ou adapter le CV.
