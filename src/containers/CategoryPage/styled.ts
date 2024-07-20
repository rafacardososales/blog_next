/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const MainContainerCategory = styled.div`
    ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.medium};
  `}
  width: 100%;
  height: 100vh;
  background-color: #373737;
  display: block;
  justify-content: center;
  overflow: auto;

`;



export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 1rem; /* Adiciona padding para garantir que o conteúdo não toque as bordas da tela em dispositivos menores */

  @media (max-width: 1200px) {
    max-width: 100%; /* Para telas menores que 1200px, ocupa toda a largura da tela */
  }
`;

export const Category = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacings.medium} 0;
`;

export const AllPostsLinks = styled.a`
  display: block;
  text-align: center;
  margin: ${({ theme }) => theme.spacings.large} 0;
`;
