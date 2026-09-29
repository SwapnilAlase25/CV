import rss from '@astrojs/rss';
import { getPosts } from '../utils/content';
import { profile } from '../data/profile';

export async function GET(context) {
  const posts = await getPosts();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: `${profile.name} — Blog`,
    description: 'Writing on AI, machine learning, Edge AI and the journey from embedded systems.',
    site: new URL(`${base}/`, context.site),
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `${base}/blog/${p.id}/`,
    })),
  });
}
