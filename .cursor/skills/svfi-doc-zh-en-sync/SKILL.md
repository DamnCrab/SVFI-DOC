---
name: svfi-doc-zh-en-sync
description: Aligns English VuePress docs under src/en with Chinese src/zh docs using git diff as the driver. Resolves zh→en file mapping by shared section folders and kebab-case filenames, mirrors structure and frontmatter (permalink, title), and translates body updates. Use when editing SVFI-DOC, syncing locales after Chinese markdown changes, or when the user asks to update en from src/zh diff or keep zh/en documentation consistent.
---

# SVFI-DOC Chinese → English doc sync

## When to use

- The user changed Markdown under `src/zh/` and wants `src/en/` to stay equivalent.
- You are asked to apply `git diff` results to update English pages.

Repository root: **SVFI-DOC** (run all git commands there).

Follow [svfi-doc-maintain](../svfi-doc-maintain/SKILL.md) for layout, permalink, and `docs:dev` rules.

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

- **Primary sources**: changed files under `src/zh/`.
- **Skip** as drivers: changes only inside `src/en/` unless the goal is to backport wording into zh (out of scope for this skill).
- **`src/zh/index.md`**: treat as paired with `src/en/index.md`.

### 3) Resolve the English target file

Paired pages use the **same relative path** after the locale folder:

| Chinese | English |
|---------|---------|
| `src/zh/10-Getting-Started/10-Getting-Started/<file>.md` | `src/en/10-Getting-Started/10-Getting-Started/<file>.md` |
| `src/zh/10-Getting-Started/20-Related-Articles/<file>.md` | `src/en/10-Getting-Started/20-Related-Articles/<file>.md` |
| `src/zh/20-Manual/<file>.md` | `src/en/20-Manual/<file>.md` |
| `src/zh/30-FAQ/<file>.md` | `src/en/30-FAQ/<file>.md` |
| `src/zh/40-Support/<file>.md` | `src/en/40-Support/<file>.md` |

If no English file exists, open [reference.md](reference.md) and search for a permalink match.

### 4) Permalink and orphan pages

- Read Chinese frontmatter `permalink: /zh/pages/<slug>/`.
- The English counterpart should use `permalink: /en/pages/<slug>/` (same slug).
- Search under `src/en`:

```bash
# example slug
rg "permalink: /en/pages/<slug>/" src/en
```

If **no** English file exists, **report the gap** to the user. Do not invent a folder layout without their confirmation; optional follow-up is to add a new English page and navbar entry in `src/.vuepress/navbar/en.ts` when they ask.

### 5) Apply edits to English

For each resolved pair:

1. Read the **current** Chinese file and the **current** English file.
2. Compare mentally (or with diff) to the **previous** revision if needed: `git diff HEAD -- "<zh-path>"`.
3. Update the English file so that:
   - **Structure** matches: same heading levels, lists, tables, `::: tip/note` blocks, code fences, Mermaid blocks.
   - **Body** is natural English equivalent of the new zh meaning (not literal machine translation if it harms clarity).
   - **Frontmatter**:
     - `title`: English title consistent with the page.
     - `permalink`: `/en/pages/<slug>/` matching the zh slug.
     - Copy other keys (e.g. `sidebar`, `toc`) from the zh file unless English historically differed—prefer **parity** with zh unless a comment or user says otherwise.
4. **Images and static assets**: English pages often use `/Statics/en/...` while zh uses `/Statics/...`. When updating text, **keep English asset paths**; if zh adds a new image, place the English version under the same `/Statics/en/` convention used by sibling English pages.

### 6) Navbar consistency (optional)

If you **add** a new Chinese page and a new English page, mirror the link in:

- `src/.vuepress/navbar/zh.ts`
- `src/.vuepress/navbar/en.ts`

Order of `children` entries should stay aligned between locales. Use `git mv` when relocating files.

### 7) Verify

- Run the docs preview command in [svfi-doc-maintain](../svfi-doc-maintain/SKILL.md).
- Grep for broken internal links: Chinese pages should point to `/zh/pages/...`; English pages to `/en/pages/...`.

## Examples

**Example A**: `git diff` shows `src/zh/20-Manual/22-model-spec.md` changed.

- Map to `src/en/20-Manual/22-model-spec.md`.
- Read diff and zh file; update the English file to match structure and translate new paragraphs.

**Example B**: `src/zh/index.md` changed.

- Update `src/en/index.md` accordingly (hero links, bullet lists, paths prefixed with `/en/` where appropriate).

## Additional resources

- Folder quirks and wiki pages without en mirrors: [reference.md](reference.md)
