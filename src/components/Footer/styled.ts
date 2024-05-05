import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.medium};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`;
