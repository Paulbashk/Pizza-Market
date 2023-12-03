/* eslint-disable max-len */
import { renderApp } from '@/test/utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal, ModalWindow } from '.';

describe('UI Modal', () => {
  it('should dont display anything, isOpen is false', () => {
    const { container } = renderApp(
      <Modal isOpen={false}>
        <ModalWindow>Modal Content</ModalWindow>
      </Modal>,
      {},
    );

    expect(container.firstChild).toBeNull();
  });

  it('should render and display child content, isOpen is true', () => {
    renderApp(
      <Modal isOpen>
        <ModalWindow>Modal Content</ModalWindow>
      </Modal>,
      {},
    );

    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('prop check: allowScroll is true, there will be no overflow hidden in the tag body', async () => {
    const style = 'overflow: hidden';

    const { setProp } = renderApp(
      <Modal isOpen allowScroll>
        <ModalWindow>Modal Content</ModalWindow>
      </Modal>,
      {},
    );

    expect(document.body).not.toHaveStyle(style);

    setProp({
      isOpen: false,
      allowScroll: true,
    });

    expect(global.document.body).not.toHaveStyle(style);
  });

  it('prop check: allowScroll is false, the body tag will have overflow hidden when the window is shown', async () => {
    const style = 'overflow: hidden';

    const { setProp } = renderApp(
      <Modal isOpen allowScroll={false}>
        <ModalWindow>Modal Content</ModalWindow>
      </Modal>,
      {},
    );

    expect(document.body).toHaveStyle(style);

    setProp({
      isOpen: false,
      allowScroll: false,
    });

    expect(global.document.body).not.toHaveStyle(style);
  });

  it('prop check: when you press the Escape key, the onEscapeKeydown function will work', async () => {
    const user = userEvent.setup();
    const onMockEscape = jest.fn();

    renderApp(
      <Modal isOpen onEscapeKeydown={onMockEscape}>
        <ModalWindow>Modal Content</ModalWindow>
      </Modal>,
      {},
    );

    await user.keyboard('{Escape}');

    expect(onMockEscape.mock.calls).toHaveLength(1);
  });

  it('prop check: beforeOpen and afterOpen', () => {
    const onMockBeforeOpen = jest.fn();
    const onMockAfterOpen = jest.fn();

    const { setProp } = renderApp(
      <Modal isOpen afterOpen={onMockAfterOpen} beforeOpen={onMockBeforeOpen}>
        <ModalWindow>Modal Content</ModalWindow>
      </Modal>,
      {},
    );

    expect(onMockAfterOpen.mock.calls).toHaveLength(1);
    expect(onMockBeforeOpen.mock.calls).toHaveLength(0);

    setProp({ isOpen: false });

    expect(onMockAfterOpen.mock.calls).toHaveLength(1);
    expect(onMockBeforeOpen.mock.calls).toHaveLength(1);
  });

  it('prop check: beforeClose and afterClose', () => {
    const onMockBeforeClose = jest.fn();
    const onMockAfterClose = jest.fn();

    const { setProp } = renderApp(
      <Modal
        isOpen
        afterClose={onMockAfterClose}
        beforeClose={onMockBeforeClose}
      >
        <ModalWindow>Modal Content</ModalWindow>
      </Modal>,
      {},
    );

    expect(onMockAfterClose.mock.calls).toHaveLength(0);
    expect(onMockBeforeClose.mock.calls).toHaveLength(1);

    setProp({ isOpen: false });

    expect(onMockAfterClose.mock.calls).toHaveLength(1);
    expect(onMockBeforeClose.mock.calls).toHaveLength(1);
  });

  it('should accept invalid child', () => {
    renderApp(<Modal isOpen>{null}</Modal>, {});
  });
});
