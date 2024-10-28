/* eslint-disable prettier/prettier */

import { BannerWrapper, ImageContainer, TextContainer } from "./styled";



export const BannerSazonal = () => {
    return (
      <BannerWrapper>
        <TextContainer>
          <h1>Dica de <br></br><p style={{ color: "#ff4500" }}>Lanches fáceis</p></h1>
          <p>Comidas para fazer...</p>
          <button>SAIBA MAIS {">"}</button>
        </TextContainer>
        <ImageContainer>
          <img src="BannerSazonal.png" alt="Lanches fáceis" />
        </ImageContainer>
      </BannerWrapper>
    );
  };
