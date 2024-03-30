import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 96rem;
    //max-width: 96rem;
    font-size: ${theme.font.sizes.medium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `}
`;
