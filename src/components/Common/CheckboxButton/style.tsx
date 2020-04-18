import styled from '@emotion/styled';

export interface CheckboxButtonStyleProps {
  borderColor?: string;
  checkColor?: string;
}

export const CheckboxButtonStyle = styled.i<CheckboxButtonStyleProps>`
  position: absolute;
  user-select: none;
  display: block;
  color: ${(props) => props.borderColor};
  left: 0;
  top: 0.25rem;
  width: 1rem;
  height: 1rem;
  z-index: 0;
  border: 0.125rem solid currentColor;
  border-radius: 0.0625rem;
  -webkit-transition: color 0.28s ease;
  transition: color 0.28s ease;
  will-change: color;

  &::before,
  &::after {
    position: absolute;
    height: 0;
    width: 0.2rem;
    background-color: ${(props) => props.checkColor};
    display: block;
    transform-origin: left top;
    border-radius: 0.25rem;
    content: '';
    transition: opacity 0.28s ease, height 0s linear 0.28s;
    opacity: 0;
    will-change: opacity, height;
  }

  &::before {
    top: 13px;
    left: 6px;
    transform: rotate(-135deg);
  }

  &::after {
    top: 7px;
    left: 0;
    transform: rotate(-45deg);
  }

  input[type='checkbox']:checked + & {
    color: ${(props) => props.borderColor};

    ::after,
    ::before {
      opacity: 1;
      transition: height 0.28s ease;
    }

    ::after {
      height: 0.5rem;
    }

    ::before {
      height: 1.2rem;
      transition-delay: 0.28s;
    }
  }
`;
