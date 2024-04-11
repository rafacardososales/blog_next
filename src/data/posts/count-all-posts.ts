import { POST_URL } from '@/src/config/app-config';
import { POST_URL } from '@/src/config/app-config';
import { fetchJson } from '@/src/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POST_URL}/count${query}`;
  const numberOfPosts = await fetchJson<string>(url);
  return numberOfPosts;
};
