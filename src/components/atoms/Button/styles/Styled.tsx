import styled from 'styled-components';

import { defaultButtonStyles } from './button';
import { wrapperStyles } from './wrapper';

export type ButtonTypes = {
  isLink?: boolean;
}

export const Button = styled.button<ButtonTypes>`
  ${defaultButtonStyles};

  border-color: ${(props) => (
    props.isLink ? 'red' : 'blue'
  )}
`;

export const Wrapper = styled.div`
  ${wrapperStyles};
`;
