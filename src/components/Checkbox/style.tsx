import styled from '@emotion/styled';

export interface CheckboxStyleProps {
  color: string;
  selectedColor: string;
}

export const CheckboxStyle = styled.label<CheckboxStyleProps>`
  display: inline-block;
  margin-right: 1rem;

  position: relative;
  cursor: pointer;
  padding-left: 1.5rem;
  text-align: left;
  color: #333;
  margin-bottom: 0.5rem;

  &:hover i {
    color: ${(props) => props.selectedColor};
  }

  input {
    width: auto;
    opacity: 0.0001;
    position: absolute;
    left: 0.25rem;
    top: 0.5rem;
    margin: 0;
    padding: 0;
  }

  span {
    vertical-align: middle;
  }
`;
