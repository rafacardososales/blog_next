import { PostData } from '@/src/domain/posts/post';
import { Container } from './styles';
import { Header } from '@/src/components/Header';

export type HomeaPagaProps = {
  posts: PostData[];
};
export default function HomePage({ posts }: HomeaPagaProps) {
  return (
    <>
      <Header />
      <Container>
        {posts.map((post) => (
          <h2 key={post.id}>{post.attributes.title}</h2>
        ))}
      </Container>
    </>
  );
}
