/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  overflow: hidden;
  margin-top: 2rem;
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  img {
    max-width: auto; /* largura máxima 300px*/
    max-height: 200px; /* altura máxima */
    width: 100%; /* largura ocupando 100% do contêiner pai */
    height: 200px;
    display: block;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: white;
    }
    text-align: center;
    padding-bottom: 10px;
  `}
`;
