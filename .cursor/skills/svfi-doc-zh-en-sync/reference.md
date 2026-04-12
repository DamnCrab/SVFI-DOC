# SVFI-DOC zh ↔ en reference

## Navbar source of truth

Children arrays in `src/.vuepress/navbar/zh.ts` and `src/.vuepress/navbar/en.ts` list the **canonical** article order for the main sections. When adding pages, keep zh/en child lists aligned.

## `10.快速入门` subfolders

- `10.快速入门/10.快速入门/` mirrors `en/10.Getting Started/10.Getting Started/` (five articles: `10.` … `50.`).
- `10.快速入门/20.相关文章（科普）/` contains extra wiki-style articles (`01.`, `03.`, `07.`, `08.`). They use `permalink: /pages/wiki-*/`. There may be **no** `src/en` file with `/en/pages/wiki-*/` yet. Treat as **unpaired** until an English page is added.

## Filename pairing rule

Always pair by:

1. Top-level mapped folder (see SKILL.md table).
2. Basename leading token `NN.` (digits + dot), e.g. `22.模型选择说明.md` ↔ `22.Model Spec.md`.

Do not pair by full Chinese/English title text.

## Permalink pattern

| Locale | Pattern |
|--------|---------|
| Chinese | `permalink: /pages/<slug>/` |
| English | `permalink: /en/pages/<slug>/` |

Same `<slug>` for paired pages.

## Static images

English docs typically reference assets under `/Statics/en/...`. Chinese docs may use `/Statics/...` without `en`. Preserve locale-specific paths when syncing body text.
