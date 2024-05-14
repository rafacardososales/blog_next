import { countAllPosts } from '@/src/data/posts/count-all-posts';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { getPost } from '@/src/data/posts/get-posts';
import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return (
    <>
      <p>{post.attributes.title}</p>
      <p dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
    </>
  );
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(
    // `/?populate=*&pagination[start]=0&pagination[pagesize]=${numberOfPosts}`,
    `&pagination[start]=0&pagination[pagesize]=${numberOfPosts}`,
  );
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params?.slug);

  return {
    props: { post: posts[0] },
  };
};
