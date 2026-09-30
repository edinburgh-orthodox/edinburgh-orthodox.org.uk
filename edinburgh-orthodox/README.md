# Edinburgh Orthodox Site

Initial implementation from the website mockups.

## Development

From the repository root:

```sh
hugo server --source edinburgh-orthodox
```

Open `http://localhost:1313/`.

## Production build

```sh
hugo --source edinburgh-orthodox --minify
```

The generated static site is written to `edinburgh-orthodox/public/`.

## Add a news post

Add a Markdown file directly under `content/news/`:

```toml
+++
title = "Parish feast"
date = 2026-09-02
description = "An optional short summary."
draft = false
+++

Write the post here using Markdown.
```

The filename becomes the URL. For example, `parish-feast.md` is published at
`/news/parish-feast/`. Hugo excludes drafts from production builds.

## Edit site pages

Most pages are plain Markdown files under `content/`:

- `content/clergy.md`
- Future pages such as `content/history.md`

Structured information is kept in `data/` when needed for layout templates:

- `data/churches.yaml` supplies the homepage and Our Churches page.
- `data/services.yaml` supplies the weekly services.
- `data/announcements.yaml` supplies the weekly announcements.
- `data/wishlist.yaml` supplies wishlist names and prices.
- `data/faq.yaml` supplies the FAQ questions and answers.

Navigation links are defined once in `hugo.toml` under `menus.main`.
