import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

const customViewports = {
  kindleFire2: {
    name: 'Desktop',
    styles: {
      width: '100%',
      height: '100%',
    },
  },
};

export default {
  title: 'Welcome',
  parameters: {
    viewport: { viewports: customViewports },
    options: {
      showPanel: false,
    }
  }
};

export const Welcome = () =>
  <>
    <Typography align="center" variant="h3" style={{ marginBottom: 40 }}>
      mui-swipeable-list-item
    </Typography>
    <Typography align="justify">
      This is SwipeableListItem based on <a href="https://github.com/mui-org/material-ui">Material-UI</a>, this package adds the functionality of swipe left and right for the Material-UI ListItem Component.
    </Typography>
    <Typography align="justify" color="secondary" style={{ marginBottom: 40 }}>
      Please execute the stories on SwipeableListItem with ChromeDevTool in responsive mode to fire the touch events instead of clicks.
    </Typography>
    <TableContainer component={Paper} style={{ minWidth: 650 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Prop</TableCell>
            <TableCell align="center">Default</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>avatar</TableCell>
            <TableCell>undefined</TableCell>
            <TableCell>JSX Element</TableCell>
            <TableCell>Same element wrapped by ListItemAvatar from <a href="https://material-ui.com/components/lists/">material-ui examples</a></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>background</TableCell>
            <TableCell>Required</TableCell>
            <TableCell>
              <code style={{ textAlign: `justify` }}>
                {`{`}<br/>
                  &nbsp;&nbsp;actionIconLeft: JSX Element,<br/>
                  &nbsp;&nbsp;actionIconRight: JSX Element,<br/>
                  &nbsp;&nbsp;backgroundColorLeft: color rgb or hex,<br/>
                  &nbsp;&nbsp;backgroundColorRight: color rgb or hex<br/>
                {`}`}
              </code>
            </TableCell>
            <TableCell>
              Icon to be shown when Swipe left<br/>
              Icon to be shown when Swipe right<br/>
              Color for background component when Swipe left<br/>
              Color for background component when Swipe right<br/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>disableDeleteAnimation</TableCell>
            <TableCell>false</TableCell>
            <TableCell>
              boolean
            </TableCell>
            <TableCell>
              If true will disable the dismiss animation for Swipe left action
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>itemIcon</TableCell>
            <TableCell>undefined</TableCell>
            <TableCell>
              JSX Element
            </TableCell>
            <TableCell>
              The same JSX element wrapped by the ListItemIcon rendered before the ListItemText following
              the <a href="https://material-ui.com/components/lists/">material-ui examples</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ListItemAvatarProps</TableCell>
            <TableCell>undefined</TableCell>
            <TableCell>
              Props from ListItemAvatar
            </TableCell>
            <TableCell>
              This prop is optional and will spread all props from <a href="https://material-ui.com/api/list-item-avatar/">ListItemAvatar API</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ListItemIconProps</TableCell>
            <TableCell>undefined</TableCell>
            <TableCell>
              Props from ListItemIcon
            </TableCell>
            <TableCell>
              This prop is optional and will spread all props from <a href="https://material-ui.com/api/list-item-icon/">ListItemIcon API</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ListItemProps</TableCell>
            <TableCell>undefined</TableCell>
            <TableCell>
              Props from ListItem
            </TableCell>
            <TableCell>
              This prop is optional and will spread all props from <a href="https://material-ui.com/api/list-item/">ListItem API</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ListItemSecondaryActionProps</TableCell>
            <TableCell>undefined</TableCell>
            <TableCell>
              Props from ListItemSecondaryAction
            </TableCell>
            <TableCell>
              This prop is optional and will spread all props from <a href="https://material-ui.com/api/list-item-secondary-action/">ListItemSecondaryAction API</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ListItemTextProps</TableCell>
            <TableCell>undefined</TableCell>
            <TableCell>
              Props from ListItemText
            </TableCell>
            <TableCell>
              This prop is optional and will spread all props from <a href="https://material-ui.com/api/list-item-text/">ListItemText API</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>onSwipedLeft</TableCell>
            <TableCell>Required</TableCell>
            <TableCell>
              Callback function
            </TableCell>
            <TableCell>
              Callback executed when Swipe left
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>onSwipedRight</TableCell>
            <TableCell>Required</TableCell>
            <TableCell>
              Callback function
            </TableCell>
            <TableCell>
              Callback executed when Swipe right
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>primaryText</TableCell>
            <TableCell>Required</TableCell>
            <TableCell>
              String or JSX Element
            </TableCell>
            <TableCell>
              Will be injected on primary prop from ListItemText
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>secondaryAction</TableCell>
            <TableCell>undefined</TableCell>
            <TableCell>
              JSX Element
            </TableCell>
            <TableCell>
              Rendered inside the ListItemSecondaryAction
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>secondaryText</TableCell>
            <TableCell>undefined</TableCell>
            <TableCell>
              String or JSX Element
            </TableCell>
            <TableCell>
              Will be injected on secondary prop from ListItemText
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>threshold</TableCell>
            <TableCell>0.3</TableCell>
            <TableCell>
              Float from 0 to 1
            </TableCell>
            <TableCell>
              Fraction of width need to execute the action;
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </>