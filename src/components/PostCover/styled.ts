import styled, { css } from 'styled-components';

export const Container = styled.img`
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  ${({ theme }) => css`
    max-width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
