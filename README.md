# mui-swipeable-list-item
This is SwipeableListItem based on Material-UI (https://github.com/mui-org/material-ui), this package adds the functionality of swipe left and right for the Material-UI ListItem Component.

Component props:
 - avatar: This prop is optional if exists will render the ListItemAvatar following the [material-ui examples](https://material-ui.com/components/lists/);
 - background: {
     - actionIconLeft: This prop is required and will define the Icon showed when swipe left;
     - actionIconRight: This prop is required and will define the Icon showed when swipe right;
     - backgroundColorLeft: This prop is required and will define the color when swipe left;
     - backgroundColorRight: This prop is required and will define the color when swipe right;
  };
  - disableDeleteAnimation: Default = false, if true will disable the dismiss animation;
  - itemIcon: This prop is optional if exists will render the ListItemIcon before the ListItemText following the [material-ui examples](https://material-ui.com/components/lists/);
  - ListItemAvatarProps: This prop is optional and will spread all props from [ListItemAvatar API](https://material-ui.com/api/list-item-avatar/);
  - ListItemIconProps: This prop is optional and will spread all props from [ListItemIcon API](https://material-ui.com/api/list-item-icon/);
  - ListItemProps: This prop is optional and will spread all props from [ListItem API](https://material-ui.com/api/list-item//);
  - ListItemSecondaryActionProps: This prop is optional and will spread all props from [ListItemSecondaryAction props](https://material-ui.com/api/list-item-secondary-action/);
  - ListItemTextProps: This prop is optional and will spread all props from [ListItemText props](https://material-ui.com/api/list-item-text/);
  - onSwipedLeft: Callback executed when Swipe left;
  - onSwipedRight: Callback executed when Swipe right;
  - primaryText: String or Component for primary prop from ListItemText;
  - secondaryAction: This prop is optional and receive a Component to be rendered inside the ListItemSecondaryAction;
  - secondaryText: String or Component for secondary prop from ListItemText;
  - threshold: Default = 0.3, fraction of widh need to execute the action;