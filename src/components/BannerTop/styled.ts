/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;

  .imgBanner{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
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
    margin: 0 auto 10px;
    width: 60px;
    height: 60px;
    color: aquamarine;
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
  width: 60%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 48%;
    justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  }
`;
