import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export const PostCard = () => {
  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[slug]" as={'/post/${slug}'}></Link>
      </PostCardCover>
      <PostCardHeading></PostCardHeading>
    </Container>
  );
};
