"use strict";(self.webpackChunkpayments=self.webpackChunkpayments||[]).push([[657],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/stories/card/input/CardNumberInput.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardNumber:function(){return CardNumber},__namedExportsOrder:function(){return __namedExportsOrder}});var _templateObject,_CardNumber$parameter,_CardNumber$parameter2,_CardNumber$parameter3,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useInput.ts"),_components_card_input_CardNumberInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/card/input/CardNumberInput.tsx"),_hooks_useFocusInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useFocusInput.ts"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputWrapperParent=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.form(_templateObject||(_templateObject=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 40px;\n  margin: 40px 0 25px 0;\n"])));var meta={component:function CardNumberStories(){var cardForm=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),onInputKeydown=(0,_hooks_useFocusInput__WEBPACK_IMPORTED_MODULE_3__.Z)(cardForm).onInputKeydown,firstCardNumber=(0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__.G)("",{name:"firstCardInput",maxLength:4}),secondCardNumber=(0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__.G)("",{name:"secondCardInput",maxLength:4}),thirdCardNumber=(0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__.G)("",{name:"thirdCardInput",maxLength:4}),fourthCardNumber=(0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__.G)("",{name:"fourthCardInput",maxLength:4});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputWrapperParent,{onSubmit:function onSubmit(event){event.preventDefault()},ref:cardForm,onKeyDown:function onKeyDown(e){return onInputKeydown(e)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_card_input_CardNumberInput__WEBPACK_IMPORTED_MODULE_2__.Z,{firstNumber:firstCardNumber,secondNumber:secondCardNumber,thirdNumber:thirdCardNumber,fourthNumber:fourthCardNumber})})},title:"CardInput"};__webpack_exports__.default=meta;var CardNumber={args:{}};CardNumber.parameters=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},CardNumber.parameters),{},{docs:(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_CardNumber$parameter=CardNumber.parameters)||void 0===_CardNumber$parameter?void 0:_CardNumber$parameter.docs),{},{source:(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  args: {}\n}"},null===(_CardNumber$parameter2=CardNumber.parameters)||void 0===_CardNumber$parameter2||null===(_CardNumber$parameter3=_CardNumber$parameter2.docs)||void 0===_CardNumber$parameter3?void 0:_CardNumber$parameter3.source)})});var __namedExportsOrder=["CardNumber"]},"./src/components/card/input/CardNumberInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return CardNumberInput}});var _templateObject,_templateObject2,_templateObject3,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_common_Input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Input.tsx"),_common_Error__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Error.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardNumberInput(_ref){var firstNumber=_ref.firstNumber,secondNumber=_ref.secondNumber,thirdNumber=_ref.thirdNumber,fourthNumber=_ref.fourthNumber;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Input__WEBPACK_IMPORTED_MODULE_0__.Z,(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({isNumber:!0,maxLength:4,id:"cardNumber",type:"text",required:!0,textAlign:"center",autoFocus:!0,placeholder:"0000",autoComplete:"off",tabIndex:0},firstNumber)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Dash,{children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Input__WEBPACK_IMPORTED_MODULE_0__.Z,(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({isNumber:!0,maxLength:4,type:"text",required:!0,placeholder:"0000",tabIndex:1,autoComplete:"off",textAlign:"center"},secondNumber)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Dash,{children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Input__WEBPACK_IMPORTED_MODULE_0__.Z,(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({isNumber:!0,type:"text",maxLength:4,placeholder:"0000",isPassword:!0,required:!0,textAlign:"center",autoComplete:"off",tabIndex:2},thirdNumber)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Dash,{children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Input__WEBPACK_IMPORTED_MODULE_0__.Z,(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({isNumber:!0,maxLength:4,type:"text",placeholder:"0000",autoComplete:"off",isPassword:!0,required:!0,textAlign:"center",tabIndex:3},fourthNumber))]}),firstNumber.error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Error__WEBPACK_IMPORTED_MODULE_1__.Z,{text:firstNumber.error})]})}var Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(_templateObject||(_templateObject=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(_templateObject2||(_templateObject2=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  display: flex;\n  background-color: #ecebf1;\n  justify-content: space-between;\n  height: 45px;\n  border-radius: 7px;\n  align-items: center;\n  padding: 0 40px;\n  box-sizing: border-box;\n"]))),Dash=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.span(_templateObject3||(_templateObject3=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  margin: 0 7px;\n"])));try{CardNumberInput.displayName="CardNumberInput",CardNumberInput.__docgenInfo={description:"",displayName:"CardNumberInput",props:{firstNumber:{defaultValue:null,description:"",name:"firstNumber",required:!0,type:{name:"UseInputProps"}},secondNumber:{defaultValue:null,description:"",name:"secondNumber",required:!0,type:{name:"UseInputProps"}},thirdNumber:{defaultValue:null,description:"",name:"thirdNumber",required:!0,type:{name:"UseInputProps"}},fourthNumber:{defaultValue:null,description:"",name:"fourthNumber",required:!0,type:{name:"UseInputProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/input/CardNumberInput.tsx#CardNumberInput"]={docgenInfo:CardNumberInput.__docgenInfo,name:"CardNumberInput",path:"src/components/card/input/CardNumberInput.tsx#CardNumberInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Error.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Error}});var _templateObject,_templateObject2,_templateObject3,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Error(_ref){var text=_ref.text;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Svg,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Message,{children:text})]})}var Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(_templateObject||(_templateObject=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  display: flex;\n  align-items: center;\n  color: #ff0033;\n  margin-top: 12px;\n"]))),Svg=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.svg(_templateObject2||(_templateObject2=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  height: 28px;\n  stroke-width: 1.5px;\n"]))),Message=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span(_templateObject3||(_templateObject3=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  margin-left: 8px;\n  font-weight: 400;\n  font-size: 16px;\n"])));try{Error.displayName="Error",Error.__docgenInfo={description:"",displayName:"Error",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Error.tsx#Error"]={docgenInfo:Error.__docgenInfo,name:"Error",path:"src/components/common/Error.tsx#Error"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Input.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Input}});var taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _templateObject,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["textAlign","isWrong","isNumber","value","isPassword"];function Input(_ref){var _ref$textAlign=_ref.textAlign,textAlign=void 0===_ref$textAlign?"baseline":_ref$textAlign,isWrong=_ref.isWrong,isNumber=_ref.isNumber,value=_ref.value,isPassword=_ref.isPassword,rest=_objectWithoutProperties(_ref,_excluded),onInput=function onInput(event){event.currentTarget&&isNumber&&(event.currentTarget.value=event.currentTarget.value.replace(/[^0-9]/g,""))};return isPassword?(0,jsx_runtime.jsx)(StyledInput,(0,objectSpread2.Z)({isWrong:isWrong,textAlign:textAlign,inputMode:isNumber?"numeric":"text",onInput:onInput,isPassword:isPassword},rest)):(0,jsx_runtime.jsx)(StyledInput,(0,objectSpread2.Z)({isWrong:isWrong,textAlign:textAlign,inputMode:isNumber?"numeric":"text",onInput:onInput,value:value},rest))}var StyledInput=styled_components_browser_esm.ZP.input(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  border: none;\n  background-color: #ecebf1;\n  border: ",";\n  font-size: 18px;\n  font-weight: 500;\n  width: 100%;\n  text-align: ",";\n\n  -webkit-text-security: ",";\n\n  &::placeholder {\n    font-size: 16px;\n  }\n"])),(function(_ref2){return _ref2.isWrong?"1px solid #ff0033":""}),(function(_ref3){return _ref3.textAlign}),(function(_ref4){return _ref4.isPassword?"disc":""}));try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{textAlign:{defaultValue:{value:"baseline"},description:"",name:"textAlign",required:!1,type:{name:"string"}},isNumber:{defaultValue:null,description:"",name:"isNumber",required:!1,type:{name:"boolean"}},isWrong:{defaultValue:null,description:"",name:"isWrong",required:!1,type:{name:"boolean"}},isPassword:{defaultValue:null,description:"",name:"isPassword",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/common/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/constant.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{e3:function(){return DISMISS_TAB_INDEX}});var DISMISS_TAB_INDEX=999},"./src/hooks/useFocusInput.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useFocusInput}});var _constant__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constant.ts"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils.ts"),useFocusInput=function useFocusInput(formRef){var setNextInput=function setNextInput(event){if(formRef.current)for(var form=event.currentTarget,currentInputIndex=Array.prototype.indexOf.call(form,event.target),totalLength=formRef.current.length,_loop=function _loop(){var currentInput=formRef.current[index];return currentInput.tabIndex===_constant__WEBPACK_IMPORTED_MODULE_0__.e3?"continue":(setTimeout((function(){currentInput.focus()})),"break")},index=currentInputIndex+1;index<totalLength;index+=1){var _ret=_loop();if("continue"!==_ret&&"break"===_ret)break}};return{onInputKeydown:function onInputKeydown(event){var active=document.activeElement;if(active){var curMaxLength=active.getAttribute("maxLength"),curInputKind=active.getAttribute("inputmode"),isValueMaxLength=active.value.length+1>=Number(curMaxLength),isNumberRequirement="numeric"===curInputKind&&(0,_utils__WEBPACK_IMPORTED_MODULE_1__.hj)(event.key),isTextRequirement="text"===curInputKind&&(0,_utils__WEBPACK_IMPORTED_MODULE_1__.jG)(event.key);isValueMaxLength&&(isNumberRequirement||isTextRequirement)&&setNextInput(event)}}}}},"./src/hooks/useInput.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G:function(){return useInput}});var _home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useInput=function useInput(initialValue,_ref){var name=_ref.name,_ref$validate=_ref.validate,validate=void 0===_ref$validate?function(){return!0}:_ref$validate,errorMessage=_ref.errorMessage,maxLength=_ref.maxLength,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),_useState2=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),_useState4=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState3,2),error=_useState4[0],setError=_useState4[1];return{value:value,onChange:function onChange(e){var value=e.currentTarget.value;if(!(maxLength&&maxLength<e.currentTarget.value.length))return validate(value)?(setValue(value),void setError("")):void setError(errorMessage)},name:name,error:error,setError:setError,isWrong:""!==error}}},"./src/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J0:function(){return monthValidate},cI:function(){return isPrevDate},g4:function(){return createUniqueId},hj:function(){return isNumber},jG:function(){return isOnlyKoreanAndEnglish},uR:function(){return yearValidate}});var isNumber=function isNumber(value){return!Number.isNaN(Number(value))},isOnlyKoreanAndEnglish=function isOnlyKoreanAndEnglish(value){return!/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣a-zA-Z\s]/.test(value)},createUniqueId=function createUniqueId(){return"id"+Math.random().toString(16).slice(2)},isPrevDate=function isPrevDate(year,month){var date=new Date,currentYear=date.getFullYear()%100,currentMonth=date.getMonth()+1;return year<currentYear||year===currentYear&&month<currentMonth},monthValidate=function monthValidate(month){return Number(month)<=12&&Number(month)>=1},yearValidate=function yearValidate(year){var currentYear=(new Date).getFullYear()%100;return Number(year)>=currentYear&&Number(year)<=currentYear+5}}}]);