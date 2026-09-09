# SVFI-DOC zh ↔ en reference

## Navbar source of truth

Children arrays in `src/.vuepress/navbar/zh.ts` and `src/.vuepress/navbar/en.ts` list the **canonical** article order for the main sections. When adding pages, keep zh/en child lists aligned.

## Folder map

| Chinese (under `src/zh/`) | English (under `src/en/`) |
|---------------------------|---------------------------|
| `10-Getting-Started/10-Getting-Started/` | same |
| `10-Getting-Started/20-Related-Articles/` | same |
| `20-Manual/` | same |
| `25-Model-Spec/` | same |
| `30-FAQ/` | same |
| `40-Support/` | same |

Wiki-style articles (`01-image-quality.md`, `03-encoder.md`, `07-what-is-encode.md`, `08-what-is-hdr.md`) use `permalink: /zh/pages/wiki-*/` and `/en/pages/wiki-*/`.

## Filename pairing rule

Pair by identical path after `src/zh/` vs `src/en/` (e.g. `25-Model-Spec/10-vfi-models.md` or `30-FAQ/10-tips.md`).

Do not pair by Chinese/English title text.

## Permalink pattern

| Locale | Pattern |
|--------|---------|
| Chinese | `permalink: /zh/pages/<slug>/` |
| English | `permalink: /en/pages/<slug>/` |

Same `<slug>` for paired pages. Slug must be ASCII with no HTML-escaping needed.

## Static images

English UI screenshots use `/screenshots/en/...`. Chinese UI screenshots use `/screenshots/zh/...` with the same numeric prefix. Shared GIFs, compares, and third-party stills (`/demos/`, `/compare/`, `/external/...`) are the same path in both locales.
