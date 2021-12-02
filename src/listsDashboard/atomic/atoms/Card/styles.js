import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: #fff;      
    box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px;
    border-radius: 6px;
    padding: ${theme.spacings.xsmall};
  `}
`;
