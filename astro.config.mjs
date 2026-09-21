import { defineConfig } from 'astro/config';

export default defineConfig({
  // Replace with your deployed URL for correct canonical and RSS links.
  site: 'https://example.com',
  markdown: { shikiConfig: { theme: 'github-light', wrap: true } },
});
