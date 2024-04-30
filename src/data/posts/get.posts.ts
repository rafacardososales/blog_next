import { POST_URL } from '@/src/config/app-config';
import { PostData } from '@/src/domain/posts/post';
import { fetchJson } from '@/src/utils/fetch-json';
import { markdownToHtml } from '@/src/utils/markdown-to-html';

export const getPost = async (
  slug: string | string[] | undefined,
): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POST_URL}filters[slug][$eq]=${slugString}`;
  const jsonPost = await fetchJson<PostData[]>(url);
  const content = await markdownToHtml(jsonPost[0].attributes.content);
  const finalContent = { ...jsonPost[0] };
  finalContent.attributes.content = content;
  return [finalContent];
};
