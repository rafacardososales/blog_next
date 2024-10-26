import { useRouter } from 'next/router';
import { Post } from '@/src/containers/Post';
import { countAllPosts } from '@/src/data/posts/count-all-posts';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { getPost } from '@/src/data/posts/get-posts';
import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Carregando....</div>;
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(
    `&pagination[start]=0&pagination[pagesize]=${numberOfPosts}`,
  );

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params?.slug);

  if (!posts || posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: posts[0] },
  };
};
