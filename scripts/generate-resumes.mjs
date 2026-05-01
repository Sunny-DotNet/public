import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import YAML from 'yaml';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const sourcePath = path.join(rootDir, 'data', 'resume.yaml');

const source = YAML.parse(fs.readFileSync(sourcePath, 'utf8'));
const locales = Object.keys(source.locales ?? {});
const languageNames = {
  'zh-Hans': '简体中文',
  en: 'English',
  ja: '日本語',
  fr: 'Français',
};

const interfaceText = {
  'zh-Hans': {
    title: 'Sunny-DotNet 简历',
    subtitle: '高级 .NET 技术专家与开源开发者',
    resume: '简历',
    viewHtml: '查看网页版',
    viewMarkdown: '查看 Markdown',
    print: '打印',
    source: '资料源',
    updated: '由 data\\resume.yaml 自动生成',
  },
  en: {
    title: 'Sunny-DotNet Resume',
    subtitle: 'Senior .NET Engineer & Open-Source Contributor',
    resume: 'Resume',
    viewHtml: 'View HTML',
    viewMarkdown: 'View Markdown',
    print: 'Print',
    source: 'Source',
    updated: 'Generated from data\\resume.yaml',
  },
  ja: {
    title: 'Sunny-DotNet 履歴書',
    subtitle: 'シニア .NET エンジニア / オープンソース開発者',
    resume: '履歴書',
    viewHtml: 'HTML を表示',
    viewMarkdown: 'Markdown を表示',
    print: '印刷',
    source: 'データソース',
    updated: 'data\\resume.yaml から自動生成',
  },
  fr: {
    title: 'CV Sunny-DotNet',
    subtitle: 'Ingénieur .NET senior et contributeur open source',
    resume: 'CV',
    viewHtml: 'Voir HTML',
    viewMarkdown: 'Voir Markdown',
    print: 'Imprimer',
    source: 'Source',
    updated: 'Généré depuis data\\resume.yaml',
  },
};

if (locales.length === 0) {
  throw new Error('No locales defined in data\\resume.yaml.');
}

marked.use({ gfm: true });

const localized = (map, locale, context) => {
  const value = map?.[locale];
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Missing ${context} for locale ${locale}.`);
  }

  return value.trim();
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const escapeAttribute = (value) => escapeHtml(value).replaceAll('`', '&#96;');

const ui = (locale, key) => interfaceText[locale]?.[key] ?? interfaceText.en[key];

const languageName = (locale) => languageNames[locale] ?? locale;

const htmlFile = (locale) => `resume.${locale}.html`;

const renderContact = (locale) => [
  `GitHub: [${source.contact.github.label}](${source.contact.github.url})<br>`,
  `Twitter: [${source.contact.twitter.label}](${source.contact.twitter.url})<br>`,
  `LinkedIn: [${source.contact.linkedin.label}](${source.contact.linkedin.url})<br>`,
  `${localized(source.labels.email, locale, 'email label')}: ${source.contact.email}`,
];

const renderResume = (locale) => {
  const lines = [
    `# ${localized(source.identity.name, locale, 'identity.name')}`,
    '',
    ...renderContact(locale),
    '',
  ];

  for (const sectionId of source.sectionOrder) {
    const section = source.sections?.[sectionId];
    if (!section) {
      throw new Error(`Section ${sectionId} is listed in sectionOrder but not defined.`);
    }

    lines.push('---', '', `## ${localized(section.title, locale, `${sectionId}.title`)}`, '');
    lines.push(localized(section.body, locale, `${sectionId}.body`), '');
  }

  lines.push('---', '', localized(source.footer, locale, 'footer'));
  return `${lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd()}\n`;
};

const renderLanguageLinks = (currentLocale) =>
  locales
    .map((locale) => {
      const activeClass = locale === currentLocale ? ' class="active" aria-current="page"' : '';
      return `<a${activeClass} href="${escapeAttribute(htmlFile(locale))}">${escapeHtml(languageName(locale))}</a>`;
    })
    .join('\n');

const renderContactHtml = (locale) => `
<ul class="contact-list">
  <li><a href="${escapeAttribute(source.contact.github.url)}">${escapeHtml(source.contact.github.label)}</a></li>
  <li><a href="${escapeAttribute(source.contact.twitter.url)}">${escapeHtml(source.contact.twitter.label)}</a></li>
  <li><a href="${escapeAttribute(source.contact.linkedin.url)}">${escapeHtml(source.contact.linkedin.label)}</a></li>
  <li><a href="mailto:${escapeAttribute(source.contact.email)}">${escapeHtml(localized(source.labels.email, locale, 'email label'))}: ${escapeHtml(source.contact.email)}</a></li>
</ul>`;

const renderSectionNav = (locale) =>
  source.sectionOrder
    .map((sectionId) => {
      const section = source.sections?.[sectionId];
      if (!section) {
        throw new Error(`Section ${sectionId} is listed in sectionOrder but not defined.`);
      }

      return `<a href="#${escapeAttribute(sectionId)}">${escapeHtml(localized(section.title, locale, `${sectionId}.title`))}</a>`;
    })
    .join('\n');

const renderHtmlSections = (locale) =>
  source.sectionOrder
    .map((sectionId) => {
      const section = source.sections?.[sectionId];
      if (!section) {
        throw new Error(`Section ${sectionId} is listed in sectionOrder but not defined.`);
      }

      return `<section id="${escapeAttribute(sectionId)}" class="resume-section">
  <h2>${escapeHtml(localized(section.title, locale, `${sectionId}.title`))}</h2>
  <div class="section-content">
${marked.parse(localized(section.body, locale, `${sectionId}.body`)).trim()}
  </div>
</section>`;
    })
    .join('\n\n');

const renderResumeHtml = (locale) => {
  const name = localized(source.identity.name, locale, 'identity.name');
  const markdownFile = source.locales[locale]?.file;

  return `<!doctype html>
<html lang="${escapeAttribute(locale)}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(name)} | ${escapeHtml(ui(locale, 'resume'))}</title>
  <link rel="stylesheet" href="assets/resume.css">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="index.html">Sunny-DotNet</a>
    <nav class="language-nav" aria-label="Language">
${renderLanguageLinks(locale)}
    </nav>
  </header>

  <main class="resume-layout">
    <aside class="sidebar">
      <h2>${escapeHtml(ui(locale, 'resume'))}</h2>
      <nav class="section-nav" aria-label="Resume sections">
${renderSectionNav(locale)}
      </nav>
      <div class="sidebar-actions">
        <a href="${escapeAttribute(markdownFile)}">${escapeHtml(ui(locale, 'viewMarkdown'))}</a>
        <button type="button" onclick="window.print()">${escapeHtml(ui(locale, 'print'))}</button>
      </div>
    </aside>

    <article class="resume-card">
      <section class="hero">
        <p class="eyebrow">${escapeHtml(languageName(locale))}</p>
        <h1>${escapeHtml(name)}</h1>
        <p class="subtitle">${escapeHtml(ui(locale, 'subtitle'))}</p>
${renderContactHtml(locale)}
      </section>

${renderHtmlSections(locale)}

      <footer class="resume-footer">
${marked.parse(localized(source.footer, locale, 'footer')).trim()}
        <p>${escapeHtml(ui(locale, 'updated'))}</p>
      </footer>
    </article>
  </main>
</body>
</html>
`;
};

const renderIndexHtml = () => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sunny-DotNet Resumes</title>
  <link rel="stylesheet" href="assets/resume.css">
</head>
<body>
  <main class="landing">
    <section class="landing-hero">
      <p class="eyebrow">Sunny-DotNet</p>
      <h1>Resumes / 简历</h1>
      <p>Generated from one YAML source into Markdown and static HTML pages.</p>
    </section>

    <section class="language-grid" aria-label="Resume languages">
${locales
  .map((locale) => {
    const markdownFile = source.locales[locale]?.file;
    return `      <article class="language-card">
        <h2>${escapeHtml(languageName(locale))}</h2>
        <p>${escapeHtml(localized(source.identity.name, locale, 'identity.name'))}</p>
        <div class="card-actions">
          <a href="${escapeAttribute(htmlFile(locale))}">${escapeHtml(ui(locale, 'viewHtml'))}</a>
          <a href="${escapeAttribute(markdownFile)}">${escapeHtml(ui(locale, 'viewMarkdown'))}</a>
        </div>
      </article>`;
  })
  .join('\n')}
    </section>
  </main>
</body>
</html>
`;

for (const locale of locales) {
  const fileName = source.locales[locale]?.file;
  if (typeof fileName !== 'string' || fileName.trim() === '') {
    throw new Error(`Missing output file for locale ${locale}.`);
  }

  fs.writeFileSync(path.join(rootDir, fileName), renderResume(locale), 'utf8');
  fs.writeFileSync(path.join(rootDir, htmlFile(locale)), renderResumeHtml(locale), 'utf8');
  console.log(`Generated ${fileName}`);
  console.log(`Generated ${htmlFile(locale)}`);
}

fs.writeFileSync(path.join(rootDir, 'index.html'), renderIndexHtml(), 'utf8');
console.log('Generated index.html');
