import React, { ReactElement, SFC, useRef, useState } from 'react';
import {
  ListItem,
  ListItemProps as ListItemPropsTypes,
  ListItemAvatar,
  ListItemAvatarProps as ListItemAvatarPropsTypes,
  ListItemIcon,
  ListItemIconProps as ListItemIconPropsTypes,
  ListItemSecondaryAction,
  ListItemSecondaryActionProps as ListItemSecondaryActionPropsTypes,
  ListItemText,
  ListItemTextProps as ListItemTextPropsTypes,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  backgroundClass: {
    position: `absolute`,
    width: `100%`,
    height: `100%`,
    zIndex: -1,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    paddingRight: 16,
    color: `#fff`,
    backgroundColor: `#663bb7`,
    boxSizing: `border-box`,
  },
  listItemClass: {
    backgroundColor: `#fff`,
    transition: `transform 0.3s ease-out`,
  },
  wrapperClass: {
    position: `relative`,
    transition: `max-height 0.5s ease`,
    transformOrigin: `top`,
    overflow: `hidden`,
    width: `100%`,
  },
}));

interface SwipeableListItemProps {
  avatar?: ReactElement;
  background: {
    actionIconLeft: ReactElement;
    actionIconRight: ReactElement;
    backgroundColorLeft: string;
    backgroundColorRight: string;
  };
  disableDeleteAnimation?: boolean;
  itemIcon?: ReactElement;
  ListItemAvatarProps?: ListItemAvatarPropsTypes;
  ListItemIconProps?: ListItemIconPropsTypes;
  ListItemProps?: ListItemPropsTypes;
  ListItemSecondaryActionProps?: ListItemSecondaryActionPropsTypes;
  ListItemTextProps?: ListItemTextPropsTypes;
  onSwipedLeft: (event: React.TransitionEvent) => void;
  onSwipedRight: (event: React.TransitionEvent) => void;
  primaryText: string | ReactElement;
  secondaryAction?: ReactElement;
  secondaryText?: string | ReactElement;
  threshold?: number;
}

const SwipeableListItem: SFC<SwipeableListItemProps> = ({
  avatar,
  background,
  disableDeleteAnimation = false,
  itemIcon,
  ListItemAvatarProps = {},
  ListItemIconProps = {},
  ListItemProps = {},
  ListItemSecondaryActionProps = {},
  ListItemTextProps = {},
  onSwipedLeft,
  onSwipedRight,
  primaryText,
  secondaryAction,
  secondaryText,
  threshold = 0.3,
}) => {
  const classes = useStyles();
  const { backgroundClass, listItemClass, wrapperClass } = classes;
  const listElementEl = useRef<HTMLLIElement>(null);
  const [state, setState] = useState({
    wrapperMaxHeight: 1000,
    diff: 0,
    dragged: false,
    dragStartX: 0,
    isAnimating: false,
    side: `left`,
    startTime: 0,
  });

  const { diff, dragged, dragStartX, isAnimating, side, wrapperMaxHeight } = state;

  function onDragStartTouch(event: React.TouchEvent): void {
    const touch = event.touches[0];
    const { clientX } = touch;
    setState(prevState => ({
      ...prevState,
      dragged: true,
      dragStartX: clientX,
      isAnimating: true,
      startTime: Date.now(),
    }));
  }

  function onDragEndTouch(): void {
    if (dragged) {
      setState(prevState => ({
        ...prevState,
        dragged: false,
      }));
      if (listElementEl.current && diff < listElementEl.current.offsetWidth * threshold * -1) {
        setState(prevState => ({
          ...prevState,
          diff: listElementEl.current ? -listElementEl.current.offsetWidth * 2 : 0,
          wrapperMaxHeight: 0,
        }));
      } else if (listElementEl.current && diff > listElementEl.current.offsetWidth * threshold) {
        setState(prevState => ({
          ...prevState,
          diff: listElementEl.current ? listElementEl.current.offsetWidth * 2 : 0,
        }));
      } else {
        setState(prevState => ({ ...prevState, diff: 0 }));
      }
    }
  }

  function onTouchMove(event: React.TouchEvent): void {
    const touch = event.touches[0];
    const newDiff = touch.clientX - dragStartX;
    if (newDiff < 0) {
      setState(prevState => ({
        ...prevState,
        diff: newDiff,
        side: `left`,
      }));
    } else if (newDiff > 0) {
      setState(prevState => ({
        ...prevState,
        diff: newDiff,
        side: `right`,
      }));
    }
  }

  function onTransitionEnd(event: React.TransitionEvent): void {
    event.persist();
    const { propertyName } = event;
    const propertyCheck = disableDeleteAnimation || propertyName === `max-height`;
    if (
      side === `left` &&
      propertyCheck &&
      !dragged &&
      listElementEl.current &&
      diff < listElementEl.current.offsetWidth * threshold * -1
    ) {
      onSwipedLeft(event);
      if (disableDeleteAnimation)
        setState(prevState => ({
          ...prevState,
          diff: 0,
          isAnimating: false,
        }));
    } else if (
      side === `right` &&
      !dragged &&
      listElementEl.current &&
      diff > listElementEl.current.offsetWidth * threshold
    ) {
      onSwipedRight(event);
      setState(prevState => ({
        ...prevState,
        diff: 0,
        isAnimating: false,
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        isAnimating: false,
      }));
    }
  }

  const { actionIconLeft, actionIconRight, backgroundColorLeft, backgroundColorRight } = background;

  const getOpacity = (): number => {
    const opacity = parseFloat((Math.abs(diff) / 100).toFixed(2));
    if (opacity < 1) {
      return opacity;
    }
    return 1;
  };

  return (
    <>
      <div
        className={wrapperClass}
        data-testid="wrapper-list-item"
        onTransitionEnd={onTransitionEnd}
        style={{
          maxHeight: !disableDeleteAnimation ? wrapperMaxHeight : undefined,
        }}
      >
        <ListItem
          className={backgroundClass}
          data-testid="action-list-item"
          divider={dragged}
          style={{
            backgroundColor: side === `left` ? backgroundColorLeft : backgroundColorRight,
            justifyContent: side === `left` ? `flex-end` : `flex-start`,
            opacity: getOpacity(),
          }}
        >
          {side === `left` ? actionIconLeft : actionIconRight}
        </ListItem>
        <ListItem
          className={listItemClass}
          data-testid="draggable-list-item"
          divider={dragged}
          {...ListItemProps}
          onTouchStart={onDragStartTouch}
          onTouchMove={onTouchMove}
          onTouchEnd={onDragEndTouch}
           // @ts-ignore
          ref={listElementEl}
          style={{
            transform: `translateX(${diff}px)`,
          }}
        >
          {itemIcon && (
            <ListItemIcon data-testid="list-item-icon" {...ListItemIconProps}>
              {itemIcon}
            </ListItemIcon>
          )}
          {avatar && (
            <ListItemAvatar data-testid="list-item-avatar" {...ListItemAvatarProps}>
              {avatar}
            </ListItemAvatar>
          )}
          <ListItemText {...ListItemTextProps} primary={primaryText} secondary={secondaryText} />
          {secondaryAction && (
            <ListItemSecondaryAction
              data-testid="list-secondary-action"
              {...ListItemSecondaryActionProps}
              style={{ display: dragged || isAnimating ? `none` : `block` }}
            >
              {secondaryAction}
            </ListItemSecondaryAction>
          )}
        </ListItem>
      </div>
    </>
  );
};

export default SwipeableListItem;
