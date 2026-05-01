# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Personal resume/profile repository for a senior .NET developer (Sunny, based in Shenzhen). Contains Markdown resumes in four languages generated from a single YAML data source.

## Commands

```bash
npm install          # install dependencies (yaml package)
npm run generate     # regenerate all Resume_*.md files from data/resume.yaml
```

Node >= 18 required. No build, lint, or test tooling.

## Architecture

**Data-driven generation pipeline** — `data/resume.yaml` is the single source of truth. `scripts/generate-resumes.mjs` reads it and renders one Markdown file per locale. The generator iterates `locales` for output filenames, `sectionOrder` for section ordering, and calls `localized(map, locale, context)` to pull per-locale strings from each section's `title` and `body` maps.

Generated output files: `Resume_zh-CN.md`, `Resume_en-US.md`, `Resume_ja-JP.md`, `Resume_fr-FR.md`.

## Key Conventions

- **All content changes go through `data/resume.yaml`** — never hand-edit `Resume_*.md` for persistent changes. Update YAML, then `npm run generate`.
- **Four-language sync**: every locale key (`zh-CN`, `en-US`, `ja-JP`, `fr-FR`) must have a value in every localized map. Adding a new section or field means adding entries for all four locales.
- **GitHub username**: `Sunny-DotNet` (formerly `m67186636`). Use `Sunny-DotNet` in all GitHub links.
- **Contact info**: Email (`m67186636@gmail.com`) and Twitter (`m67186636`) still use the old handle — do not "fix" these.
- **LinkedIn**: use `sunny-dotnet` (lowercase) for LinkedIn URLs.
- **Project links**: all GitHub repo links point to `https://github.com/Sunny-DotNet/{repo}`.
- **SDK library table**: the "开源 .NET SDK 库" section uses a Markdown table with `| Name | Description | Highlights |` columns. Each locale has its own table — keep them structurally parallel.
- **No work history**: the resume intentionally omits employer names and work timelines. Focus on projects.
