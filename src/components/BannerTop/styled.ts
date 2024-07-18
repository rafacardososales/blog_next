/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  background-image: url('bannertop.png');
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
  margin: 0 20px;
  text-align: center;

  a {
    display: inline-block;
    text-align: center;
  }

  img {
    display: block;
    margin: 0 auto 10px;
    width: 86px;
    height: 86px;
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
