/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerContent = styled.div`
  background: transparent;

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    display: none;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    display: none;
  }
`;

export const IconList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;
  margin-top: 20px;
  padding: 0;
  flex-wrap: wrap; /* Permite que os ícones se ajustem para telas menores */
`;

export const IconItem = styled.li`
  position: relative;
  text-align: center;
  flex: 0 0 auto;
  margin: 0 10px;
  max-width: 100%;

  a {
    display: inline-block;
    text-align: center;
    position: relative;
  }

  img {
    display: block;
    object-fit: cover;
    margin: 0 auto;
    width: 55rem;
    height: 40rem;
    color: aquamarine;
    border-radius: 5%;


    @media (max-width: 1600px) {
      width: 35rem; /* Ajuste específico para 17 polegadas */
    }

    @media (max-width: 1440px) {
      width: 35rem;
      height: 20rem;
    }

    @media (max-width: 1024px) {
      width: 25rem;
      height: 20rem;
    }

    @media (max-width: 768px) {
      width: 30rem;
      height: 20rem;
    }

    @media (max-width: 480px) {
      width: 18rem;
      height: 20rem;
    }
  }

  span {
    display: block;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: bold;
    font-size: 2rem;
    width: 100%;
    padding: 10px 0;
    margin-left: 1rem;
    text-align: start;
    border-radius: 0 0 15% 15%;
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
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
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
