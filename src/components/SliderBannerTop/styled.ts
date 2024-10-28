import { styled } from 'styled-components';

export const Banner = styled.div`
  width: 80%;
  height: 100%; /* Ajuste conforme necessário */
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  margin-top: 5rem;

  @media (max-width: 480px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const BannerContent = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const BannerSlider = styled.div`
  width: 100%; /* Garante que o slider ocupe toda a largura */
`;

export const IconItem = styled.div`
  text-align: center;
  justify-content: center;
  img {
    display: block;
    margin: 0 auto 10px;
    width: 100%;
    height: auto;
    //border: 2px solid rgba(255, 255, 255, 0.5); /* Borda branca translúcida */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra leve */
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
