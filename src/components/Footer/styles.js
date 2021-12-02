import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    text-align: center;

    a {
      display: block;
    }
  `}
`;
