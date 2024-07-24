/* eslint-disable prettier/prettier */
import React from 'react';
import { Container1, SearchBarContainer, SearchInput, TagContainer, TagLink } from './styled';
import Link from 'next/link';

export const SearchBottom = () => {
  return (
    <Container1>
      <SearchBarContainer>
        <SearchInput type="text" placeholder="Qual é a receita de hoje?" />
      </SearchBarContainer>
      <TagContainer>
      <Link href="categories/aves" passHref>
          <TagLink>Aves</TagLink>
        </Link>
        <Link href="categories/carne" passHref>
          <TagLink>Carne</TagLink>
        </Link>
        <Link href="categories/massas" passHref>
          <TagLink>Massas</TagLink>
        </Link>
        <Link href="categories/saudaveis" passHref>
          <TagLink>Saudáveis</TagLink>
        </Link>
        <Link href="categories/sobremesas" passHref>
          <TagLink>Sobremesas</TagLink>
        </Link>
        <Link href="categories/bolos" passHref>
          <TagLink>Bolos</TagLink>
        </Link>
        <Link href="categories/drinks" passHref>
          <TagLink>Drinks</TagLink>
        </Link>
        <Link href="categories/salgados" passHref>
          <TagLink>Salgados</TagLink>
        </Link>
        <Link href="categories/caldos" passHref>
          <TagLink>Caldos</TagLink>
        </Link>
      </TagContainer>
    </Container1>
  );
};
