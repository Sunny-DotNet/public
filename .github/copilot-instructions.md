# Copilot Instructions

## Repository Purpose

This is a personal resume/profile repository containing bilingual (Chinese and English) Markdown resumes. There is no build system, tests, or application code.

## Architecture

- `Resume_zh-CN.md` — Chinese resume (primary, authoritative version)
- `Resume_en-US.md` — English resume (must stay in sync with the Chinese version)
- `README.md` — Repository landing page with links to both resumes

## Key Conventions

- **Bilingual sync**: Any content change must be applied to both `Resume_zh-CN.md` and `Resume_en-US.md` simultaneously. The two files must remain structurally parallel.
- **GitHub username**: The owner's GitHub username is `Sunny-DotNet` (formerly `m67186636`). Use `Sunny-DotNet` in all new GitHub links.
- **Contact info**: Email (`m67186636@gmail.com`) and Twitter (`m67186636`) still use the old handle — do not "fix" these.
- **LinkedIn**: Use `sunny-dotnet` (lowercase) for LinkedIn URLs.
- **Project links**: All GitHub repo links should point to `https://github.com/Sunny-DotNet/{repo}`.
- **SDK library table**: The "开源 .NET SDK 库" / "Open-Source .NET SDK Libraries" section uses a Markdown table format. New SDK entries should follow the same `| Name | Description | Highlights |` structure.
- **No work history**: The resume intentionally omits employer names and work timelines. Focus on projects instead.
