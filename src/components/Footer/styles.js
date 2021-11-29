import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    display: block;
    text-align: center;
    margin-top: ${theme.spacings.xlarge};
  `}
`;
