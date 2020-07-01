import React from 'react';
import CheckboxButton from 'components/Common/CheckboxButton';
import { CheckboxStyle, CheckboxStyleProps } from './style';
import { ReactHooksFormProps } from 'types/reactHookFormProps';
import { InputElementProps } from 'types/HTMLElementProps';

export type CheckboxProps = InputElementProps &
  ReactHooksFormProps &
  Partial<CheckboxStyleProps> & {
    text: string;
  };

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    text,
    color = '#000',
    selectedColor = '#337ab7',
    register,
    validation = {},
  } = props;
  return (
    <CheckboxStyle {...{ color, selectedColor }}>
      <input
        type="checkbox"
        value={text}
        ref={register ? register(validation) : null}
        {...props}
      />
      <CheckboxButton borderColor={color} checkColor={selectedColor} />
      <span>{text}</span>
    </CheckboxStyle>
  );
};

export default Checkbox;
