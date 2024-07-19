import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.medium};
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  `}

  img {
    color: ${({ theme }) => theme.colors.white};
    height: 40px;
    width: 80px;
    margin-left: 80px;
  }

  input {
    padding: 1rem;
    font-size: 1.5rem;
    border: 1px solid coral;
    border-radius: 30px;
    background: white;
    color: black;
    width: 300px;
  }

  input:focus {
    outline: none;
    border-color: #ff4081;
  }

  @media (max-width: 768px) {
    img {
      height: 30px;
      width: 60px;
      margin-left: 10px;
    }

    input {
      font-size: 1.2rem;
      width: 250px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 25px;
      width: 50px;
      margin-left: 5px;
    }

    input {
      font-size: 1rem;
      width: 200px;
    }
  }
`;
