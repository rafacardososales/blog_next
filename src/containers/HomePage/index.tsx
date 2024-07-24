import Head from 'next/head';
import { PostData } from '@/src/domain/posts/post';
import { Category, Container } from './styles';
import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';
import { PostCard } from '@/src/components/PostCard';
import { Footer } from '@/src/components/Footer';
import { SITE_NAME } from '@/src/config/app-config';
import { BannerTop } from '@/src/components/BannerTop/Index';
import AnimatedPage from '@/src/components/PageTransition';
import { SearchBottom } from '@/src/components/SearchBottom';
import { SliderDrink } from '@/src/components/SliderDrinks';
import { SliderBanner } from '@/src/components/SliderBanner/Index';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
      <AnimatedPage>
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
        <BannerTop />
        {category && <Category>Categoria: {category}</Category>}
        <MainContainer>
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
          <SliderBanner />
          <SliderDrink />
          <SearchBottom />
        </MainContainer>
        <Footer />
      </AnimatedPage>
    </>
  );
}
