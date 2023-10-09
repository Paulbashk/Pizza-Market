import { renderApp } from '@/test/utils';
import { screen } from '@testing-library/react';
import { theme } from '@/shared/libs/assets/styles';
import userEvent from '@testing-library/user-event';
import React from 'react';
import RadioButton, { RadioColors } from './index';

describe('RadioButton', () => {
  it('should render with value and label text', () => {
    renderApp(<RadioButton value="radio" />);

    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('check prop: label', () => {
    const labelText = 'Radio Button';

    renderApp(<RadioButton value="radio" label={labelText} />);

    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it('check prop: label empty value', () => {
    const labelText = '';

    renderApp(<RadioButton value="radio" label={labelText} />);

    expect(screen.queryByLabelText(labelText)).not.toBeTruthy();
  });

  it('button color should be grey and default value', async () => {
    const labelText = 'Radio Button';

    renderApp(
      <RadioButton value="radio" label={labelText} color={RadioColors.gray} />,
    );

    const button = screen.getByRole('button');
    const label = screen.getByText(labelText);

    expect(label).toHaveStyle(`background-color: ${theme.colors.lightgray}`);
    expect(label).toHaveStyle(`color: ${theme.colors.black}`);

    expect(button).toHaveStyleRule('background-color', theme.colors.yellow, {
      modifier: 'label:hover',
    });

    expect(button).toHaveStyleRule('color', theme.colors.white, {
      modifier: 'label:hover',
    });

    expect(button).toHaveStyleRule('background-color', theme.colors.yellow, {
      modifier: 'input:checked + label',
    });

    expect(button).toHaveStyleRule('color', theme.colors.white, {
      modifier: 'input:checked + label',
    });
  });

  it('check prop: id, id must be in input, and in for must be label', () => {
    const labelText = 'Radio Button';
    const id = 'radio_id1';

    renderApp(
      <RadioButton
        value="radio"
        label={labelText}
        color={RadioColors.gray}
        id={id}
      />,
    );

    expect(screen.getByText(labelText)).toHaveAttribute('for', id);
    expect(screen.getByRole('radio')).toHaveAttribute('id', id);
  });

  it('checking similarity of id of label and input', () => {
    const labelText = 'Radio Button';

    renderApp(
      <RadioButton value="radio" label={labelText} color={RadioColors.gray} />,
    );

    const radio = screen.getByRole('radio');
    expect(screen.getByText(labelText)).toHaveAttribute('for', radio.id);
  });

  it('must be checked when the label is clicked', async () => {
    const user = userEvent.setup();

    const labelText = 'Radio Button';

    renderApp(
      <RadioButton value="radio" label={labelText} color={RadioColors.gray} />,
    );

    await user.click(screen.getByText(labelText));
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('must be unchecked when the label is clicked', async () => {
    const user = userEvent.setup();

    const labelText = 'Radio Button';

    renderApp(
      <RadioButton
        value="radio"
        label={labelText}
        color={RadioColors.gray}
        checked
      />,
    );

    expect(screen.getByRole('radio')).toBeChecked();

    await user.click(screen.getByText(labelText));
    expect(screen.getByRole('radio')).toHaveAttribute('checked', '');
  });
});
