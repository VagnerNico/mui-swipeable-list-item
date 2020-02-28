(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{450:function(module,exports,__webpack_require__){__webpack_require__(451),__webpack_require__(597),module.exports=__webpack_require__(598)},515:function(module,exports){},54:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__(0)),core_1=__webpack_require__(441),useStyles=core_1.makeStyles(()=>({backgroundClass:{position:"absolute",width:"100%",height:"100%",zIndex:-1,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingRight:16,color:"#fff",backgroundColor:"#663bb7",boxSizing:"border-box"},listItemClass:{backgroundColor:"#fff",transition:"transform 0.3s ease-out"},wrapperClass:{position:"relative",transition:"max-height 0.5s ease",transformOrigin:"top",overflow:"hidden",width:"100%"}}));exports.default=({avatar:avatar,background:background,disableDeleteAnimation:disableDeleteAnimation=!1,itemIcon:itemIcon,ListItemAvatarProps:ListItemAvatarProps={},ListItemIconProps:ListItemIconProps={},ListItemProps:ListItemProps={},ListItemSecondaryActionProps:ListItemSecondaryActionProps={},ListItemTextProps:ListItemTextProps={},onSwipedLeft:onSwipedLeft,onSwipedRight:onSwipedRight,primaryText:primaryText,secondaryAction:secondaryAction,secondaryText:secondaryText,threshold:threshold=.3})=>{const classes=useStyles(),{backgroundClass:backgroundClass,listItemClass:listItemClass,wrapperClass:wrapperClass}=classes,listElementEl=react_1.useRef(null),[state,setState]=react_1.useState({wrapperMaxHeight:1e3,diff:0,dragged:!1,dragStartX:0,isAnimating:!1,side:"left",startTime:0}),{diff:diff,dragged:dragged,dragStartX:dragStartX,isAnimating:isAnimating,side:side,wrapperMaxHeight:wrapperMaxHeight}=state;const{actionIconLeft:actionIconLeft,actionIconRight:actionIconRight,backgroundColorLeft:backgroundColorLeft,backgroundColorRight:backgroundColorRight}=background;return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("div",{className:wrapperClass,"data-testid":"wrapper-list-item",onTransitionEnd:function onTransitionEnd(event){event.persist();const{propertyName:propertyName}=event;"left"===side&&(disableDeleteAnimation||"max-height"===propertyName)&&!dragged&&listElementEl.current&&diff<listElementEl.current.offsetWidth*threshold*-1?(onSwipedLeft(event),disableDeleteAnimation&&setState(prevState=>({...prevState,diff:0,isAnimating:!1}))):"right"===side&&!dragged&&listElementEl.current&&diff>listElementEl.current.offsetWidth*threshold?(onSwipedRight(event),setState(prevState=>({...prevState,diff:0,isAnimating:!1}))):setState(prevState=>({...prevState,isAnimating:!1}))},style:{maxHeight:disableDeleteAnimation?void 0:wrapperMaxHeight}},react_1.default.createElement(core_1.ListItem,{className:backgroundClass,"data-testid":"action-list-item",divider:dragged,style:{backgroundColor:"left"===side?backgroundColorLeft:backgroundColorRight,justifyContent:"left"===side?"flex-end":"flex-start",opacity:(()=>{const opacity=parseFloat((Math.abs(diff)/100).toFixed(2));return opacity<1?opacity:1})()}},"left"===side?actionIconLeft:actionIconRight),react_1.default.createElement(core_1.ListItem,Object.assign({className:listItemClass,"data-testid":"draggable-list-item",divider:dragged},ListItemProps,{onTouchStart:function onDragStartTouch(event){const touch=event.touches[0],{clientX:clientX}=touch;setState(prevState=>({...prevState,dragged:!0,dragStartX:clientX,isAnimating:!0,startTime:Date.now()}))},onTouchMove:function onTouchMove(event){const newDiff=event.touches[0].clientX-dragStartX;newDiff<0?setState(prevState=>({...prevState,diff:newDiff,side:"left"})):newDiff>0&&setState(prevState=>({...prevState,diff:newDiff,side:"right"}))},onTouchEnd:function onDragEndTouch(){dragged&&(setState(prevState=>({...prevState,dragged:!1})),listElementEl.current&&diff<listElementEl.current.offsetWidth*threshold*-1?setState(prevState=>({...prevState,diff:listElementEl.current?2*-listElementEl.current.offsetWidth:0,wrapperMaxHeight:0})):listElementEl.current&&diff>listElementEl.current.offsetWidth*threshold?setState(prevState=>({...prevState,diff:listElementEl.current?2*listElementEl.current.offsetWidth:0})):setState(prevState=>({...prevState,diff:0})))},ref:listElementEl,style:{transform:`translateX(${diff}px)`}}),itemIcon&&react_1.default.createElement(core_1.ListItemIcon,Object.assign({"data-testid":"list-item-icon"},ListItemIconProps),itemIcon),avatar&&react_1.default.createElement(core_1.ListItemAvatar,Object.assign({"data-testid":"list-item-avatar"},ListItemAvatarProps),avatar),react_1.default.createElement(core_1.ListItemText,Object.assign({},ListItemTextProps,{primary:primaryText,secondary:secondaryText})),secondaryAction&&react_1.default.createElement(core_1.ListItemSecondaryAction,Object.assign({"data-testid":"list-secondary-action"},ListItemSecondaryActionProps,{style:{display:dragged||isAnimating?"none":"block"}}),secondaryAction))))};try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{avatar:{defaultValue:null,description:"",name:"avatar",required:!1,type:{name:"ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>"}},background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"{ actionIconLeft: ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>; actionIconRight: ReactElement<...>; backgroundColorLeft: string; backgroundColorRight: string; }"}},disableDeleteAnimation:{defaultValue:{value:!1},description:"",name:"disableDeleteAnimation",required:!1,type:{name:"boolean"}},itemIcon:{defaultValue:null,description:"",name:"itemIcon",required:!1,type:{name:"ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>"}},ListItemAvatarProps:{defaultValue:{value:"{}"},description:"",name:"ListItemAvatarProps",required:!1,type:{name:"ListItemAvatarProps"}},ListItemIconProps:{defaultValue:{value:"{}"},description:"",name:"ListItemIconProps",required:!1,type:{name:"ListItemIconProps"}},ListItemProps:{defaultValue:{value:"{}"},description:"",name:"ListItemProps",required:!1,type:{name:'OverrideProps<ListItemTypeMap<{}, "li">, "li">'}},ListItemSecondaryActionProps:{defaultValue:{value:"{}"},description:"",name:"ListItemSecondaryActionProps",required:!1,type:{name:"ListItemSecondaryActionProps"}},ListItemTextProps:{defaultValue:{value:"{}"},description:"",name:"ListItemTextProps",required:!1,type:{name:"ListItemTextProps"}},onSwipedLeft:{defaultValue:null,description:"",name:"onSwipedLeft",required:!0,type:{name:"(event: any) => void"}},onSwipedRight:{defaultValue:null,description:"",name:"onSwipedRight",required:!0,type:{name:"(event: any) => void"}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!0,type:{name:"string | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>"}},secondaryAction:{defaultValue:null,description:"",name:"secondaryAction",required:!1,type:{name:"ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!1,type:{name:"string | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>"}},threshold:{defaultValue:{value:.3},description:"",name:"threshold",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}},598:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(178);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(792)],module)}.call(this,__webpack_require__(599)(module))},792:function(module,exports,__webpack_require__){var map={"./0-SwipeableListItem.stories.js":793};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=792},793:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Welcome",(function(){return Welcome})),__webpack_require__.d(__webpack_exports__,"ListOnlyWithText",(function(){return ListOnlyWithText})),__webpack_require__.d(__webpack_exports__,"ListWithAvatar",(function(){return ListWithAvatar})),__webpack_require__.d(__webpack_exports__,"ListWithListIconAndSecondaryAction",(function(){return ListWithListIconAndSecondaryAction}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(178),_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(442),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(444),_material_ui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(265),_material_ui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(267),_material_ui_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(266),_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(814),_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(815),_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(117),_src_index__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(54),_src_index__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_src_index__WEBPACK_IMPORTED_MODULE_11__),background={actionIconLeft:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.a,null),actionIconRight:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__.a,null),backgroundColorLeft:"red",backgroundColorRight:"green"};__webpack_exports__.default={title:"SwipeableListItem",component:_src_index__WEBPACK_IMPORTED_MODULE_11___default.a},Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.addParameters)({viewport:{viewports:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_3__.INITIAL_VIEWPORTS,defaultViewport:"iphone6"}});var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{align:"justify"},"The SwipeableListItem it's supposed to be used on mobile environment, so use something like ChromeDevTools in responsive mode to dispatch touch events instead of clicks."),Welcome=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{align:"center",variant:"h5",style:{marginBottom:40}},"Welcome this is the SwipeableListItem"),_ref)},ListOnlyWithText=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11___default.a,{background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 0",secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11___default.a,{background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 1",secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11___default.a,{background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 2",secondaryText:"Secondary text"}))};ListOnlyWithText.displayName="ListOnlyWithText";var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__.a,null)),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__.a,null)),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__.a,null)),ListWithAvatar=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11___default.a,{avatar:_ref2,background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 0",secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11___default.a,{avatar:_ref3,background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 1",secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11___default.a,{avatar:_ref4,background:background,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 2",secondaryText:"Secondary text"}))};ListWithAvatar.displayName="ListWithAvatar";var _ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__.a,null),_ref6=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null),_ref7=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__.a,null),_ref8=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null),_ref9=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__.a,null),_ref10=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null),ListWithListIconAndSecondaryAction=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11___default.a,{background:background,itemIcon:_ref5,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 0",secondaryAction:_ref6,secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11___default.a,{background:background,itemIcon:_ref7,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 1",secondaryAction:_ref8,secondaryText:"Secondary text"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_11___default.a,{background:background,itemIcon:_ref9,onSwipedLeft:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Deleting"),onSwipedRight:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("Editting"),primaryText:"Item List 2",secondaryAction:_ref10,secondaryText:"Secondary text"}))};ListWithListIconAndSecondaryAction.displayName="ListWithListIconAndSecondaryAction",Welcome.__docgenInfo={description:"",methods:[],displayName:"Welcome"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-SwipeableListItem.stories.js"]={name:"Welcome",docgenInfo:Welcome.__docgenInfo,path:"stories/0-SwipeableListItem.stories.js"}),ListOnlyWithText.__docgenInfo={description:"",methods:[],displayName:"ListOnlyWithText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-SwipeableListItem.stories.js"]={name:"ListOnlyWithText",docgenInfo:ListOnlyWithText.__docgenInfo,path:"stories/0-SwipeableListItem.stories.js"}),ListWithAvatar.__docgenInfo={description:"",methods:[],displayName:"ListWithAvatar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-SwipeableListItem.stories.js"]={name:"ListWithAvatar",docgenInfo:ListWithAvatar.__docgenInfo,path:"stories/0-SwipeableListItem.stories.js"}),ListWithListIconAndSecondaryAction.__docgenInfo={description:"",methods:[],displayName:"ListWithListIconAndSecondaryAction"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-SwipeableListItem.stories.js"]={name:"ListWithListIconAndSecondaryAction",docgenInfo:ListWithListIconAndSecondaryAction.__docgenInfo,path:"stories/0-SwipeableListItem.stories.js"})}},[[450,1,2]]]);
//# sourceMappingURL=main.eb90c2377f957cb3bcb6.bundle.js.map