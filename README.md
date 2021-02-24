# mui-swipeable-list-item
This is SwipeableListItem based on Material-UI (https://github.com/mui-org/material-ui), this package adds the functionality of swipe left and right for the Material-UI ListItem Component.

[Storybook](https://VagnerNico.github.io/mui-swipeable-list-item/).

<table>
  <thead>
    <tr>
      <td colspan="3">Component props</td>
    </tr>
    <tr>
      <td>Prop</td>
      <td>Description</td>
      <td>Default</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>avatar</td>
      <td>This prop is optional if exists will render the ListItemAvatar following the [material-ui examples](https://material-ui.com/components/lists/)</td>
      <td>undefined</td>
    <tr>
      <td>background</td>
      <td>
        <pre lang="javascript">
  {
    actionIconLeft: This prop is required and will define the Icon showed when swipe left,
    actionIconRight: This prop is required and will define the Icon showed when swipe right,
    backgroundColorLeft: This prop is required and will define the color when swipe left,
    backgroundColorRight: This prop is required and will define the color when swipe right,
  }
        </pre>
      </td>
      <td>Prop required</td>
    </tr>
    <tr>
      <td>disableDeleteAnimation</td>
      <td>If true will disable the dismiss animation</td>
      <td>false</td>
    </tr>
    <tr>
      <td>itemIcon</td>
      <td>This prop is optional if exists will render the ListItemIcon before the ListItemText following the [material-ui examples](https://material-ui.com/components/lists/)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>ListItemAvatarProps</td>
      <td>This prop is optional and will spread all props from [ListItemAvatar API](https://material-ui.com/api/list-item-avatar/)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>ListItemIconProps</td>
      <td>This prop is optional and will spread all props from [ListItemIcon API](https://material-ui.com/api/list-item-icon/)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>ListItemProps</td>
      <td>This prop is optional and will spread all props from [ListItem API](https://material-ui.com/api/list-item//)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>ListItemSecondaryActionProps</td>
      <td>This prop is optional and will spread all props from [ListItemSecondaryAction API](https://material-ui.com/api/list-item-secondary-action/)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>ListItemTextProps</td>
      <td>This prop is optional and will spread all props from [ListItemText API](https://material-ui.com/api/list-item-text/)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>onSwipedLeft</td>
      <td>Callback executed when Swipe left</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>onSwipedRight</td>
      <td>Callback executed when Swipe right</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>primaryText</td>
      <td>String or Component for primary prop from ListItemText</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>secondaryAction</td>
      <td>This prop is optional and receive a Component to be rendered inside the ListItemSecondaryAction</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>secondaryText</td>
      <td>String or Component for secondary prop from ListItemText</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>threshold</td>
      <td>The fraction of width (range between 0 - 1) needed to execute the action callback</td>
      <td>0.3</td>
    </tr>
  </tbody>
</table>
