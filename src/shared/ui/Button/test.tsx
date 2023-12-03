import { screen } from '@testing-library/react';
import { theme } from '@/shared/libs/assets/styles';
import { renderApp } from '@/test/utils';
import { Button, ButtonColors } from '.';

describe('UI Button', () => {
  it('should render with content', () => {
    const { container } = renderApp(
      <Button color={ButtonColors.gray} isActive={false}>
        Привет мир
      </Button>,
      {},
    );

    expect(container).toMatchSnapshot();

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Привет мир');
  });

  it('should render gray hovered inactive', () => {
    const { container } = renderApp(
      <Button color={ButtonColors.gray} isActive={false}>
        Привет мир
      </Button>,
      {},
    );

    expect(container).toMatchSnapshot();

    const button = screen.getByRole('button');

    expect(button).toHaveStyle(`background-color: ${theme.colors.lightgray}`);
    expect(button).toHaveStyle(`color: ${theme.colors.dark}`);

    expect(button).toHaveStyleRule('background-color', theme.colors.dark, {
      modifier: ':hover',
    });
    expect(button).toHaveStyleRule('color', theme.colors.white, {
      modifier: ':hover',
    });
  });

  it('should render gray hovered active', () => {
    const { container } = renderApp(
      <Button color={ButtonColors.gray} isActive>
        Привет мир
      </Button>,
      {},
    );

    expect(container).toMatchSnapshot();

    const button = screen.getByRole('button');

    expect(button).toHaveStyle(`background-color:${theme.colors.dark}`);
    expect(button).toHaveStyle(`color: ${theme.colors.white}`);
    expect(button).toHaveStyle('opacity: 1');

    expect(button).toHaveStyleRule('opacity', '0.8', {
      modifier: ':hover',
    });
  });

  it('should render transparent hovered inactive', () => {
    const { container } = renderApp(
      <Button color={ButtonColors.transparent} isActive={false}>
        Привет мир
      </Button>,
      {},
    );

    expect(container).toMatchSnapshot();

    const button = screen.getByRole('button');

    expect(button).toHaveStyle('background-color: transparent');
    expect(button).toHaveStyle(`color: ${theme.colors.yellow}`);

    expect(button).toHaveStyleRule('background-color', theme.colors.yellow, {
      modifier: ':hover',
    });
    expect(button).toHaveStyleRule('color', theme.colors.white, {
      modifier: ':hover',
    });
  });

  it('should render transparent hovered active', () => {
    const { container } = renderApp(
      <Button color={ButtonColors.transparent} isActive>
        Привет мир
      </Button>,
      {},
    );

    expect(container).toMatchSnapshot();

    const button = screen.getByRole('button');

    expect(button).toHaveStyle('background-color: transparent');
    expect(button).toHaveStyle(`color: ${theme.colors.yellow}`);

    expect(button).toHaveStyleRule('background-color', theme.colors.yellow, {
      modifier: ':hover',
    });
    expect(button).toHaveStyleRule('color', theme.colors.white, {
      modifier: ':hover',
    });
  });

  it('should render with props example className', () => {
    const { container } = renderApp(
      <Button color={ButtonColors.transparent} isActive className="test-class">
        Привет мир
      </Button>,
      {},
    );

    expect(container).toMatchSnapshot();

    const button = screen.getByRole('button');

    expect(button).toHaveClass('test-class');
  });

  it('should accept invalid child', () => {
    renderApp(
      <Button color={ButtonColors.gray} isActive>
        Привет
        {null}
      </Button>,
      {},
    );
  });
});
