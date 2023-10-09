import RadioButton from '@/shared/ui/RadioButton';
import { renderApp } from '@/test/utils';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import RadioGroup from './index';
import RadioGroupContext from './context';

describe('RadioGroup', () => {
  it('should render with radio, checking if the default value matches', () => {
    const valueChecked = 'radio1';

    renderApp(
      <RadioGroup defaultValue={valueChecked}>
        <RadioButton value={valueChecked} />
        <RadioButton value="radio2" />
        <RadioButton value="radio3" />
      </RadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3);

    const buttonChecked = screen.getAllByRole('radio')[0];

    expect(buttonChecked).toBeChecked();
  });

  it('should support number value', async () => {
    const user = userEvent.setup();

    renderApp(
      <RadioGroup defaultValue={1}>
        <RadioButton value={1} />
        <RadioButton value={2} label="Два" />
        <RadioButton value={3} />
      </RadioGroup>,
    );

    const radioes = screen.getAllByRole<HTMLInputElement>('radio');

    expect(radioes[0]).toHaveAttribute('value', '1');
    expect(radioes[0]).toBeChecked();

    await user.click(screen.getByText('Два'));

    expect(radioes[0]).toHaveAttribute('checked', '');
    expect(radioes[1]).toBeChecked();
  });

  it('checking the generation and matching of name by default', () => {
    renderApp(
      <RadioGroup defaultValue="radio1">
        <RadioButton value="radio1" />
        <RadioButton value="radio2" />
        <RadioButton value="radio3" />
      </RadioGroup>,
    );

    const radioes = screen.getAllByRole<HTMLInputElement>('radio');

    const radioFirstName = radioes[0].name;

    expect(radioFirstName).toEqual(radioes[1].name);
    expect(radioFirstName).toEqual(radioes[2].name);
  });

  it('prop check: name', () => {
    const name = 'testname';

    renderApp(
      <RadioGroup defaultValue="radio1" name={name}>
        <RadioButton value="radio1" />
        <RadioButton value="radio2" />
        <RadioButton value="radio3" />
      </RadioGroup>,
    );

    const radioes = screen.getAllByRole<HTMLInputElement>('radio');

    const radioFirstName = radioes[0].name;

    expect(radioFirstName).toEqual(radioes[1].name);
    expect(radioFirstName).toEqual(radioes[2].name);
  });

  it('when pressed, it should switch, remove the previous one', async () => {
    const user = userEvent.setup();

    renderApp(
      <RadioGroup defaultValue="radio2">
        <RadioButton value="radio1" label="radio1" />
        <RadioButton value="radio2" label="radio2" />
        <RadioButton value="radio3" label="radio3" />
      </RadioGroup>,
    );

    const radioes = screen.getAllByRole<HTMLInputElement>('radio');

    expect(radioes[1]).toBeChecked();

    await user.click(screen.getByText('radio3'));

    expect(radioes[1]).toHaveAttribute('checked', '');
    expect(radioes[2]).toBeChecked();
  });

  it('prop check: onChange', async () => {
    const user = userEvent.setup();
    const onMockChange = jest.fn();

    renderApp(
      <RadioGroup defaultValue="radio2" onChange={onMockChange}>
        <RadioButton value="radio1" label="radio1" />
        <RadioButton value="radio2" label="radio2" />
        <RadioButton value="radio3" label="radio3" />
      </RadioGroup>,
    );

    expect(onMockChange).toHaveBeenCalledTimes(0);

    await user.click(screen.getByText('radio3'));

    expect(onMockChange).toHaveBeenCalledTimes(1);
  });

  it('checking for an empty default value', async () => {
    const user = userEvent.setup();

    renderApp(
      <RadioGroup defaultValue="">
        <RadioButton value="radio1" />
        <RadioButton value="radio2" label="radio2" />
      </RadioGroup>,
    );

    const radioes = screen.getAllByRole<HTMLInputElement>('radio');

    expect(radioes[0]).not.toBeChecked();
    expect(radioes[1]).not.toBeChecked();

    await user.click(screen.getByText('radio2'));

    expect(radioes[0]).not.toBeChecked();
    expect(radioes[1]).toBeChecked();
  });

  it('should accept invalid child', () => {
    renderApp(
      <RadioGroup defaultValue="">
        <RadioButton value="" />
        {null}
      </RadioGroup>,
    );
  });

  it('check prop: onChange. should chain the onChange property', async () => {
    const user = userEvent.setup();
    const onMockChangeGroup = jest.fn();
    const onMockChange = jest.fn();

    renderApp(
      <RadioGroup defaultValue="radio2" onChange={onMockChangeGroup}>
        <RadioButton value="radio1" label="radio1" />
        <RadioButton value="radio2" label="radio2" />
        <RadioButton value="radio3" label="radio3" onChange={onMockChange} />
      </RadioGroup>,
    );

    expect(onMockChange).toHaveBeenCalledTimes(0);
    expect(onMockChangeGroup).toHaveBeenCalledTimes(0);

    await user.click(screen.getByText('radio3'));

    expect(onMockChange).toHaveBeenCalledTimes(1);
    expect(onMockChangeGroup).toHaveBeenCalledTimes(1);
  });

  describe('callbacks', () => {
    const RadioGroupController = React.forwardRef((_, ref) => {
      const radioGroup = React.useContext(RadioGroupContext);

      React.useImperativeHandle(ref, () => radioGroup, [radioGroup]);
      return null;
    });

    const RadioGroupControlled = React.forwardRef((props, ref) => (
      <RadioGroup defaultValue="zero" {...props}>
        <RadioGroupController ref={ref} />
      </RadioGroup>
    ));

    describe('onChange', () => {
      it('should set the value state', async () => {
        const radioGroupRef =
          React.createRef<React.ComponentProps<typeof RadioGroup>>();

        renderApp(<RadioGroupControlled ref={radioGroupRef} />);

        expect(radioGroupRef.current).toHaveProperty('value', 'zero');

        const setStateChange = (state: string) => {
          if (radioGroupRef.current) {
            if (radioGroupRef.current.onChange) {
              radioGroupRef.current.onChange(
                {
                  target: { value: state },
                  currentTarget: { value: state },
                } as React.ChangeEvent<HTMLInputElement>,
                state,
              );
            }
          }
        };

        act(() => {
          setStateChange('win');
        });

        expect(radioGroupRef.current).toHaveProperty('value', 'win');

        act(() => {
          setStateChange('roll');
        });

        expect(radioGroupRef.current).toHaveProperty('value', 'roll');
      });
    });
  });
});
