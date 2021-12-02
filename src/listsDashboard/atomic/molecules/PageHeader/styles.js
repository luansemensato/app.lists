import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0;

    h1 {
      margin-bottom: ${theme.spacings.xxxsmall};
    }
  `}
`;
