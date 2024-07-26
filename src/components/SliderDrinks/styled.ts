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
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aplicar desfoque para efeito fosco */
  padding: 8rem;
  h5 {
    margin: 0;
    padding: 10px;
    font-size: 2rem; /* Aumentar tamanho da fonte */
    color: #F6522C;
    border-radius: 5px;
    margin-left: 10rem;
    margin-bottom: 2rem;
  }
`;

export const IconList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  justify-content: center;
  margin-top: 2px;
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
    width: 180px;
    height: 180px;
    color: aquamarine;
    border-radius: 50%;
  }

  span {
    display: block;
    color: white;
  }
  span:hover {
    color: #f6522c;
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
  width: 95%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`;
