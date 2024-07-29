import CategoryPage from '@/src/containers/CategoryPage/Index';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { PostData } from '@/src/domain/posts/post';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <CategoryPage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const category = ctx.query.category;
  if (typeof category !== 'string') {
    return {
      notFound: true,
    };
  }

  const urlQuery = `&sort=id:desc&pagination[start]=0&pagination[limit]=60&filters[category][name][$containsi]=${category}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: { posts, category },
  };
};
