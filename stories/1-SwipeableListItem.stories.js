import React from 'react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Avatar, List, Checkbox } from '@material-ui/core';
import { Delete, Edit, ListOutlined } from '@material-ui/icons';
import SwipeableListItem from '../dist';

const background = {
  actionIconLeft: <Delete />,
  actionIconRight: <Edit />,
  backgroundColorLeft: `red`,
  backgroundColorRight: `green`,
};

export default {
  title: `SwipeableListItem`,
  component: SwipeableListItem,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: `iphone6`,
    },
    options: {
      showPanel: true,
    },
  },
};

export const ListOnlyWithText = () => (
  <List>
    <SwipeableListItem
      background={background}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 0"
      secondaryText="Secondary text"
    />
    <SwipeableListItem
      background={background}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 1"
      secondaryText="Secondary text"
    />
    <SwipeableListItem
      background={background}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 2"
      secondaryText="Secondary text"
    />
  </List>
);

export const ListWithAvatar = () => (
  <List>
    <SwipeableListItem
      avatar={
        <Avatar>
          <ListOutlined />
        </Avatar>
      }
      background={background}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 0"
      secondaryText="Secondary text"
    />
    <SwipeableListItem
      avatar={
        <Avatar>
          <ListOutlined />
        </Avatar>
      }
      background={background}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 1"
      secondaryText="Secondary text"
    />
    <SwipeableListItem
      avatar={
        <Avatar>
          <ListOutlined />
        </Avatar>
      }
      background={background}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 2"
      secondaryText="Secondary text"
    />
  </List>
);

export const ListWithListIconAndSecondaryAction = () => (
  <List>
    <SwipeableListItem
      background={background}
      itemIcon={<ListOutlined />}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 0"
      secondaryAction={<Checkbox />}
      secondaryText="Secondary text"
    />
    <SwipeableListItem
      background={background}
      itemIcon={<ListOutlined />}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 1"
      secondaryAction={<Checkbox />}
      secondaryText="Secondary text"
    />
    <SwipeableListItem
      background={background}
      itemIcon={<ListOutlined />}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 2"
      secondaryAction={<Checkbox />}
      secondaryText="Secondary text"
    />
  </List>
);

export const ListWithDisabledDeleteAnimation = () => (
  <List>
    <SwipeableListItem
      background={background}
      disableDeleteAnimation
      itemIcon={<ListOutlined />}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 0"
      secondaryAction={<Checkbox />}
      secondaryText="Secondary text"
    />
    <SwipeableListItem
      background={background}
      disableDeleteAnimation
      itemIcon={<ListOutlined />}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 1"
      secondaryAction={<Checkbox />}
      secondaryText="Secondary text"
    />
    <SwipeableListItem
      background={background}
      disableDeleteAnimation
      itemIcon={<ListOutlined />}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 2"
      secondaryAction={<Checkbox />}
      secondaryText="Secondary text"
    />
  </List>
);
