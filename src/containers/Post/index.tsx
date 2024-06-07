import Head from 'next/head';

import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';
import { PostContainer } from '@/src/components/PostContainer';
import { PostDetails } from '@/src/components/PostDetails';
import { PostData } from '@/src/domain/posts/post';
import { removeHtml } from '@/src/utils/remove-html';
import { SITE_NAME } from '@/src/config/app-config';
import { Heading } from '@/src/components/Heading';
import { PostCover } from '@/src/components/PostCover';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  const postTitle = `${post.attributes.title} - ${SITE_NAME}`;
  return (
    <>
      <Head>
        <title>{postTitle}</title>
        <meta
          name="description"
          content={removeHtml(post.attributes.content).slice(0, 150)}
        />
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data.attributes.formats.medium.url}
          alt={post.attributes.title}
        />
        <PostDetails
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.category.data.attributes.name}
          date={post.attributes.createdAt}
        />
        <PostContainer content={post.attributes.content} />
      </MainContainer>
      <Footer />
    </>
  );
};
/*<Comments title={post.attributes.title} slug={post.attributes.slug} /> */
