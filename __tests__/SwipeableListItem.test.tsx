import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Avatar, Checkbox } from '@material-ui/core';
import { Delete, Edit, List } from '@material-ui/icons';
import SwipeableListItem from '../src';

// @ts-ignore
window.innerWidth = 400;

const background = {
  actionIconLeft: <Delete />,
  actionIconRight: <Edit />,
  backgroundColorLeft: `red`,
  backgroundColorRight: `green`,
};

test(`Render one ListItem`, () => {
  const { getByText } = render(
    <SwipeableListItem
      background={background}
      onSwipedLeft={() => console.log(`Deleted`)}
      onSwipedRight={() => console.log(`Editting`)}
      primaryText="Item List 0"
    />,
  );
  const listElement = getByText(/Item List 0/i);
  expect(listElement).toBeInTheDocument();
});

const { getComputedStyle } = window;
const values = `_values`;

test(`Render one ListItem and trigger the left action with delete behavior`, async () => {
  const { getByTestId } = render(
    <SwipeableListItem
      background={background}
      onSwipedLeft={() => console.log(`Deleted`)}
      onSwipedRight={() => console.log(`Editting`)}
      primaryText="Item List 0"
    />,
  );
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get() {
        return 400;
      },
    },
  });
  const actionElement = getByTestId(`action-list-item`);
  const listElement = getByTestId(`draggable-list-item`);
  const wrapperElement = getByTestId(`wrapper-list-item`);
  expect(getComputedStyle(actionElement)[values].opacity).toEqual(`0`);
  expect(getComputedStyle(wrapperElement)[values][`max-height`]).toEqual(`1000px`);
  fireEvent.touchStart(listElement, { touches: [{ clientX: 0 }] });
  fireEvent.touchMove(listElement, { touches: [{ clientX: -300 }] });
  expect(getComputedStyle(actionElement)[values].opacity).toEqual(`1`);
  fireEvent.touchEnd(listElement);
  const transitionEndEvent = new Event(`transitionend`, { bubbles: true, cancelable: false });
  (transitionEndEvent as any).propertyName = `max-height`;
  fireEvent(wrapperElement, transitionEndEvent);
  expect(getComputedStyle(wrapperElement)[values][`max-height`]).toEqual(`0`);
});

test(`Render one ListItem and trigger the left action without delete behavior`, () => {
  const { getByTestId } = render(
    <SwipeableListItem
      background={background}
      disableDeleteAnimation
      onSwipedLeft={() => console.log(`Deleted`)}
      onSwipedRight={() => console.log(`Editting`)}
      primaryText="Item List 0"
    />,
  );
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get() {
        return 400;
      },
    },
  });
  const actionElement = getByTestId(`action-list-item`);
  const listElement = getByTestId(`draggable-list-item`);
  const wrapperElement = getByTestId(`wrapper-list-item`);
  expect(getComputedStyle(actionElement)[values].opacity).toEqual(`0`);
  expect(getComputedStyle(wrapperElement)[values][`max-height`]).toEqual(undefined);
  fireEvent.touchStart(listElement, { touches: [{ clientX: 0 }] });
  fireEvent.touchMove(listElement, { touches: [{ clientX: -300 }] });
  expect(getComputedStyle(actionElement)[values].opacity).toEqual(`1`);
  fireEvent.touchEnd(listElement);
  fireEvent.transitionEnd(listElement);
  expect(getComputedStyle(wrapperElement)[values][`max-height`]).toEqual(undefined);
});

test(`Render one ListItem and trigger the right action`, () => {
  const { getByTestId } = render(
    <SwipeableListItem
      background={background}
      disableDeleteAnimation
      onSwipedLeft={() => console.log(`Deleted`)}
      onSwipedRight={() => console.log(`Editting`)}
      primaryText="Item List 0"
    />,
  );
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get() {
        return 400;
      },
    },
  });
  const listElement = getByTestId(`draggable-list-item`);
  const actionElement = getByTestId(`action-list-item`);
  expect(getComputedStyle(actionElement)[values].opacity).toEqual(`0`);
  fireEvent.touchStart(listElement, { touches: [{ clientX: 0 }] });
  fireEvent.touchMove(listElement, { touches: [{ clientX: 300 }] });
  expect(getComputedStyle(actionElement)[values].opacity).toEqual(`1`);
  fireEvent.touchEnd(listElement);
  fireEvent.transitionEnd(listElement);
  expect(getComputedStyle(actionElement)[values].opacity).toEqual(`0`);
});

test(`Render a ListItem and do not trigger the action for not exceeding the width limit`, () => {
  const { getByTestId } = render(
    <SwipeableListItem
      background={background}
      disableDeleteAnimation
      onSwipedLeft={() => console.log(`Deleted`)}
      onSwipedRight={() => console.log(`Editting`)}
      primaryText="Item List 0"
      secondaryAction={<Checkbox checked />}
    />,
  );
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get() {
        return 400;
      },
    },
  });
  const listElement = getByTestId(`draggable-list-item`);
  const actionElement = getByTestId(`action-list-item`);
  expect(getComputedStyle(actionElement)[values].opacity).toEqual(`0`);
  fireEvent.touchStart(listElement, { touches: [{ clientX: 0 }] });
  fireEvent.touchMove(listElement, { touches: [{ clientX: -50 }] });
  expect(getComputedStyle(actionElement)[values].opacity).toEqual(`0.5`);
  fireEvent.touchEnd(listElement);
  fireEvent.transitionEnd(listElement);
  expect(getComputedStyle(actionElement)[values].opacity).toEqual(`0`);
});

test(`Render a ListItem with avatar and secondaryAction`, () => {
  const { getByTestId } = render(
    <SwipeableListItem
      avatar={
        <Avatar>
          <List />
        </Avatar>
      }
      background={background}
      disableDeleteAnimation
      itemIcon={<List />}
      onSwipedLeft={() => console.log(`Deleted`)}
      onSwipedRight={() => console.log(`Editting`)}
      primaryText="Item List 0"
      secondaryAction={<Checkbox checked />}
    />,
  );
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get() {
        return 400;
      },
    },
  });
  const listAvatarElement = getByTestId(`list-item-avatar`);
  const listSecondaryActionElement = getByTestId(`list-secondary-action`);
  const listIconElement = getByTestId(`list-item-icon`);
  expect(listAvatarElement).toBeInTheDocument();
  expect(listSecondaryActionElement).toBeInTheDocument();
  expect(listIconElement).toBeInTheDocument();
});

test(`Trigger touch end without moving`, () => {
  const { getByTestId } = render(
    <SwipeableListItem
      background={background}
      disableDeleteAnimation
      itemIcon={<List />}
      onSwipedLeft={() => console.log(`Deleted`)}
      onSwipedRight={() => console.log(`Editting`)}
      primaryText="Item List 0"
      secondaryAction={<Checkbox checked />}
    />,
  );
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get() {
        return 400;
      },
    },
  });
  const listElement = getByTestId(`draggable-list-item`);
  const actionElement = getByTestId(`action-list-item`);
  fireEvent.touchMove(listElement, { touches: [{ clientX: 0 }] });
  fireEvent.touchEnd(listElement);
  expect(getComputedStyle(actionElement)[values].opacity).toEqual(`0`);
});
