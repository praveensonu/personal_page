import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { profile } from '../data/profile';
const escapeXML = (value: string) => value.replace(/[<>&'\"]/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[char] ?? char));
export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const base = site ?? new URL('https://example.com');
  const items = posts.map((post) => `<item><title>${escapeXML(post.data.title)}</title><description>${escapeXML(post.data.description)}</description><link>${new URL(`/blog/${post.id}/`, base)}</link><guid>${new URL(`/blog/${post.id}/`, base)}</guid><pubDate>${post.data.date.toUTCString()}</pubDate></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>${escapeXML(profile.name)} — Blog</title><description>Notes on artificial intelligence, machine learning, and research.</description><link>${base}</link>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
