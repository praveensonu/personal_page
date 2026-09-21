# Academic Research Website

A minimal, fully static academic profile and Markdown blog built with Astro. The profile, biography, affiliations, contact links, publications, and CV are maintained from Praveen Bushipaka's supplied curriculum vitae.

## Install and run

Requires Node.js 20.3 or newer.

```bash
npm install
npm run dev
```

For a production check, run `npm run build`, then optionally `npm run preview`. The generated static site is written to `dist/`.

## Customize the profile

Edit `src/data/profile.ts`, the single source for name, title, institution, biography, email, social links, CV, profile image, and research interests. Replace `https://example.com` in `astro.config.mjs` with the deployed URL.

To add a photo, put it in `public/` (for example `public/profile.jpg`) and set `profileImage: '/profile.jpg'`. A square image at least 600 × 600 pixels works well.

The current CV is stored at `public/Praveen_Bushipaka_CV.pdf`. Replace that file with a newer PDF using the same filename to update the navigation and profile links without changing code.

## Add publications

Edit `src/data/publications.ts`. Records support title, authors, venue, year, status, description, thumbnail, and Paper/Code/Project/arXiv/BibTeX links. Set `selected: true` to show one on the homepage. Use the exact `profile.name` value in the authors list to highlight your name. The data can later power a separate publications page unchanged.

## Publish a blog post

1. Create `src/content/blog/my-post.md`.
2. Add frontmatter:

   ```yaml
   ---
   title: "My post title"
   description: "A concise summary for previews and SEO."
   date: 2026-09-21
   tags:
     - llms
     - interpretability
   draft: false
   ---
   ```

3. Write Markdown below it.
4. Run `npm run build` to validate it.
5. Commit and push; the host rebuilds automatically.

Drafts are omitted from routes, the index, and RSS. Published posts sort newest first. Headings, lists, links, images, tables, quotes, inline code, and syntax-highlighted fenced code blocks work out of the box. See the example post.

## Project map

```text
src/components/       Reusable UI components
src/content/blog/     Markdown blog posts
src/data/             Profile and publication data
src/layouts/          Shared page and article layouts
src/pages/            Astro routes and RSS feed
src/styles/           Responsive global styling
public/               Static images, CV, and favicon
```

## Deploy to Vercel

Push to a Git provider and import the repository in Vercel. It detects Astro automatically. If prompted, use `npm run build` and output directory `dist`. No server adapter is needed. Update `site` in `astro.config.mjs` before the final deploy.

## Deploy to GitHub Pages

1. Set `site` in `astro.config.mjs` to `https://YOUR-USERNAME.github.io`.
2. For a project repository, also add `base: '/REPOSITORY-NAME'`; this starter's root-relative links otherwise assume a root-domain deployment.
3. Follow [Astro's GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) to add the official workflow.
4. In repository settings choose Pages → Source → **GitHub Actions**, then push.

Netlify also auto-detects Astro; use `npm run build` and `dist`.
