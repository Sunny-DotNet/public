# Copilot Instructions

## Repository Purpose

This is a personal resume/profile repository containing generated Markdown resumes in Chinese, English, Japanese, and French. The repository has lightweight Node.js generation tooling, but no application code.

## Architecture

- `data\resume.yaml` — authoritative structured profile source with localized section content
- `scripts\generate-resumes.mjs` — generator that renders Markdown resumes from the YAML source
- `Resume_zh-CN.md` — generated Chinese resume
- `Resume_en-US.md` — generated English resume
- `Resume_ja-JP.md` — generated Japanese resume
- `Resume_fr-FR.md` — generated French resume
- `README.md` — repository landing page with links to all resumes and generator instructions

## Key Conventions

- **Four-language sync**: Resume content changes must be made in `data\resume.yaml`, then regenerated with `npm run generate`. The four generated files must remain structurally parallel.
- **GitHub username**: The owner's GitHub username is `Sunny-DotNet` (formerly `m67186636`). Use `Sunny-DotNet` in all new GitHub links.
- **Contact info**: Email (`m67186636@gmail.com`) and Twitter (`m67186636`) still use the old handle — do not "fix" these.
- **LinkedIn**: Use `sunny-dotnet` (lowercase) for LinkedIn URLs.
- **Project links**: All GitHub repo links should point to `https://github.com/Sunny-DotNet/{repo}`.
- **SDK library table**: The "开源 .NET SDK 库" / "Open-Source .NET SDK Libraries" / Japanese / French equivalents use a Markdown table format. New SDK entries should follow the same `| Name | Description | Highlights |` structure in every locale.
- **No work history**: The resume intentionally omits employer names and work timelines. Focus on projects instead.
- **Generated files**: Do not hand-edit `Resume_*.md` for persistent content changes; update `data\resume.yaml` and rerun the generator.
