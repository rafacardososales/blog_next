import { PostData } from '@/src/domain/posts/post';
import { Container } from './styles';
import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';
import { PostCard } from '@/src/components/PostCard';

export type HomeaPagaProps = {
  posts: PostData[];
};
export default function HomePage({ posts }: HomeaPagaProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              cover={post.attributes.cover}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
      </MainContainer>
    </>
  );
}
