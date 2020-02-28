import React from 'react';
import { action } from '@storybook/addon-actions';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Avatar, List, Checkbox, Typography } from '@material-ui/core';
import { Delete, Edit, ListOutlined } from '@material-ui/icons';
import SwipeableListItem from '../src/index';

const background = {
  actionIconLeft: <Delete />,
  actionIconRight: <Edit />,
  backgroundColorLeft: `red`,
  backgroundColorRight: `green`,
};

export default {
  title: 'SwipeableListItem',
  component: SwipeableListItem,
};

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
});

export const Welcome = () =>
  <>
    <Typography align="center" variant="h5" style={{ marginBottom: 40 }}>
      Welcome this is the SwipeableListItem
    </Typography>
    <Typography align="justify">
      The SwipeableListItem it's supposed to be used on mobile environment, so use something like
      ChromeDevTools in responsive mode to dispatch touch events instead of clicks.
    </Typography>
  </>

export const ListOnlyWithText = () => 
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

export const ListWithAvatar = () => 
  <List>
    <SwipeableListItem
      avatar={<Avatar><ListOutlined /></Avatar>}
      background={background}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 0"
      secondaryText="Secondary text"
    />
    <SwipeableListItem
      avatar={<Avatar><ListOutlined /></Avatar>}
      background={background}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 1"
      secondaryText="Secondary text"
    />
    <SwipeableListItem
      avatar={<Avatar><ListOutlined /></Avatar>}
      background={background}
      onSwipedLeft={action(`Deleting`)}
      onSwipedRight={action(`Editting`)}
      primaryText="Item List 2"
      secondaryText="Secondary text"
    />
  </List>

export const ListWithListIconAndSecondaryAction = () => 
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
