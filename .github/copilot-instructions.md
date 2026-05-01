# Copilot Instructions

## Repository Purpose

This is a personal resume/profile repository containing generated Markdown and static HTML resumes in Chinese, English, Japanese, and French. The repository has lightweight Node.js generation tooling, but no application code.

## Architecture

- `data\resume.yaml` — authoritative structured profile source with localized section content
- `scripts\generate-resumes.mjs` — generator that renders Markdown and static HTML resumes from the YAML source
- `index.html` — generated HTML landing page
- `resume.zh-Hans.html`, `resume.en.html`, `resume.ja.html`, `resume.fr.html` — generated language-specific HTML resumes
- `assets\resume.css` — shared responsive and print-friendly stylesheet for generated HTML pages
- `Resume_zh-Hans.md` — generated Chinese resume
- `Resume_en.md` — generated English resume
- `Resume_ja.md` — generated Japanese resume
- `Resume_fr.md` — generated French resume
- `README.md` — repository landing page with links to all resumes and generator instructions

## Key Conventions

- **Four-language sync**: Resume content changes must be made in `data\resume.yaml`, then regenerated with `npm run generate`. The generated Markdown and HTML files must remain structurally parallel.
- **Locale tags**: Use `zh-Hans`, `en`, `ja`, and `fr`. Chinese uses the script-specific tag because Simplified/Traditional variants may differ; the other languages use language-only tags.
- **GitHub username**: The owner's GitHub username is `Sunny-DotNet` (formerly `m67186636`). Use `Sunny-DotNet` in all new GitHub links.
- **Contact info**: Email (`m67186636@gmail.com`) and Twitter (`m67186636`) still use the old handle — do not "fix" these.
- **LinkedIn**: Use `sunny-dotnet` (lowercase) for LinkedIn URLs.
- **Project links**: All GitHub repo links should point to `https://github.com/Sunny-DotNet/{repo}`.
- **SDK library table**: The "开源 .NET SDK 库" / "Open-Source .NET SDK Libraries" / Japanese / French equivalents use a Markdown table format. New SDK entries should follow the same `| Name | Description | Highlights |` structure in every locale.
- **No work history**: The resume intentionally omits employer names and work timelines. Focus on projects instead.
- **Generated files**: Do not hand-edit `Resume_*.md`, `resume.*.html`, or `index.html` for persistent content changes; update `data\resume.yaml` and rerun the generator.
