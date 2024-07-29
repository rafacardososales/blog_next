/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import HomePage from '@/src/containers/HomePage';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export type PageProps = {
  posts: PostData[];
};

export default function Page({ posts }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length) return <div>Pagina não encontrada...</div>;
  return <HomePage posts={posts}></HomePage>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = ctx.params?.param;

  if (!params || params.length < 1) {
    return {
      notFound: true,
    };
  }

  const page = Number(params[0]);
  const category = params[1] || '';

  if (isNaN(page)) {
    return {
      notFound: true,
    };
  }

  const postsPerPage = 20;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category ? `&filters[category][name][$containsi]=${category}` : '';
  const urlQuery = `&sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`;
  const posts = await getAllPosts(urlQuery);
  console.log(urlQuery);

  return {
    props: { posts },
    revalidate: 3,
  };
};
