import { POST_URL } from '@/src/config/app-config';
import { PostData } from '@/src/domain/posts/post';
import { fetchJson } from '@/src/utils/fetch-json';
import { markdownToHtml } from '@/src/utils/markdown-to-html';

export const getPost = async (
  slug: string | string[] | undefined,
): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POST_URL}populate=*&filters[slug][$eq]=${slugString}`;

  const jsonPost = await fetchJson<PostData[]>(url);

  if (jsonPost && jsonPost[0] && jsonPost[0].content) {
    let content = '';

    // Caso o conteúdo seja um array de objetos
    if (Array.isArray(jsonPost[0].content)) {
      for (const item of jsonPost[0].content) {
        content += await markdownToHtml(item.text);
      }
    } else {
      // Caso o conteúdo não seja um array
      content = await markdownToHtml(jsonPost[0].content);
    }

    const finalContent = { ...jsonPost[0] };
    finalContent.content = content;

    return [finalContent];
  }

  return [];
};
