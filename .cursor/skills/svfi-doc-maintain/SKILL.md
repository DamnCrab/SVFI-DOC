---
name: svfi-doc-maintain
description: Maintains SVFI-DOC VuePress layout, permalinks, ASCII filenames, and the local docs:dev check. Use when adding or moving pages under src/zh or src/en, renaming markdown, editing navbar/sidebar, or previewing the SVFI documentation site.
---

# SVFI-DOC layout and preview

Repository root: **SVFI-DOC**.

## Layout

Chinese and English trees are siblings:

```
src/zh/<section>/<page>.md
src/en/<section>/<page>.md
```

Section folders (same names in both locales):

| Folder | Role |
|--------|------|
| `10-Getting-Started/10-Getting-Started/` | Getting started articles |
| `10-Getting-Started/20-Related-Articles/` | Related articles (wiki) |
| `20-Manual/` | User manuals |
| `30-FAQ/` | FAQ and presets |
| `40-Support/` | About / support |

Homepages: `src/zh/index.md`, `src/en/index.md`.

### Filenames

- ASCII kebab-case only: `22-model-spec.md`
- Keep the numeric prefix: `22-model-spec.md`
- No spaces, Chinese, `&`, or other characters that need HTML escaping
- Paired zh/en pages should share the same relative path after `src/zh/` and `src/en/` when both exist

Example: `src/20.指南/22.模型选择说明.md` → `src/zh/20-Manual/22-model-spec.md` (English: `src/en/20-Manual/22-model-spec.md`)

### Permalinks

```yaml
permalink: /zh/pages/<slug>/
permalink: /en/pages/<slug>/
```

`<slug>` must be ASCII (no characters that need HTML escaping). Paired pages share the same slug.

Do not use `/pages/<slug>/` without a locale prefix. VuePress locales are `/zh/` and `/en/`; `/` redirects via `autoLocale` (default `/zh/`).

### Moves

Rename or relocate docs with `git mv` so Git records the rename. Do not copy-delete.

## Navbar and sidebar

When adding a page, update both:

- `src/.vuepress/navbar/zh.ts` and `src/.vuepress/navbar/en.ts`
- `src/.vuepress/sidebar/zh.ts` and `src/.vuepress/sidebar/en.ts`

Keep `children` order aligned across locales. Paths are file paths under `src/`, e.g. `/zh/20-Manual/22-model-spec.md`.

## Preview

After editing markdown:

1. `git pull` if working on a shared branch
2. Edit the `md` files
3. Check the docs locally:

```powershell
$env:PATH = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
$env:Path = "C:\Program Files\nodejs;" + $env:Path; node -v; cd "D:\60-fps-Project\Projects\SVFI-DOC"; pnpm run docs:dev
```

4. Image width should be 600px
5. `git push` or open a PR

## Images

Put assets in `src/.vuepress/public/`. Prefer `/Statics/...` for Chinese pages and `/Statics/en/...` for English pages.
