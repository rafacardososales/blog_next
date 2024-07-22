/* eslint-disable prettier/prettier */
import React from 'react';
import { Container1, SearchBarContainer, SearchInput, TagContainer, TagLink, Title } from './styled';
import Link from 'next/link';

export const SearchBottom = () => {
  return (
    <Container1>
      <Title>Qual é a receita de hoje?</Title>
      <SearchBarContainer>
        <SearchInput type="text" placeholder="Pesquisar..." />
      </SearchBarContainer>
      <TagContainer>
      <Link href="categories/aves" passHref>
          <TagLink>Aves</TagLink>
        </Link>
        <Link href="/carne" passHref>
          <TagLink>Carne</TagLink>
        </Link>
        <Link href="/massas" passHref>
          <TagLink>Massas</TagLink>
        </Link>
        <Link href="/saudaveis" passHref>
          <TagLink>Saudáveis</TagLink>
        </Link>
        <Link href="/sobremesas" passHref>
          <TagLink>Sobremesas</TagLink>
        </Link>
        <Link href="/bolos" passHref>
          <TagLink>Bolos</TagLink>
        </Link>
        <Link href="/drinks" passHref>
          <TagLink>Drinks</TagLink>
        </Link>
        <Link href="/salgados" passHref>
          <TagLink>Salgados</TagLink>
        </Link>
        <Link href="/caldos" passHref>
          <TagLink>Caldos</TagLink>
        </Link>
      </TagContainer>
    </Container1>
  );
};
