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
  background: transparent;/* Aplicar desfoque para efeito fosco */
  padding: 8rem;
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
  text-align: center;

  a {
    display: inline-block;
    text-align: center;
  }

  img {
    display: block;
    object-fit: cover;
    margin: 0 auto 10px;
    width: 48rem;
    height: 35rem; /* Faz a altura se ajustar automaticamente */
    color: aquamarine;
    border-radius: 20%;

    @media (max-width: 768px) {
      width: 25rem;
      height: 20rem
    }

    @media (max-width: 480px) {
      width: 20rem;
      height: 18rem;
    }
  }


  span {
    display: block;
    color: white;
  }
  span:hover{
    color: #F6522C;
  }

  .Arrow {
    height: 42px;
    width: 25px;
    display: block;
    margin-top: 20px;
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
    width: 99%;
  }

  @media (max-width: 480px) {
    width: 99%;
    justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  }
`;
