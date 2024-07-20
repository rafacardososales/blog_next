/* eslint-disable prettier/prettier */
import styled from 'styled-components';


export const MainContainer = styled.div`
background-color: #373737;
height: 40rem;
display: flex;
  justify-content: start; /* Centraliza horizontalmente */
  align-items: center;
`

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #292929; /* Cor de fundo do container */
  border-radius: 15px;
  padding: 20px;
  width: 1106px;
  height: 246px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: #fff; /* Cor do texto */
  margin-bottom: 20px;
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
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  a{

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
`;
