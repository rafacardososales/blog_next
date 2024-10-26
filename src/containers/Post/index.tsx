/* eslint-disable prettier/prettier */
import Head from 'next/head';
import { Header } from '@/src/components/Header';
import { PostContainer } from '@/src/components/PostContainer';
import { PostDetails } from '@/src/components/PostDetails';
import { PostData } from '@/src/domain/posts/post';
import { SITE_NAME } from '@/src/config/app-config';
import { Heading } from '@/src/components/Heading';
import { PostCover } from '@/src/components/PostCover';
import { Comments } from '@/src/components/Comments';
import { removeHtml } from '@/src/utils/remove-html';
import { Container } from './styled';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>{post.title} - {SITE_NAME}</title>
        <meta
          name="description"
          content={removeHtml(post.content).slice(0, 150)}
        />
      </Head>
      <Header />
      <Container>
        <Heading>{post.title}</Heading>
        <PostCover
          coverUrl={post.cover.formats.medium.url}
          alt={post.title}
        />
        <PostDetails
          author={post.author.name}
          category={post.category.name}
          date={post.createdAt}
        />
        <PostContainer content={post.content} />
        <Comments title={post.title} slug={post.slug} />
      </Container>

    </>
  );
};
/*<Comments title={post.attributes.title} slug={post.attributes.slug} /> */
