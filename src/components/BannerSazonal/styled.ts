/* eslint-disable prettier/prettier */
import styled from 'styled-components';



export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  margin-top: 6rem;
  overflow: auto;
  border-radius: 35px;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    display:none;
  }
`;

export const TextContainer = styled.div`
margin-left: 5.5rem;
  flex: 1;
  padding: 2rem;
  display: block;
  flex-direction: column;
  justify-content: start;
  align-items:center;
  color: #333;

  h1 {
    font-size: 3.6rem;
  }

  p {
    font-size: 2rem;
    margin-top: 0.8rem;
    color: #666;
  }

  button {
    margin-top: 12rem;
    width: 80%;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-color: #ff4500; /* Cor do botão */
    color: #fff;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  background-color: transparent;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;
