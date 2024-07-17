import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.medium};
    justify-content: center;
    align-items: center; /* Centraliza os itens verticalmente */
    text-align: center;
  `}

  img {
    color: ${({ theme }) => theme.colors.white};
    height: 40px;
    width: 80px;
  }

  input {
    padding: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border: 1px solid color coral;
    border-radius: 30px;
    background: white;
    color: black;
    margin-left: 1rem;
    width: 300px;
  }

  input:focus {
    outline: none;
    border-color: #ff4081;
  }
`;
