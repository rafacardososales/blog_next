/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  background-size: fill;
  background-position: center;
  height: 100%;
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
  background: transparent; /* Aplicar desfoque para efeito fosco */
  padding: 8rem;

  @media (max-width: 768px) {
    padding: 4rem;
    display: none;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

export const IconList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  justify-content: center;
  margin-top: 20px;
`;

export const IconItem = styled.li`
  position: relative;
  text-align: center;

  a {
    display: inline-block;
    text-align: center;
    position: relative;
  }

  img {
    display: block;
    object-fit: cover;
    margin: 0 auto 10px;
    width: 48rem;
    height: 35rem;
    color: aquamarine;
    border-radius: 20%;

    @media (max-width: 768px) {
      width: 36rem;
      height: 26.25rem; /* Mantém a proporção */
    }

    @media (max-width: 480px) {
      width: 24rem;
      height: 17.5rem; /* Mantém a proporção */
    }
  }

  span {
    display: block;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
    padding: 10px 0; /* Ajuste conforme necessário */
    text-align: center;
    border-radius: 0 0 40% 40%; /* Bordas arredondadas combinando com a imagem */
    margin-bottom: 1.0rem;
    overflow: hidden; /* Adicionado */
    max-width: 100%; /* Adicionado */
  }

  span:hover {
    color: #F6522C;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

export const BannerSlider = styled.div`
  background: transparent;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`;
