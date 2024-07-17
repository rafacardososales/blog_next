/* eslint-disable prettier/prettier */
import styled from 'styled-components';


export const Banner = styled.div`
  width: 100%;
  background-image: url('bannertop.png');
  background-size: fill;
  background-position: center;
  height: 100%; /* Ajuste a altura conforme necessário */
  display: block;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerContent = styled.div`

  background: rgba(0, 0, 0, 0.6); /* Fundo semi-transparente com um tom claro */
  backdrop-filter: blur(4px); /* Aplicar desfoque para efeito fosco */
  padding: 8rem;
`;



export const IconList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none; /* Remove os marcadores de lista */
  padding: 0; /* Remove o preenchimento padrão da lista */
  justify-content: center; /* Centraliza os itens horizontalmente */
  margin-top: 20px;
`;

export const IconItem = styled.li`
  margin: 0 10px;
  flex-direction: row;
`;
