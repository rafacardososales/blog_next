import styled from 'styled-components';
import { css } from 'styled-components';

export const Container1 = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    font-size: ${theme.font.sizes.medium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
    background-color: #292929; /* Cor de fundo do container */
    border-radius: 15px;
    padding: 20px;
    height: 30rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Alinha à esquerda */
    align-items: flex-start; /* Alinha à esquerda */
  `}
  @media (max-width: 1200px) {
    height: 35rem;
  }
  @media (max-width: 992px) {
    height: 30rem;
    padding: 15px;
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
    width: 90%;
  }
  @media (max-width: 576px) {
    width: 100%;
    padding: 5px;
  }
`;

export const Title = styled.h2`
  color: #fff; /* Cor do texto */
  margin-bottom: 20px;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ccc; /* Cor de fundo da barra de busca */
  border-radius: 25px;
  padding: 5px 10px;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  @media (max-width: 768px) {
    padding: 5px;
    font-size: 14px;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  @media (max-width: 768px) {
    gap: 5px;
  }

  a {
    background-color: #e74c3c; /* Cor de fundo dos botões */
    color: white;
    border: none;
    border-radius: 15px;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c0392b;
    }

    @media (max-width: 768px) {
      padding: 5px 10px;
    }
  }
`;

export const Tag = styled.button`
  background-color: #e74c3c; /* Cor de fundo dos botões */
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

export const TagLink = styled.a`
  background-color: #e74c3c; /* Cor de fundo dos botões */
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;
