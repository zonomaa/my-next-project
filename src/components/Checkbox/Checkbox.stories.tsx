import * as React from 'react';
import Checkbox from './Checkbox';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Components',
  decorators: [withKnobs],
  parameters: {
    info: { inline: true },
  },
};

export const CheckboxComponent = () => (
  <Checkbox
    name={text('Name', 'hoge')}
    text={text('Checkbox', 'Checkbox')}
    checked={boolean('Checked', false)}
    color={text('Color', '#000')}
    register={null}
    selectedColor={text('SelectedColor', '#337ab7')}
  />
);
