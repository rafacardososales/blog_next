/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { PaginationData } from '@/src/domain/posts/pagination';
import { Container, NextLink, PreviousLink } from './styled';
import Link from 'next/link';

export type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage,
  numberOfPosts,
  category,
  previousPage,
  postsPerPage,
}: PaginationProps) => {
    console.log(nextPage,
        numberOfPosts,
        category,
        previousPage,
        postsPerPage,)
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href="/post/page/[...param]">
            <a>Previous</a>
          </Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/post/page/[...param]">
            <a>Next</a>
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
