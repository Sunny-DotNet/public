import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const sourcePath = path.join(rootDir, 'data', 'resume.yaml');

const source = YAML.parse(fs.readFileSync(sourcePath, 'utf8'));
const locales = Object.keys(source.locales ?? {});

if (locales.length === 0) {
  throw new Error('No locales defined in data\\resume.yaml.');
}

const localized = (map, locale, context) => {
  const value = map?.[locale];
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Missing ${context} for locale ${locale}.`);
  }

  return value.trim();
};

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

for (const locale of locales) {
  const fileName = source.locales[locale]?.file;
  if (typeof fileName !== 'string' || fileName.trim() === '') {
    throw new Error(`Missing output file for locale ${locale}.`);
  }

  fs.writeFileSync(path.join(rootDir, fileName), renderResume(locale), 'utf8');
  console.log(`Generated ${fileName}`);
}
