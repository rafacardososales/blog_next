import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacings.large} 0;
`;

export const PreviousLink = styled.div`
  .custom-link {
    color: blue; /* Substitua pela cor desejada */
    text-decoration: none; /* Remove o sublinhado, se desejado */
  }

  .custom-link:hover {
    color: darkblue; /* Cor ao passar o mouse */
  }
`;
export const NextLink = styled.div`
  margin-left: auto;
`;
