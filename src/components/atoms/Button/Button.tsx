import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import Link from 'next/link';

import { Button as StyledButton, Wrapper } from './styles/Styled';

type ButtonBaseProps = {
  href?: string;
  color?: string;
  onClick?: () => void;
}

type ButtonProps = ButtonBaseProps & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>

export function Button(props: ButtonProps): JSX.Element {
  const {
    children, color, href, onClick,
  } = props;

  const isLink = !!href;

  const buttonElement = (
    <StyledButton
      as={isLink ? 'a' : 'button'}
      isLink={isLink}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );

  if (isLink) {
    return (
      <Wrapper>
        <Link href={href}>
          {buttonElement}
        </Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {buttonElement}
    </Wrapper>
  );
}
