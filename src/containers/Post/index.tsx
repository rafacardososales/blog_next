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
        <title>{post.attributes.title} - {SITE_NAME}</title>
        <meta
          name="description"
          content={removeHtml(post.attributes.content).slice(0, 150)}
        />
      </Head>
      <Header />
      <Container>
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
        <Comments title={post.attributes.title} slug={post.attributes.slug} />
      </Container>

    </>
  );
};
/*<Comments title={post.attributes.title} slug={post.attributes.slug} /> */
