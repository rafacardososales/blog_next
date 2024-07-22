import { theme } from '@/src/styles/theme';
import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 100%;
    //max-width: 96rem;
    font-size: ${theme.font.sizes.medium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `}
  background-color: #373737;
  display: flex;
  flex-direction: column; /* Coloca os itens na vertical */
  justify-content: center;
  align-items: center;

  /* Responsividade */
  @media (max-width: 768px) {
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
  }

  @media (max-width: 480px) {
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
  }
`;
