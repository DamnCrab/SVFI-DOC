---
name: svfi-doc-zh-en-sync
description: Aligns English VuePress docs under src/en with Chinese src docs using git diff as the driver. Resolves zh→en file mapping by section folders and numeric filename prefixes, mirrors structure and frontmatter (permalink, title), and translates body updates. Use when editing SVFI-DOC, syncing locales after Chinese markdown changes, or when the user asks to update en from src diff or keep zh/en documentation consistent.
---

# SVFI-DOC Chinese → English doc sync

## When to use

- The user changed Markdown under `src/` (excluding or including `src/en`) and wants `src/en/` to stay equivalent.
- You are asked to apply `git diff` results to update English pages.

Repository root: **SVFI-DOC** (run all git commands there).

## Workflow

### 1) Collect changed source files

From repo root:

```bash
git diff --name-only HEAD -- "src/**/*.md"
```

If staging matters, also check:

```bash
git diff --cached --name-only -- "src/**/*.md"
```

Include paths under `src/.vuepress` only if the task explicitly includes theme/nav copy (usually skip).

### 2) Filter to Chinese-driven updates

- **Primary sources**: changed files under `src/` **not** under `src/en/` (Chinese pages and `src/index.md`).
- **Skip** as drivers: changes only inside `src/en/` unless the goal is to backport wording into zh (out of scope for this skill).
- **`src/index.md`**: treat as paired with `src/en/index.md`.

### 3) Resolve the English target file

Use **top-level folder map** + **numeric prefix** `NN.` on the basename:

| Chinese folder (under `src/`) | English folder (under `src/en/`) |
|------------------------------|-----------------------------------|
| `10.快速入门` | `10.Getting Started` |
| `20.指南` | `20.Manuals` |
| `30.常见问题解答` | `30.FAQ` |
| `40.支持` | `40.Support` |

**Nested `10.快速入门`:**

- `10.快速入门/10.快速入门/<NN>.*.md` → `10.Getting Started/10.Getting Started/<NN>.*.md`  
  Pick the English file whose basename starts with the same `NN.` (titles differ by language).

**`20.指南`:**

- `20.指南/<NN>.*.md` → `20.Manuals/<NN>.*.md` (same rule: match `NN.` only).

**`30.常见问题解答` / `40.支持`:**

- `30.常见问题解答/<NN>.*.md` → `30.FAQ/<NN>.*.md`
- `40.支持/<NN>.*.md` → `40.Support/<NN>.*.md`

If no file with that `NN.` exists under the English tree, open [reference.md](reference.md) and search the repo for an `permalink` match (next section).

### 4) Permalink and orphan pages

- Read Chinese frontmatter `permalink: /pages/...`.
- The English counterpart should use `permalink: /en/pages/...` (same path after `/pages/`).
- Search under `src/en`:

```bash
# example slug
rg "permalink: /en/pages/<slug>/" src/en
```

If **no** English file exists (common for older `10.快速入门/20.相关文章（科普）/` wiki articles), **report the gap** to the user: zh changed but there is no mirrored `src/en` page yet. Do not invent a folder layout without their confirmation; optional follow-up is to add a new English page and navbar entry in `src/.vuepress/navbar/en.ts` when they ask.

### 5) Apply edits to English

For each resolved pair:

1. Read the **current** Chinese file and the **current** English file.
2. Compare mentally (or with diff) to the **previous** revision if needed: `git diff HEAD -- "<zh-path>"`.
3. Update the English file so that:
   - **Structure** matches: same heading levels, lists, tables, `::: tip/note` blocks, code fences, Mermaid blocks.
   - **Body** is natural English equivalent of the new zh meaning (not literal machine translation if it harms clarity).
   - **Frontmatter**:
     - `title`: English title consistent with the page.
     - `permalink`: `/en/pages/...` matching the zh slug as above.
     - Copy other keys (e.g. `sidebar`, `toc`) from the zh file unless English historically differed—prefer **parity** with zh unless a comment or user says otherwise.
4. **Images and static assets**: English pages often use `/Statics/en/...` while zh uses `/Statics/...`. When updating text, **keep English asset paths**; if zh adds a new image, place the English version under the same `/Statics/en/` convention used by sibling English pages (see existing files in the same folder).

### 6) Navbar consistency (optional)

If you **add** a new Chinese page and a new English page, mirror the link in:

- `src/.vuepress/navbar/zh.ts`
- `src/.vuepress/navbar/en.ts`

Order of `children` entries should stay aligned between locales.

### 7) Verify

- Run the docs dev/build command from project `package.json` if available.
- Grep for broken internal links: English pages should point to `/en/pages/...` where the site expects English routes.

## Examples

**Example A**: `git diff` shows `src/20.指南/22.模型选择说明.md` changed.

- Map to `src/en/20.Manuals/22.Model Spec.md`.
- Read diff and zh file; update `22.Model Spec.md` to match structure and translate new paragraphs.

**Example B**: `src/index.md` changed.

- Update `src/en/index.md` accordingly (hero links, bullet lists, paths prefixed with `/en/` where appropriate).

## Additional resources

- Folder quirks and wiki pages without en mirrors: [reference.md](reference.md)
