/* eslint-disable prettier/prettier */

import { Header } from '@/src/components/Header';
import { PostData } from '@/src/domain/posts/post';
import {Container, MainContainerCategory } from './styled';
import { PostCard } from '@/src/components/PostCard';
import { SITE_NAME } from '@/src/config/app-config';
import Head from 'next/head';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export default function CategoryPage({ posts, category }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${SITE_NAME}` : SITE_NAME}</title>
        <meta
          name="description"
          content="Descubra uma coleção irresistível de receitas
         deliciosas para todos os gostos e ocasiões. Do simples ao sofisticado,
          explore pratos que vão inspirar suas criações culinárias.
           Encontre suas novas receitas favoritas aqui!"
        />
      </Head>
      <Header />
      <MainContainerCategory>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              cover={post.attributes.cover.data.attributes.formats.small.url}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
      </MainContainerCategory>
    </>
  );
}
