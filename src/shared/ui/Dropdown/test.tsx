import { renderApp } from '@/test/utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './index';

jest.mock('hex-rgb', () => () => '');

const dropdownItems = [
  {
    value: 'item1',
    label: 'Элемент 1',
  },
  {
    value: 'item2',
    label: 'Элемент 2',
  },
  {
    value: 'item3',
    label: 'Элемент 3',
  },
];

const DropdownLabel = ({ label, role }: { label: string; role?: string }) => (
  <span role={role}>{label}</span>
);

describe('UI Dropdown', () => {
  it('should display with default props and menu on hover', async () => {
    const user = userEvent.setup();

    const { container } = renderApp(
      <Dropdown
        trigger={<DropdownLabel label={dropdownItems[0].label} />}
        items={dropdownItems.map(item => (
          <span key={item.value}>{item.label}</span>
        ))}
        selected={0}
      />,
      {},
    );

    expect(container).toMatchSnapshot();

    const label = screen.getByRole('label');

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(dropdownItems[0].label);

    expect(screen.queryByRole('listbox')).toBeNull();

    await user.hover(label);

    expect(screen.queryByRole('listbox')).toBeInTheDocument();
    expect(screen.queryAllByRole('option').length).toBe(3);
  });

  it('should update label and state when option is selected', async () => {
    const user = userEvent.setup();

    const { setProp } = renderApp(
      <Dropdown
        trigger={<DropdownLabel label={dropdownItems[0].label} />}
        items={dropdownItems.map(item => (
          <span key={item.value}>{item.label}</span>
        ))}
        selected={0}
      />,
      {},
    );

    await user.hover(screen.getByRole('label'));
    await user.click(screen.getAllByRole('option')[1]);

    setProp({
      trigger: <DropdownLabel label={dropdownItems[1].label} />,
      items: dropdownItems.map(item => (
        <span key={item.value}>{item.label}</span>
      )),
      selected: 1,
    });

    expect(screen.queryByRole('listbox')).toBeNull();
    expect(screen.getByRole('label')).toHaveTextContent(dropdownItems[1].label);
  });

  it('checking prop: without selected', async () => {
    const user = userEvent.setup();

    renderApp(
      <Dropdown
        trigger={<DropdownLabel label={dropdownItems[0].label} />}
        items={dropdownItems.map(item => (
          <span key={item.value}>{item.label}</span>
        ))}
      />,
      {},
    );

    const label = screen.getByRole('label');

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(dropdownItems[0].label);

    expect(screen.queryByRole('listbox')).toBeNull();

    await user.hover(label);

    expect(screen.queryByRole('listbox')).toBeInTheDocument();
    expect(screen.queryAllByRole('option').length).toBe(3);
  });

  it('checking prop: onOpen', async () => {
    const user = userEvent.setup();

    const onMockOpen = jest.fn((open: boolean) => !open);

    renderApp(
      <Dropdown
        trigger={<DropdownLabel label={dropdownItems[0].label} />}
        items={dropdownItems.map(item => (
          <span key={item.value}>{item.label}</span>
        ))}
        selected={0}
        onOpen={onMockOpen}
      />,
      {},
    );

    await user.hover(screen.getByRole('label'));

    expect(onMockOpen.mock.calls).toHaveLength(1);
    expect(onMockOpen.mock.results[0].value).toBe(false);

    expect(screen.queryByRole('listbox')).toBeNull();
  });

  it('checking prop: onSelected', async () => {
    const user = userEvent.setup();

    const onMockSelected = jest.fn((id: number) => id);

    renderApp(
      <Dropdown
        trigger={<DropdownLabel label={dropdownItems[0].label} />}
        items={dropdownItems.map(item => (
          <span key={item.value}>{item.label}</span>
        ))}
        selected={0}
        onSelected={onMockSelected}
      />,
      {},
    );

    expect(onMockSelected.mock.calls).toHaveLength(0);

    await user.hover(screen.getByRole('label'));
    await user.click(screen.getAllByRole('option')[1]);

    expect(onMockSelected.mock.calls).toHaveLength(1);
    expect(onMockSelected.mock.results[0].value).toBe(1);
  });

  it('check prop: items are empty', async () => {
    const user = userEvent.setup();

    const { container } = renderApp(
      <Dropdown
        trigger={<DropdownLabel label={dropdownItems[0].label} />}
        items={[]}
        selected={0}
      />,
      {},
    );

    expect(container).toMatchSnapshot();

    await user.hover(screen.getByRole('label'));
    expect(screen.queryByRole('listbox')).toBeNull();
  });
});
