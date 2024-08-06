/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import HomePage from '@/src/containers/HomePage';
import { countAllPosts } from '@/src/data/posts/count-all-posts';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { PaginationData } from '@/src/domain/posts/pagination';
import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts || posts.length === 0) return <div>Página não encontrada...</div>;

  return <HomePage posts={posts} category={category} pagination={pagination} />;
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

  const postsPerPage = 2;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category ? `&filters[category][name][$containsi]=${category}` : '';
  const urlQuery = `&sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`;
  const posts = await getAllPosts(`${urlQuery}`);
  console.log(urlQuery);

  const numberOfPostsResponse =  Number(await countAllPosts(categoryQuery));
  const numberOfPosts = !isNaN(numberOfPostsResponse) ? numberOfPostsResponse : 0;
  console.log(numberOfPosts);
  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category,
  };

  return {
    props: { posts, pagination, category },
    revalidate: 3,
  };
};
