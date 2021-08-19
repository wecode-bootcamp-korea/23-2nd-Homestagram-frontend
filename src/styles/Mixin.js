import { css } from 'styled-components';

export const flexBox = (flex, none, nomal) => css`
  display: ${flex};
  justify-content: ${none};
  align-items: ${nomal};
`;
