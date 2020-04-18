import * as React from 'react';

import { CheckboxButtonStyle, CheckboxButtonStyleProps } from './style';

const CheckboxButton: React.FC<CheckboxButtonStyleProps> = ({
  borderColor = '#000',
  checkColor = '#337ab7',
}) => <CheckboxButtonStyle {...{ borderColor, checkColor }} />;

export default CheckboxButton;
