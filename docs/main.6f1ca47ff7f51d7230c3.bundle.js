(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{454:function(module,exports,__webpack_require__){__webpack_require__(455),__webpack_require__(601),module.exports=__webpack_require__(602)},519:function(module,exports){},56:function(module,exports,__webpack_require__){"use strict";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importStar(__webpack_require__(0)),core_1=__webpack_require__(268),useStyles=core_1.makeStyles((function(){return{backgroundClass:{position:"absolute",width:"100%",height:"100%",zIndex:-1,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingRight:16,color:"#fff",backgroundColor:"#663bb7",boxSizing:"border-box"},listItemClass:{backgroundColor:"#fff",transition:"transform 0.3s ease-out"},wrapperClass:{position:"relative",transition:"max-height 0.5s ease",transformOrigin:"top",overflow:"hidden",width:"100%"}}}));exports.default=function SwipeableListItem(_ref){var avatar=_ref.avatar,background=_ref.background,_ref$disableDeleteAni=_ref.disableDeleteAnimation,disableDeleteAnimation=void 0!==_ref$disableDeleteAni&&_ref$disableDeleteAni,itemIcon=_ref.itemIcon,_ref$ListItemAvatarPr=_ref.ListItemAvatarProps,ListItemAvatarProps=void 0===_ref$ListItemAvatarPr?{}:_ref$ListItemAvatarPr,_ref$ListItemIconProp=_ref.ListItemIconProps,ListItemIconProps=void 0===_ref$ListItemIconProp?{}:_ref$ListItemIconProp,_ref$ListItemProps=_ref.ListItemProps,ListItemProps=void 0===_ref$ListItemProps?{}:_ref$ListItemProps,_ref$ListItemSecondar=_ref.ListItemSecondaryActionProps,ListItemSecondaryActionProps=void 0===_ref$ListItemSecondar?{}:_ref$ListItemSecondar,_ref$ListItemTextProp=_ref.ListItemTextProps,ListItemTextProps=void 0===_ref$ListItemTextProp?{}:_ref$ListItemTextProp,onSwipedLeft=_ref.onSwipedLeft,onSwipedRight=_ref.onSwipedRight,primaryText=_ref.primaryText,secondaryAction=_ref.secondaryAction,secondaryText=_ref.secondaryText,_ref$threshold=_ref.threshold,threshold=void 0===_ref$threshold?.3:_ref$threshold,classes=useStyles(),backgroundClass=classes.backgroundClass,listItemClass=classes.listItemClass,wrapperClass=classes.wrapperClass,listElementEl=react_1.useRef(null),_react_1$useState2=_slicedToArray(react_1.useState({wrapperMaxHeight:1e3,diff:0,dragged:!1,dragStartX:0,isAnimating:!1,side:"left",startTime:0}),2),state=_react_1$useState2[0],setState=_react_1$useState2[1],diff=state.diff,dragged=state.dragged,dragStartX=state.dragStartX,isAnimating=state.isAnimating,side=state.side,wrapperMaxHeight=state.wrapperMaxHeight;var actionIconLeft=background.actionIconLeft,actionIconRight=background.actionIconRight,backgroundColorLeft=background.backgroundColorLeft,backgroundColorRight=background.backgroundColorRight;return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("div",{className:wrapperClass,"data-testid":"wrapper-list-item",onTransitionEnd:function onTransitionEnd(event){event.persist();var propertyName=event.propertyName;"left"===side&&(disableDeleteAnimation||"max-height"===propertyName)&&!dragged&&listElementEl.current&&diff<listElementEl.current.offsetWidth*threshold*-1?(onSwipedLeft(event),disableDeleteAnimation&&setState((function(prevState){return _objectSpread({},prevState,{diff:0,isAnimating:!1})}))):"right"===side&&!dragged&&listElementEl.current&&diff>listElementEl.current.offsetWidth*threshold?(onSwipedRight(event),setState((function(prevState){return _objectSpread({},prevState,{diff:0,isAnimating:!1})}))):setState((function(prevState){return _objectSpread({},prevState,{isAnimating:!1})}))},style:{maxHeight:disableDeleteAnimation?void 0:wrapperMaxHeight}},react_1.default.createElement(core_1.ListItem,{className:backgroundClass,"data-testid":"action-list-item",divider:dragged,style:{backgroundColor:"left"===side?backgroundColorLeft:backgroundColorRight,justifyContent:"left"===side?"flex-end":"flex-start",opacity:function getOpacity(){var opacity=parseFloat((Math.abs(diff)/100).toFixed(2));return opacity<1?opacity:1}()}},"left"===side?actionIconLeft:actionIconRight),react_1.default.createElement(core_1.ListItem,Object.assign({className:listItemClass,"data-testid":"draggable-list-item",divider:dragged},ListItemProps,{onTouchStart:function onDragStartTouch(event){var clientX=event.touches[0].clientX;setState((function(prevState){return _objectSpread({},prevState,{dragged:!0,dragStartX:clientX,isAnimating:!0,startTime:Date.now()})}))},onTouchMove:function onTouchMove(event){var newDiff=event.touches[0].clientX-dragStartX;newDiff<0?setState((function(prevState){return _objectSpread({},prevState,{diff:newDiff,side:"left"})})):newDiff>0&&setState((function(prevState){return _objectSpread({},prevState,{diff:newDiff,side:"right"})}))},onTouchEnd:function onDragEndTouch(){dragged&&(setState((function(prevState){return _objectSpread({},prevState,{dragged:!1})})),listElementEl.current&&diff<listElementEl.current.offsetWidth*threshold*-1?setState((function(prevState){return _objectSpread({},prevState,{diff:listElementEl.current?2*-listElementEl.current.offsetWidth:0,wrapperMaxHeight:0})})):listElementEl.current&&diff>listElementEl.current.offsetWidth*threshold?setState((function(prevState){return _objectSpread({},prevState,{diff:listElementEl.current?2*listElementEl.current.offsetWidth:0})})):setState((function(prevState){return _objectSpread({},prevState,{diff:0})})))},ref:listElementEl,style:{transform:"translateX(".concat(diff,"px)")}}),itemIcon&&react_1.default.createElement(core_1.ListItemIcon,Object.assign({"data-testid":"list-item-icon"},ListItemIconProps),itemIcon),avatar&&react_1.default.createElement(core_1.ListItemAvatar,Object.assign({"data-testid":"list-item-avatar"},ListItemAvatarProps),avatar),react_1.default.createElement(core_1.ListItemText,Object.assign({},ListItemTextProps,{primary:primaryText,secondary:secondaryText})),secondaryAction&&react_1.default.createElement(core_1.ListItemSecondaryAction,Object.assign({"data-testid":"list-secondary-action"},ListItemSecondaryActionProps,{style:{display:dragged||isAnimating?"none":"block"}}),secondaryAction))))}},602:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(446);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(796)],module)}.call(this,__webpack_require__(603)(module))},796:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.js":797,"./1-SwipeableListItem.stories.js":801};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=796},797:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Welcome",(function(){return Welcome}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(269),_material_ui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(818),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(819),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(820),_material_ui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(821),_material_ui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(33),_material_ui_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8),_material_ui_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(822);__webpack_exports__.default={title:"Welcome",parameters:{viewport:{viewports:{kindleFire2:{name:"Desktop",styles:{width:"100%",height:"100%"}}}},options:{showPanel:!1}}};var Welcome=function Welcome(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.a,{align:"center",variant:"h3",style:{marginBottom:40}},"mui-swipeable-list-item"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.a,{align:"justify"},"This is SwipeableListItem based on ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://github.com/mui-org/material-ui"},"Material-UI"),", this package adds the functionality of swipe left and right for the Material-UI ListItem Component."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.a,{align:"justify",color:"secondary",style:{marginBottom:40}},"Please execute the stories on SwipeableListItem with ChromeDevTool in responsive mode to fire the touch events instead of clicks."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{component:_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,style:{minWidth:650}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{align:"center"},"Prop"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{align:"center"},"Default"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{align:"center"},"Type"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{align:"center"},"Description"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"avatar"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"undefined"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"JSX Element"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Same element wrapped by ListItemAvatar from ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://material-ui.com/components/lists/"},"material-ui examples"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"background"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Required"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",{style:{textAlign:"justify"}},"{",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"  actionIconLeft: JSX Element,",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"  actionIconRight: JSX Element,",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"  backgroundColorLeft: color rgb or hex,",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"  backgroundColorRight: color rgb or hex",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"}")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Icon to be shown when Swipe left",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Icon to be shown when Swipe right",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Color for background component when Swipe left",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Color for background component when Swipe right",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"disableDeleteAnimation"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"false"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"boolean"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"If true will disable the dismiss animation for Swipe left action")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"itemIcon"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"undefined"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"JSX Element"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"The same JSX element wrapped by the ListItemIcon rendered before the ListItemText following the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://material-ui.com/components/lists/"},"material-ui examples"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"ListItemAvatarProps"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"undefined"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Props from ListItemAvatar"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"This prop is optional and will spread all props from ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://material-ui.com/api/list-item-avatar/"},"ListItemAvatar API"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"ListItemIconProps"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"undefined"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Props from ListItemIcon"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"This prop is optional and will spread all props from ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://material-ui.com/api/list-item-icon/"},"ListItemIcon API"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"ListItemProps"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"undefined"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Props from ListItem"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"This prop is optional and will spread all props from ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://material-ui.com/api/list-item/"},"ListItem API"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"ListItemSecondaryActionProps"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"undefined"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Props from ListItemSecondaryAction"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"This prop is optional and will spread all props from ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://material-ui.com/api/list-item-secondary-action/"},"ListItemSecondaryAction API"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"ListItemTextProps"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"undefined"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Props from ListItemText"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"This prop is optional and will spread all props from ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://material-ui.com/api/list-item-text/"},"ListItemText API"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"onSwipedLeft"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Required"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Callback function"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Callback executed when Swipe left")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"onSwipedRight"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Required"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Callback function"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Callback executed when Swipe right")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"primaryText"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Required"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"String or JSX Element"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Will be injected on primary prop from ListItemText")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"secondaryAction"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"undefined"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"JSX Element"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Rendered inside the ListItemSecondaryAction")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"secondaryText"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"undefined"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"String or JSX Element"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Will be injected on secondary prop from ListItemText")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"threshold"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"0.3"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Float from 0 to 1"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,"Fraction of width need to execute the action;"))))))};Welcome.__docgenInfo={description:"",methods:[],displayName:"Welcome"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Welcome.stories.js"]={name:"Welcome",docgenInfo:Welcome.__docgenInfo,path:"stories/0-Welcome.stories.js"})},801:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ListOnlyWithText",(function(){return ListOnlyWithText})),__webpack_require__.d(__webpack_exports__,"ListWithAvatar",(function(){return ListWithAvatar})),__webpack_require__.d(__webpack_exports__,"ListWithListIconAndSecondaryAction",(function(){return ListWithListIconAndSecondaryAction}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(28),_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(447),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(270),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(272),_material_ui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(271),_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(824),_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(825),_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(120),_dist__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(56),_dist__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_dist__WEBPACK_IMPORTED_MODULE_9__),background={actionIconLeft:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__.a,null),actionIconRight:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__.a,null),backgroundColorLeft:"red",backgroundColorRight:"green"};__webpack_exports__.default={title:"SwipeableListItem",component:_dist__WEBPACK_IMPORTED_MODULE_9___default.a,parameters:{viewport:{viewports:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__.INITIAL_VIEWPORTS,defaultViewport:"iphone6"},options:{showPanel:!0}}};var ListOnlyWithText=function ListOnlyWithText(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_9___default.a,{background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 0",secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_9___default.a,{background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 1",secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_9___default.a,{background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 2",secondaryText:"Secondary text"}))},ListWithAvatar=function ListWithAvatar(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_9___default.a,{avatar:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.a,null)),background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 0",secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_9___default.a,{avatar:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.a,null)),background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 1",secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_9___default.a,{avatar:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.a,null)),background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 2",secondaryText:"Secondary text"}))},ListWithListIconAndSecondaryAction=function ListWithListIconAndSecondaryAction(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_9___default.a,{background:background,itemIcon:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.a,null),onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 0",secondaryAction:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,null),secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_9___default.a,{background:background,itemIcon:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.a,null),onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 1",secondaryAction:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,null),secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist__WEBPACK_IMPORTED_MODULE_9___default.a,{background:background,itemIcon:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.a,null),onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 2",secondaryAction:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,null),secondaryText:"Secondary text"}))};ListOnlyWithText.__docgenInfo={description:"",methods:[],displayName:"ListOnlyWithText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-SwipeableListItem.stories.js"]={name:"ListOnlyWithText",docgenInfo:ListOnlyWithText.__docgenInfo,path:"stories/1-SwipeableListItem.stories.js"}),ListWithAvatar.__docgenInfo={description:"",methods:[],displayName:"ListWithAvatar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-SwipeableListItem.stories.js"]={name:"ListWithAvatar",docgenInfo:ListWithAvatar.__docgenInfo,path:"stories/1-SwipeableListItem.stories.js"}),ListWithListIconAndSecondaryAction.__docgenInfo={description:"",methods:[],displayName:"ListWithListIconAndSecondaryAction"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-SwipeableListItem.stories.js"]={name:"ListWithListIconAndSecondaryAction",docgenInfo:ListWithListIconAndSecondaryAction.__docgenInfo,path:"stories/1-SwipeableListItem.stories.js"})}},[[454,1,2]]]);
//# sourceMappingURL=main.6f1ca47ff7f51d7230c3.bundle.js.map