import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.grid.gutter};
    margin: ${theme.spacings.medium} 0;
    list-style: none;

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
    `}

    ${media.greaterThan('large')`
      grid-template-columns: 1fr 1fr 1fr 1fr;
    `}

    .item {
      background-color: #fff;      
      box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px;
      border-radius: 6px;
      padding: ${theme.spacings.xsmall};
    }
  `}
`;
