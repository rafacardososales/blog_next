/* eslint-disable prettier/prettier */
import { theme } from '@/src/styles/theme';
import styled from 'styled-components';


export const BannerFooter = styled.div`
    background-image: url('bannerFooter.png');
    background-size: fill;
    background-position: center; /* Centraliza a imagem no banner */
    height: 700px;
    flex-direction: column;
    justify-content: space-between;

    .BANimg {
        position: relative;
        margin-top: 4rem; /* Coloca a imagem no topo */
        margin-bottom: 4.4rem;
        left: 50%; /* Move a imagem para o centro horizontalmente */
        transform: translateX(-50%); /* Ajusta o deslocamento da imagem para centralizá-la */
        max-width: 100%;
        height: auto;
    }

    /* Media queries para tamanhos de tela diferentes */
    @media (max-width: 1200px) {
        height: 600px;
    }

    @media (max-width: 992px) {
        height: 500px;
    }

    @media (max-width: 768px) {
        height: 400px;
        .BANimg {
            width: 80%;
        }
    }

    @media (max-width: 576px) {
        height: 300px;
        .BANimg {
            width: 70%;
        }
    }

`;


export const FooterWrapper = styled.footer`
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.large};
  background: rgba(0, 0, 0, 0.6); /* Fundo semi-transparente com um tom claro */
  backdrop-filter: blur(4px);
  color: white;
  padding: 2rem 0;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: left;
`;

export const FooterColumn = styled.div`
  flex: 1;
  margin: 3rem;

  & h4 {
    margin-bottom: 1rem;
  }

  & ul {
    list-style: none;
    padding: 0;
  }

  & li {
    margin: 0.5rem 0;
  }

  & a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #f6522c;
    }
  }
`;

export const FollowUs = styled.div`
  text-align: start;
  margin-top: 2rem;

  & img {
    margin: 0 0.5rem;
    width: 32px;
    height: 32px;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: self-start;
  margin-top: 2rem;

  & input[type="email"] {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    margin-right: 1rem;
    width: 250px;
    background-color: #858585;
  }

  & button {
    padding: 0.5rem 1rem;
    background-color: #f6522c;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e14c1f;
    }
  }
`;

export const FooterBottom = styled.div`
display: flex;
justify-content: space-between;
  text-align: center;
  margin: 3rem;
  border-top: 1px solid #444;
  padding-top: 1rem;
  .red-heart {
  color: red;
}
`;
