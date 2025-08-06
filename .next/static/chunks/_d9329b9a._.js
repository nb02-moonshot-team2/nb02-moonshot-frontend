(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/shared/components/PopoverMenu.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "PopoverMenu-module__cQMBkG__active",
  "button": "PopoverMenu-module__cQMBkG__button",
  "menu": "PopoverMenu-module__cQMBkG__menu",
  "menuItem": "PopoverMenu-module__cQMBkG__menuItem",
});
}),
"[project]/shared/components/PopoverMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tiny$2d$popover$2f$dist$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-tiny-popover/dist/Popover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$PopoverMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/shared/components/PopoverMenu.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$PopoverMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const PopoverMenu = (param)=>{
    let { className, value, icon, options: items, onChange } = param;
    _s();
    const [isPopoverOpen, setIsPopoverOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tiny$2d$popover$2f$dist$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        isOpen: isPopoverOpen,
        positions: [
            'bottom',
            'left',
            'top',
            'right'
        ],
        padding: 8,
        align: "end",
        onClickOutside: ()=>setIsPopoverOpen(false),
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$PopoverMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu,
            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: cx('menuItem', {
                        active: value === item.value
                    }),
                    onClick: ()=>{
                        onChange(item.value);
                        setIsPopoverOpen(false);
                    },
                    children: item.label
                }, item.label, false, {
                    fileName: "[project]/shared/components/PopoverMenu.tsx",
                    lineNumber: 41,
                    columnNumber: 13
                }, void 0))
        }, void 0, false, {
            fileName: "[project]/shared/components/PopoverMenu.tsx",
            lineNumber: 39,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: cx('button', {
                active: isPopoverOpen
            }, className),
            onClick: ()=>setIsPopoverOpen(!isPopoverOpen),
            children: icon
        }, void 0, false, {
            fileName: "[project]/shared/components/PopoverMenu.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/shared/components/PopoverMenu.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PopoverMenu, "sCVprqBo172ZEFIIdQ7Sp8tsy2c=");
_c = PopoverMenu;
const __TURBOPACK__default__export__ = PopoverMenu;
var _c;
__turbopack_context__.k.register(_c, "PopoverMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/more-vertical.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _g;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var SvgMoreVertical = function SvgMoreVertical(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
    }, props), _g || (_g = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("g", {
        stroke: "#66666E",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    }))));
};
_c = SvgMoreVertical;
const __TURBOPACK__default__export__ = SvgMoreVertical;
var _c;
__turbopack_context__.k.register(_c, "SvgMoreVertical");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/layout.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "breadcrumb": "layout-module__u76s8a__breadcrumb",
  "chevron": "layout-module__u76s8a__chevron",
  "container": "layout-module__u76s8a__container",
  "description": "layout-module__u76s8a__description",
  "header": "layout-module__u76s8a__header",
  "link": "layout-module__u76s8a__link",
  "moreMenu": "layout-module__u76s8a__moreMenu",
  "projectIcon": "layout-module__u76s8a__projectIcon",
  "title": "layout-module__u76s8a__title",
  "wrapper": "layout-module__u76s8a__wrapper",
});
}),
"[project]/public/assets/close-button.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _rect, _path;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var SvgCloseButton = function SvgCloseButton(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), _rect || (_rect = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("rect", {
        width: 24,
        height: 24,
        fill: "#333236",
        rx: 12
    })), _path || (_path = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeWidth: 1.5,
        d: "M7.2 7.2 12 12m4.8 4.8L12 12m0 0 4.8-4.8M12 12l-4.8 4.8"
    })));
};
_c = SvgCloseButton;
const __TURBOPACK__default__export__ = SvgCloseButton;
var _c;
__turbopack_context__.k.register(_c, "SvgCloseButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shared/components/Modal.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "Modal-module__WlqoGq__backdrop",
  "backdropFadeIn": "Modal-module__WlqoGq__backdropFadeIn",
  "closeButton": "Modal-module__WlqoGq__closeButton",
  "modal": "Modal-module__WlqoGq__modal",
});
}),
"[project]/shared/components/Modal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$close$2d$button$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/close-button.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/shared/components/Modal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const Modal = (param)=>{
    let { className, isOpen, children, onClose } = param;
    _s();
    const preventClose = (e)=>{
        e.stopPropagation();
    };
    const lockScroll = ()=>{
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '16px';
    };
    const unlockScroll = ()=>{
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0';
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (isOpen) {
                lockScroll();
                return ({
                    "Modal.useEffect": ()=>{
                        unlockScroll();
                    }
                })["Modal.useEffect"];
            }
        }
    }["Modal.useEffect"], [
        isOpen
    ]);
    if (!isOpen) return null;
    const modalRoot = document.getElementById('modal-root');
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx('backdrop'),
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: cx('modal', className),
            onClick: preventClose,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$close$2d$button$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: cx('closeButton'),
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/shared/components/Modal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/shared/components/Modal.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/shared/components/Modal.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), modalRoot);
};
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shared/components/Label.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "error": "Label-module__5q0OMa__error",
  "label": "Label-module__5q0OMa__label",
});
}),
"[project]/shared/components/Label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/shared/components/Label.module.css [app-client] (css module)");
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const Label = (param)=>{
    let { error, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ...props,
        className: cx('label', {
            error
        })
    }, void 0, false, {
        fileName: "[project]/shared/components/Label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Label;
const __TURBOPACK__default__export__ = Label;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shared/components/Input.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "error": "Input-module__ITmFJq__error",
  "errorMessage": "Input-module__ITmFJq__errorMessage",
  "input": "Input-module__ITmFJq__input",
  "search": "Input-module__ITmFJq__search",
});
}),
"[project]/shared/components/Input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": ()=>Textarea,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/shared/components/Input.module.css [app-client] (css module)");
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const Input = (param)=>{
    let { className, search, error, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ...props,
                className: cx('input', className, {
                    search,
                    error
                })
            }, void 0, false, {
                fileName: "[project]/shared/components/Input.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                children: error
            }, void 0, false, {
                fileName: "[project]/shared/components/Input.tsx",
                lineNumber: 22,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c = Input;
const Textarea = (param)=>{
    let { className, error, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: cx('input', className, {
                    error
                }),
                ...props
            }, void 0, false, {
                fileName: "[project]/shared/components/Input.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                children: error
            }, void 0, false, {
                fileName: "[project]/shared/components/Input.tsx",
                lineNumber: 35,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c1 = Textarea;
const __TURBOPACK__default__export__ = Input;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shared/components/Button.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "Button-module__dWMkza__button",
  "danger": "Button-module__dWMkza__danger",
  "link": "Button-module__dWMkza__link",
  "minimal": "Button-module__dWMkza__minimal",
  "small": "Button-module__dWMkza__small",
});
}),
"[project]/shared/components/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LinkButton": ()=>LinkButton,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/shared/components/Button.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const Button = (param)=>{
    let { className, appearance = 'default', sizes = 'default', type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        ...props,
        className: cx('button', appearance, sizes, className)
    }, void 0, false, {
        fileName: "[project]/shared/components/Button.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
const LinkButton = (param)=>{
    let { className, appearance = 'default', sizes = 'default', ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        className: cx('button', 'link', appearance, sizes, className)
    }, void 0, false, {
        fileName: "[project]/shared/components/Button.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = LinkButton;
const __TURBOPACK__default__export__ = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "LinkButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "EditProjectModal-module__dGFV-W__button",
  "form": "EditProjectModal-module__dGFV-W__form",
  "input": "EditProjectModal-module__dGFV-W__input",
  "inputContainer": "EditProjectModal-module__dGFV-W__inputContainer",
  "modal": "EditProjectModal-module__dGFV-W__modal",
  "title": "EditProjectModal-module__dGFV-W__title",
});
}),
"[project]/app/(main)/projects/(projects)/[projectId]/data:6afca3 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7ff62f677e046d6acec660c410453a91606649e475":"updateProject"},"app/(main)/projects/(projects)/[projectId]/actions.ts",""] */ __turbopack_context__.s({
    "updateProject": ()=>updateProject
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateProject = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7ff62f677e046d6acec660c410453a91606649e475", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProject"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCAqIGFzIGFwaSBmcm9tICdAL3NoYXJlZC9hcGknO1xuaW1wb3J0IEFjdGlvblJlc3VsdCBmcm9tICdAL3R5cGVzL0FjdGlvblJlc3VsdCc7XG5pbXBvcnQgeyBQcm9qZWN0LCBUYXNrIH0gZnJvbSAnQC90eXBlcy9lbnRpdGllcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuXG5pbnRlcmZhY2UgQ3JlYXRlVGFza0lucHV0IHtcbiAgcHJvamVjdElkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHN0YXJ0WWVhcjogbnVtYmVyO1xuICBzdGFydE1vbnRoOiBudW1iZXI7XG4gIHN0YXJ0RGF5OiBudW1iZXI7XG4gIGVuZFllYXI6IG51bWJlcjtcbiAgZW5kTW9udGg6IG51bWJlcjtcbiAgZW5kRGF5OiBudW1iZXI7XG4gIHRhZ3M6IHN0cmluZ1tdO1xuICBhdHRhY2htZW50czogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gYXN5bmMgKFxuICBwYXlsb2FkOiBDcmVhdGVUYXNrSW5wdXRcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFRhc2s+PiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFzayA9IGF3YWl0IGFwaS5jcmVhdGVUYXNrKHBheWxvYWQpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvcHJvamVjdHMvJHtwYXlsb2FkLnByb2plY3RJZH0vdGFza3NgKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogJ+2VoCDsnbwg7IOd7ISxIOyEseqztScsXG4gICAgICBkYXRhOiB0YXNrLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yXG4gICAgICAgICAgPyBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgOiAn7ZWgIOydvCDsg53shLEg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuaW50ZXJmYWNlIFVwZGF0ZVByb2plY3RJbnB1dCB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvamVjdCA9IGFzeW5jIChcbiAgcHJvamVjdElkOiBudW1iZXIsXG4gIHBheWxvYWQ6IFVwZGF0ZVByb2plY3RJbnB1dFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UHJvamVjdD4+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgYXBpLnVwZGF0ZVByb2plY3QocHJvamVjdElkLCBwYXlsb2FkKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7cHJvamVjdElkfWApO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn7ZSE66Gc7KCd7Yq4IOyImOyglSDshLHqs7UnLFxuICAgICAgZGF0YTogcHJvamVjdCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+2UhOuhnOygne2KuCDsiJjsoJUg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSBhc3luYyAoXG4gIHByb2plY3RJZDogbnVtYmVyXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxudWxsPj4gPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaS5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn7ZSE66Gc7KCd7Yq4IOyCreygnCDshLHqs7UnLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+2UhOuhnOygne2KuCDsgq3soJwg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGludml0ZU1lbWJlciA9IGFzeW5jIChcbiAgcHJvamVjdElkOiBudW1iZXIsXG4gIGVtYWlsOiBzdHJpbmdcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpLmludml0ZU1lbWJlcihwcm9qZWN0SWQsIGVtYWlsKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7cHJvamVjdElkfS91c2Vyc2ApO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn66mk67KEIOy0iOuMgCDshLHqs7UnLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+uppOuyhCDstIjrjIAg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFRBaURhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$EditProjectModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$data$3a$6afca3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/data:6afca3 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$EditProjectModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const EditProjectModal = (param)=>{
    let { project, isOpen, onSubmit, onClose } = param;
    _s();
    const [state, dispatch, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])({
        "EditProjectModal.useActionState": async (prevState, formState)=>{
            const values = {
                name: formState.get('name'),
                description: formState.get('description')
            };
            const { error, success } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$data$3a$6afca3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProject"])(project.id, values);
            if (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error);
            }
            if (success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(success);
                onSubmit();
            }
            return values;
        }
    }["EditProjectModal.useActionState"], {
        name: project.name,
        description: project.description
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: cx('modal'),
            isOpen: isOpen,
            onClose: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: cx('title'),
                    children: "프로젝트 수정"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: cx('form'),
                    action: dispatch,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cx('inputContainer'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: "프로젝트 이름"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    required: true,
                                    className: cx('input'),
                                    name: "name",
                                    defaultValue: state.name,
                                    placeholder: "최대 10자",
                                    maxLength: 10
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cx('inputContainer'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: "프로젝트 설명"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: cx('input'),
                                    name: "description",
                                    defaultValue: state.description,
                                    placeholder: "최대 40자",
                                    maxLength: 40
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: cx('button'),
                            type: "submit",
                            disabled: isPending,
                            children: "수정하기"
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(EditProjectModal, "yC70uunRLFo+Rua9arIxeyQHloE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = EditProjectModal;
const __TURBOPACK__default__export__ = EditProjectModal;
var _c;
__turbopack_context__.k.register(_c, "EditProjectModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/DeleteProjectModal.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "DeleteProjectModal-module__c4Km6W__button",
  "content": "DeleteProjectModal-module__c4Km6W__content",
  "description": "DeleteProjectModal-module__c4Km6W__description",
  "form": "DeleteProjectModal-module__c4Km6W__form",
  "modal": "DeleteProjectModal-module__c4Km6W__modal",
  "title": "DeleteProjectModal-module__c4Km6W__title",
});
}),
"[project]/app/(main)/projects/(projects)/[projectId]/data:d71e07 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f8d0715975d5aac16fd86623b218bd124952b7307":"deleteProject"},"app/(main)/projects/(projects)/[projectId]/actions.ts",""] */ __turbopack_context__.s({
    "deleteProject": ()=>deleteProject
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteProject = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f8d0715975d5aac16fd86623b218bd124952b7307", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProject"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCAqIGFzIGFwaSBmcm9tICdAL3NoYXJlZC9hcGknO1xuaW1wb3J0IEFjdGlvblJlc3VsdCBmcm9tICdAL3R5cGVzL0FjdGlvblJlc3VsdCc7XG5pbXBvcnQgeyBQcm9qZWN0LCBUYXNrIH0gZnJvbSAnQC90eXBlcy9lbnRpdGllcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuXG5pbnRlcmZhY2UgQ3JlYXRlVGFza0lucHV0IHtcbiAgcHJvamVjdElkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHN0YXJ0WWVhcjogbnVtYmVyO1xuICBzdGFydE1vbnRoOiBudW1iZXI7XG4gIHN0YXJ0RGF5OiBudW1iZXI7XG4gIGVuZFllYXI6IG51bWJlcjtcbiAgZW5kTW9udGg6IG51bWJlcjtcbiAgZW5kRGF5OiBudW1iZXI7XG4gIHRhZ3M6IHN0cmluZ1tdO1xuICBhdHRhY2htZW50czogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gYXN5bmMgKFxuICBwYXlsb2FkOiBDcmVhdGVUYXNrSW5wdXRcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFRhc2s+PiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFzayA9IGF3YWl0IGFwaS5jcmVhdGVUYXNrKHBheWxvYWQpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvcHJvamVjdHMvJHtwYXlsb2FkLnByb2plY3RJZH0vdGFza3NgKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogJ+2VoCDsnbwg7IOd7ISxIOyEseqztScsXG4gICAgICBkYXRhOiB0YXNrLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yXG4gICAgICAgICAgPyBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgOiAn7ZWgIOydvCDsg53shLEg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuaW50ZXJmYWNlIFVwZGF0ZVByb2plY3RJbnB1dCB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvamVjdCA9IGFzeW5jIChcbiAgcHJvamVjdElkOiBudW1iZXIsXG4gIHBheWxvYWQ6IFVwZGF0ZVByb2plY3RJbnB1dFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UHJvamVjdD4+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgYXBpLnVwZGF0ZVByb2plY3QocHJvamVjdElkLCBwYXlsb2FkKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7cHJvamVjdElkfWApO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn7ZSE66Gc7KCd7Yq4IOyImOyglSDshLHqs7UnLFxuICAgICAgZGF0YTogcHJvamVjdCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+2UhOuhnOygne2KuCDsiJjsoJUg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSBhc3luYyAoXG4gIHByb2plY3RJZDogbnVtYmVyXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxudWxsPj4gPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaS5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn7ZSE66Gc7KCd7Yq4IOyCreygnCDshLHqs7UnLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+2UhOuhnOygne2KuCDsgq3soJwg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGludml0ZU1lbWJlciA9IGFzeW5jIChcbiAgcHJvamVjdElkOiBudW1iZXIsXG4gIGVtYWlsOiBzdHJpbmdcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpLmludml0ZU1lbWJlcihwcm9qZWN0SWQsIGVtYWlsKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7cHJvamVjdElkfS91c2Vyc2ApO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn66mk67KEIOy0iOuMgCDshLHqs7UnLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+uppOuyhCDstIjrjIAg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFRBeUVhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/DeleteProjectModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$DeleteProjectModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/DeleteProjectModal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$data$3a$d71e07__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/data:d71e07 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$DeleteProjectModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const DeleteProjectModal = (param)=>{
    let { projectId, isOpen, onSubmit, onClose } = param;
    _s();
    const [, dispatch, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])({
        "DeleteProjectModal.useActionState": async (prevState)=>{
            const { error, success } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$data$3a$d71e07__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProject"])(projectId);
            if (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error);
            }
            if (success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(success);
                onSubmit();
            }
            return prevState;
        }
    }["DeleteProjectModal.useActionState"], undefined);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: cx('modal'),
            isOpen: isOpen,
            onClose: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: cx('content'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: cx('title'),
                            children: "해당 프로젝트를 삭제하시겠어요?"
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/DeleteProjectModal.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: cx('description'),
                            children: "프로젝트와 관련된 모든 정보가 사라지며, 되돌릴 수 없습니다."
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/DeleteProjectModal.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/DeleteProjectModal.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: cx('form'),
                    action: dispatch,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: cx('button'),
                        appearance: "danger",
                        type: "submit",
                        disabled: isPending,
                        children: "삭제하기"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/DeleteProjectModal.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/DeleteProjectModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/DeleteProjectModal.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(DeleteProjectModal, "ORSOuAxNrH5KBUol4rx7NJsjdHY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = DeleteProjectModal;
const __TURBOPACK__default__export__ = DeleteProjectModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteProjectModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/MoreMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$PopoverMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/PopoverMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$more$2d$vertical$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/more-vertical.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$layout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/layout.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$EditProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/EditProjectModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$DeleteProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/DeleteProjectModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$layout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const MoreMenu = (param)=>{
    let { className, project } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$PopoverMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: cx(className),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$more$2d$vertical$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: cx('icon')
                }, void 0, false, {
                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MoreMenu.tsx",
                    lineNumber: 31,
                    columnNumber: 15
                }, void 0),
                onChange: setSelectedOption,
                options: [
                    {
                        label: '수정',
                        value: 'edit'
                    },
                    {
                        label: '삭제',
                        value: 'delete'
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MoreMenu.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$EditProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                project: project,
                isOpen: selectedOption === 'edit',
                onClose: ()=>setSelectedOption(null),
                onSubmit: ()=>setSelectedOption(null)
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MoreMenu.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$DeleteProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                projectId: project.id,
                isOpen: selectedOption === 'delete',
                onClose: ()=>setSelectedOption(null),
                onSubmit: ()=>{
                    setSelectedOption(null);
                    router.push('/projects');
                }
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MoreMenu.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(MoreMenu, "DoZ4XoplUq/DC/vuqikvU+MM7nU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MoreMenu;
const __TURBOPACK__default__export__ = MoreMenu;
var _c;
__turbopack_context__.k.register(_c, "MoreMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shared/components/Dropdown.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Dropdown-module__All2ba__active",
  "caret": "Dropdown-module__All2ba__caret",
  "dropdown": "Dropdown-module__All2ba__dropdown",
  "open": "Dropdown-module__All2ba__open",
  "option": "Dropdown-module__All2ba__option",
  "options": "Dropdown-module__All2ba__options",
  "select": "Dropdown-module__All2ba__select",
});
}),
"[project]/public/assets/chevron-down.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _path;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var SvgChevronDown = function SvgChevronDown(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), _path || (_path = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.3,
        d: "m4 6 4 4 4-4"
    })));
};
_c = SvgChevronDown;
const __TURBOPACK__default__export__ = SvgChevronDown;
var _c;
__turbopack_context__.k.register(_c, "SvgChevronDown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shared/components/Dropdown.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Dropdown$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/shared/components/Dropdown.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$chevron$2d$down$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/chevron-down.svg.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Dropdown$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const Dropdown = (param)=>{
    let { className = '', options, value, placeholder, onChange, disabled = false } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleChange = (value)=>{
        onChange(value);
        setIsOpen(false);
    };
    const selectedOption = options.find((option)=>option.value === value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dropdown.useEffect": ()=>{
            const handleClickOutside = {
                "Dropdown.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["Dropdown.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Dropdown.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["Dropdown.useEffect"];
        }
    }["Dropdown.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx('dropdown'),
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cx('select', {
                    open: isOpen
                }, className),
                onClick: ()=>{
                    if (disabled) return;
                    setIsOpen(!isOpen);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: selectedOption ? selectedOption.label : placeholder
                    }, void 0, false, {
                        fileName: "[project]/shared/components/Dropdown.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: cx('caret'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$chevron$2d$down$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/shared/components/Dropdown.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/shared/components/Dropdown.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/shared/components/Dropdown.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cx('options'),
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: cx('option', {
                            active: option.value === value
                        }),
                        onClick: ()=>handleChange(option.value),
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/shared/components/Dropdown.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/shared/components/Dropdown.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shared/components/Dropdown.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Dropdown, "uhOyve9TWk+bvhPJTPlaMsUEQAY=");
_c = Dropdown;
const __TURBOPACK__default__export__ = Dropdown;
var _c;
__turbopack_context__.k.register(_c, "Dropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/sort.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _g;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var SvgSort = function SvgSort(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 20 20"
    }, props), _g || (_g = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("g", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M17.5 14.167 14.167 17.5l-3.334-3.333M14.167 17.5v-15M2.5 5.833 5.834 2.5l3.333 3.333M5.833 2.5v15"
    }))));
};
_c = SvgSort;
const __TURBOPACK__default__export__ = SvgSort;
var _c;
__turbopack_context__.k.register(_c, "SvgSort");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/search.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _g;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var SvgSearch = function SvgSearch(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 20 20"
    }, props), _g || (_g = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("g", {
        stroke: "#66666E",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M9.167 15.833a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333M17.5 17.5l-3.625-3.625"
    }))));
};
_c = SvgSearch;
const __TURBOPACK__default__export__ = SvgSearch;
var _c;
__turbopack_context__.k.register(_c, "SvgSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/plus.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _g;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var SvgPlus = function SvgPlus(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 16 17"
    }, props), _g || (_g = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("g", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M8 3.833v9.334M3.333 8.5h9.333"
    }))));
};
_c = SvgPlus;
const __TURBOPACK__default__export__ = SvgPlus;
var _c;
__turbopack_context__.k.register(_c, "SvgPlus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "ProjectTab-module__ytmqgG__active",
  "assigneeDropdown": "ProjectTab-module__ytmqgG__assigneeDropdown",
  "container": "ProjectTab-module__ytmqgG__container",
  "createTaskButton": "ProjectTab-module__ytmqgG__createTaskButton",
  "inputContainer": "ProjectTab-module__ytmqgG__inputContainer",
  "modal": "ProjectTab-module__ytmqgG__modal",
  "modalButton": "ProjectTab-module__ytmqgG__modalButton",
  "modalDescription": "ProjectTab-module__ytmqgG__modalDescription",
  "modalForm": "ProjectTab-module__ytmqgG__modalForm",
  "modalInput": "ProjectTab-module__ytmqgG__modalInput",
  "modalTitle": "ProjectTab-module__ytmqgG__modalTitle",
  "searchForm": "ProjectTab-module__ytmqgG__searchForm",
  "searchIcon": "ProjectTab-module__ytmqgG__searchIcon",
  "searchInput": "ProjectTab-module__ytmqgG__searchInput",
  "tab": "ProjectTab-module__ytmqgG__tab",
  "tabs": "ProjectTab-module__ytmqgG__tabs",
  "taskTabMenu": "ProjectTab-module__ytmqgG__taskTabMenu",
});
}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "CreateTaskModal-module__NZjm2q__button",
  "form": "CreateTaskModal-module__NZjm2q__form",
  "input": "CreateTaskModal-module__NZjm2q__input",
  "inputContainer": "CreateTaskModal-module__NZjm2q__inputContainer",
  "modal": "CreateTaskModal-module__NZjm2q__modal",
  "title": "CreateTaskModal-module__NZjm2q__title",
  "twoColumn": "CreateTaskModal-module__NZjm2q__twoColumn",
});
}),
"[project]/shared/components/TagInput.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "cursor": "TagInput-module__2MEeTa__cursor",
  "hiddenSpan": "TagInput-module__2MEeTa__hiddenSpan",
  "input": "TagInput-module__2MEeTa__input",
  "isFocused": "TagInput-module__2MEeTa__isFocused",
  "placeholder": "TagInput-module__2MEeTa__placeholder",
  "tag": "TagInput-module__2MEeTa__tag",
});
}),
"[project]/shared/components/TagInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$TagInput$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/shared/components/TagInput.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$TagInput$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const SYMBOL_TAG_INPUT_CURSOR = Symbol('tag input cursor');
const CursorImpl = (param, ref)=>{
    let { value, onKeyDown, onChange, onFocus, onBlur } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: cx('hiddenSpan'),
                children: value
            }, void 0, false, {
                fileName: "[project]/shared/components/TagInput.tsx",
                lineNumber: 33,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: cx('cursor'),
                value: value,
                onKeyDown: onKeyDown,
                onChange: onChange,
                onFocus: onFocus,
                onBlur: onBlur,
                ref: ref
            }, void 0, false, {
                fileName: "[project]/shared/components/TagInput.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shared/components/TagInput.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CursorImpl;
const Cursor = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(CursorImpl);
_c1 = Cursor;
const Tag = (param)=>{
    let { value } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: cx('tag'),
        children: [
            "#",
            value
        ]
    }, void 0, true, {
        fileName: "[project]/shared/components/TagInput.tsx",
        lineNumber: 49,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Tag;
const Placeholder = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: cx('placeholder'),
        children: "#태그 후 Enter"
    }, void 0, false, {
        fileName: "[project]/shared/components/TagInput.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = Placeholder;
const TagInput = (param)=>{
    let { value, onChange, maxTags } = param;
    _s();
    const [tagsWithCursor, setTagsWithCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        ...value,
        SYMBOL_TAG_INPUT_CURSOR
    ]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getCursorIndex = ()=>tagsWithCursor.findIndex((tag)=>tag === SYMBOL_TAG_INPUT_CURSOR);
    const addTag = (value)=>{
        if (tagsWithCursor.length >= maxTags) return;
        const safeValue = value.trim();
        if (tagsWithCursor.includes(safeValue)) return;
        const cursorIndex = getCursorIndex();
        const nextTagsWithCursor = [
            ...tagsWithCursor.slice(0, cursorIndex),
            safeValue,
            ...tagsWithCursor.slice(cursorIndex)
        ];
        setTagsWithCursor(nextTagsWithCursor);
        const plainNextTags = nextTagsWithCursor.filter((tag)=>tag !== SYMBOL_TAG_INPUT_CURSOR).map((tag)=>tag);
        onChange(plainNextTags);
    };
    const removeTag = ()=>{
        const cursorIndex = getCursorIndex();
        setTagsWithCursor(tagsWithCursor.filter((_, i)=>i !== cursorIndex - 1));
    };
    const moveCursor = (direction)=>{
        var _inputRef_current;
        const cursorIndex = getCursorIndex();
        if (direction === 'left') {
            if (cursorIndex === 0) return;
            setTagsWithCursor([
                ...tagsWithCursor.slice(0, cursorIndex - 1),
                SYMBOL_TAG_INPUT_CURSOR,
                tagsWithCursor[cursorIndex - 1],
                ...tagsWithCursor.slice(cursorIndex + 1)
            ]);
        } else {
            if (cursorIndex === tagsWithCursor.length - 1) return;
            setTagsWithCursor([
                ...tagsWithCursor.slice(0, cursorIndex),
                tagsWithCursor[cursorIndex + 1],
                SYMBOL_TAG_INPUT_CURSOR,
                ...tagsWithCursor.slice(cursorIndex + 2)
            ]);
        }
        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
    };
    const handleFocus = ()=>{
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    const handleKeyDown = (event)=>{
        switch(event.key){
            case '#':
                {
                    event.preventDefault();
                    break;
                }
            case 'Enter':
                {
                    if (inputValue) {
                        addTag(inputValue);
                        setInputValue('');
                        event.preventDefault();
                    }
                    break;
                }
            case 'Backspace':
                {
                    if (!inputValue) {
                        removeTag();
                    }
                    break;
                }
            case 'ArrowLeft':
                {
                    if (!inputValue) {
                        moveCursor('left');
                    }
                    break;
                }
            case 'ArrowRight':
                {
                    if (!inputValue) {
                        moveCursor('right');
                    }
                    break;
                }
            default:
                {
                    break;
                }
        }
    };
    const handleChange = (event)=>{
        setInputValue(event.target.value || '');
    };
    const handleInputFocus = ()=>{
        setIsFocused(true);
    };
    const handleInputBlur = ()=>{
        setIsFocused(false);
    };
    const showPlaceholder = tagsWithCursor.length < 3 && tagsWithCursor[tagsWithCursor.length - 1] === SYMBOL_TAG_INPUT_CURSOR && inputValue === '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx('input', {
            isFocused
        }),
        ref: containerRef,
        onClick: handleFocus,
        onFocus: handleFocus,
        children: [
            tagsWithCursor.map((tag, index)=>tag === SYMBOL_TAG_INPUT_CURSOR ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cursor, {
                    value: inputValue,
                    onKeyDown: handleKeyDown,
                    onChange: handleChange,
                    onFocus: handleInputFocus,
                    onBlur: handleInputBlur,
                    ref: inputRef
                }, 'cursor', false, {
                    fileName: "[project]/shared/components/TagInput.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                    value: tag
                }, index, false, {
                    fileName: "[project]/shared/components/TagInput.tsx",
                    lineNumber: 196,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))),
            showPlaceholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {}, void 0, false, {
                fileName: "[project]/shared/components/TagInput.tsx",
                lineNumber: 199,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shared/components/TagInput.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TagInput, "+qfFODmRbvXwtAkl9ETEqdal5GQ=");
_c4 = TagInput;
const __TURBOPACK__default__export__ = TagInput;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "CursorImpl");
__turbopack_context__.k.register(_c1, "Cursor");
__turbopack_context__.k.register(_c2, "Tag");
__turbopack_context__.k.register(_c3, "Placeholder");
__turbopack_context__.k.register(_c4, "TagInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/data:89f79a [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7ff85bb605436f99b05fb9b6fc52deda940e6af5d3":"uploadFiles"},"app/actions.ts",""] */ __turbopack_context__.s({
    "uploadFiles": ()=>uploadFiles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var uploadFiles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7ff85bb605436f99b05fb9b6fc52deda940e6af5d3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "uploadFiles"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCBBY3Rpb25SZXN1bHQgZnJvbSAnQC90eXBlcy9BY3Rpb25SZXN1bHQnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJ0Avc2hhcmVkL2FwaSc7XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRGaWxlcyA9IGFzeW5jIChcbiAgZmlsZXM6IEZpbGVbXVxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8c3RyaW5nW10+PiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJscyA9IGF3YWl0IGFwaS51cGxvYWRGaWxlcyhmaWxlcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgc3VjY2VzczogJ+2MjOydvCDsl4XroZzrk5wg7ISx6rO1JyxcbiAgICAgIGRhdGE6IHVybHMsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+yYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1SQUthIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shared/components/FileInput.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "FileInput-module__coDAgG__button",
  "closeIcon": "FileInput-module__coDAgG__closeIcon",
  "container": "FileInput-module__coDAgG__container",
  "file": "FileInput-module__coDAgG__file",
  "fileName": "FileInput-module__coDAgG__fileName",
  "input": "FileInput-module__coDAgG__input",
  "link": "FileInput-module__coDAgG__link",
});
}),
"[project]/shared/components/FileInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$close$2d$button$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/close-button.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$89f79a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:89f79a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$FileInput$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/shared/components/FileInput.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$FileInput$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const FileInput = (param)=>{
    let { urls = [], disabled = false, onChange = ()=>{} } = param;
    _s();
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFileUpload = async (newFiles)=>{
        setIsPending(true);
        const { error, success, data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$89f79a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["uploadFiles"])(newFiles);
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error);
        }
        if (success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(success);
        }
        if (data) {
            const nextUrl = [
                ...urls,
                ...data
            ];
            onChange(nextUrl);
        }
        setIsPending(false);
    };
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleButtonClick = ()=>{
        var _inputRef_current;
        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.click();
    };
    const handleFileChange = (event)=>{
        const newFiles = event.target.files || [];
        if (newFiles.length > 0) {
            handleFileUpload(Array.from(newFiles));
        }
    };
    const handleRemoveClick = (url)=>{
        onChange(urls.filter((u)=>u !== url));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx('container'),
        children: [
            urls.filter(Boolean).map((url)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: cx('file'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: cx('link', 'fileName'),
                            href: url,
                            target: "_blank",
                            children: url.split('/').pop()
                        }, void 0, false, {
                            fileName: "[project]/shared/components/FileInput.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$close$2d$button$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: cx('closeIcon'),
                            onClick: ()=>handleRemoveClick(url)
                        }, void 0, false, {
                            fileName: "[project]/shared/components/FileInput.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, url, true, {
                    fileName: "[project]/shared/components/FileInput.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: cx('button'),
                type: "button",
                onClick: handleButtonClick,
                disabled: isPending || disabled,
                children: "+ 파일 첨부하기"
            }, void 0, false, {
                fileName: "[project]/shared/components/FileInput.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                hidden: true,
                className: cx('input'),
                ref: inputRef,
                onChange: handleFileChange
            }, void 0, false, {
                fileName: "[project]/shared/components/FileInput.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/shared/components/FileInput.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FileInput, "aFuL2lMPy5aE9I1AP5yJIoI2lNY=");
_c = FileInput;
const __TURBOPACK__default__export__ = FileInput;
var _c;
__turbopack_context__.k.register(_c, "FileInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/data:924737 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fe137f78d884cf34fc24cf8e149998ccd3e190b96":"createTask"},"app/(main)/projects/(projects)/[projectId]/actions.ts",""] */ __turbopack_context__.s({
    "createTask": ()=>createTask
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createTask = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fe137f78d884cf34fc24cf8e149998ccd3e190b96", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createTask"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCAqIGFzIGFwaSBmcm9tICdAL3NoYXJlZC9hcGknO1xuaW1wb3J0IEFjdGlvblJlc3VsdCBmcm9tICdAL3R5cGVzL0FjdGlvblJlc3VsdCc7XG5pbXBvcnQgeyBQcm9qZWN0LCBUYXNrIH0gZnJvbSAnQC90eXBlcy9lbnRpdGllcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuXG5pbnRlcmZhY2UgQ3JlYXRlVGFza0lucHV0IHtcbiAgcHJvamVjdElkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHN0YXJ0WWVhcjogbnVtYmVyO1xuICBzdGFydE1vbnRoOiBudW1iZXI7XG4gIHN0YXJ0RGF5OiBudW1iZXI7XG4gIGVuZFllYXI6IG51bWJlcjtcbiAgZW5kTW9udGg6IG51bWJlcjtcbiAgZW5kRGF5OiBudW1iZXI7XG4gIHRhZ3M6IHN0cmluZ1tdO1xuICBhdHRhY2htZW50czogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gYXN5bmMgKFxuICBwYXlsb2FkOiBDcmVhdGVUYXNrSW5wdXRcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFRhc2s+PiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFzayA9IGF3YWl0IGFwaS5jcmVhdGVUYXNrKHBheWxvYWQpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvcHJvamVjdHMvJHtwYXlsb2FkLnByb2plY3RJZH0vdGFza3NgKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogJ+2VoCDsnbwg7IOd7ISxIOyEseqztScsXG4gICAgICBkYXRhOiB0YXNrLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yXG4gICAgICAgICAgPyBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgOiAn7ZWgIOydvCDsg53shLEg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuaW50ZXJmYWNlIFVwZGF0ZVByb2plY3RJbnB1dCB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvamVjdCA9IGFzeW5jIChcbiAgcHJvamVjdElkOiBudW1iZXIsXG4gIHBheWxvYWQ6IFVwZGF0ZVByb2plY3RJbnB1dFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UHJvamVjdD4+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgYXBpLnVwZGF0ZVByb2plY3QocHJvamVjdElkLCBwYXlsb2FkKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7cHJvamVjdElkfWApO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn7ZSE66Gc7KCd7Yq4IOyImOyglSDshLHqs7UnLFxuICAgICAgZGF0YTogcHJvamVjdCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+2UhOuhnOygne2KuCDsiJjsoJUg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSBhc3luYyAoXG4gIHByb2plY3RJZDogbnVtYmVyXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxudWxsPj4gPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaS5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn7ZSE66Gc7KCd7Yq4IOyCreygnCDshLHqs7UnLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+2UhOuhnOygne2KuCDsgq3soJwg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGludml0ZU1lbWJlciA9IGFzeW5jIChcbiAgcHJvamVjdElkOiBudW1iZXIsXG4gIGVtYWlsOiBzdHJpbmdcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpLmludml0ZU1lbWJlcihwcm9qZWN0SWQsIGVtYWlsKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7cHJvamVjdElkfS91c2Vyc2ApO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn66mk67KEIOy0iOuMgCDshLHqs7UnLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+uppOuyhCDstIjrjIAg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVRBcUJhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$CreateTaskModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$TagInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/TagInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$FileInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/FileInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$data$3a$924737__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/data:924737 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$CreateTaskModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const CreateTaskModal = (param)=>{
    let { projectId, isOpen, onSubmit, onClose } = param;
    _s();
    const now = new Date();
    const [attachments, setAttachments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [state, dispatch, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])({
        "CreateTaskModal.useActionState": async (prevState, formData)=>{
            const startDate = new Date(formData.get('startDate'));
            const endDate = new Date(formData.get('endDate'));
            if (startDate > endDate) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('시작일자가 종료일자보다 클 수 없습니다.');
                return prevState;
            }
            const [startYear, startMonth, startDay] = startDate.toISOString().split('T')[0].split('-').map(Number);
            const [endYear, endMonth, endDay] = endDate.toISOString().split('T')[0].split('-').map(Number);
            const values = {
                title: formData.get('title'),
                description: formData.get('description'),
                startYear,
                startMonth,
                startDay,
                endYear,
                endMonth,
                endDay
            };
            const { success, error } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$data$3a$924737__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createTask"])({
                ...values,
                projectId,
                tags,
                attachments
            });
            if (success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(success);
                onSubmit();
                return {
                    title: '',
                    description: '',
                    startYear: now.getUTCFullYear(),
                    startMonth: now.getUTCMonth(),
                    startDay: now.getUTCDate(),
                    endYear: now.getUTCFullYear(),
                    endMonth: now.getUTCMonth(),
                    endDay: now.getUTCDate()
                };
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error);
            }
            return values;
        }
    }["CreateTaskModal.useActionState"], {
        title: '',
        description: '',
        startYear: now.getUTCFullYear(),
        startMonth: now.getUTCMonth(),
        startDay: now.getUTCDate(),
        endYear: now.getUTCFullYear(),
        endMonth: now.getUTCMonth(),
        endDay: now.getUTCDate()
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: cx('modal'),
            isOpen: isOpen,
            onClose: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: cx('title'),
                    children: "할 일 등록"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: cx('form'),
                    action: dispatch,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cx('inputContainer'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: "제목"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: cx('input'),
                                    name: "title",
                                    defaultValue: state.title,
                                    placeholder: "최대 10자",
                                    maxLength: 10,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cx('inputContainer'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: "내용"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    className: cx('input'),
                                    name: "description",
                                    defaultValue: state.description,
                                    placeholder: "최대 40자",
                                    maxLength: 40
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cx('inputContainer'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: "태그"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$TagInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: tags,
                                    onChange: setTags,
                                    maxTags: 5
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cx('twoColumn'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: cx('inputContainer'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: "시작일자"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            required: true,
                                            className: cx('input'),
                                            name: "startDate",
                                            type: "date",
                                            defaultValue: new Date(state.startYear, state.startMonth, state.startDay).toISOString().split('T')[0]
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: cx('inputContainer'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: "종료일자"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            required: true,
                                            className: cx('input'),
                                            name: "endDate",
                                            type: "date",
                                            defaultValue: new Date(state.endYear, state.endMonth, state.endDay).toISOString().split('T')[0]
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cx('inputContainer'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: "파일 첨부"
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$FileInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    urls: attachments,
                                    onChange: setAttachments
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: cx('button'),
                            type: "submit",
                            disabled: isPending,
                            children: "등록하기"
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(CreateTaskModal, "naJtBARkEbvXZRz2cyF8KCs0mok=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = CreateTaskModal;
const __TURBOPACK__default__export__ = CreateTaskModal;
var _c;
__turbopack_context__.k.register(_c, "CreateTaskModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/data:da3c0b [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f7e52d53436097cae0fb3aa28f2fc85e4f74b4607":"inviteMember"},"app/(main)/projects/(projects)/[projectId]/actions.ts",""] */ __turbopack_context__.s({
    "inviteMember": ()=>inviteMember
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var inviteMember = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f7e52d53436097cae0fb3aa28f2fc85e4f74b4607", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "inviteMember"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCAqIGFzIGFwaSBmcm9tICdAL3NoYXJlZC9hcGknO1xuaW1wb3J0IEFjdGlvblJlc3VsdCBmcm9tICdAL3R5cGVzL0FjdGlvblJlc3VsdCc7XG5pbXBvcnQgeyBQcm9qZWN0LCBUYXNrIH0gZnJvbSAnQC90eXBlcy9lbnRpdGllcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuXG5pbnRlcmZhY2UgQ3JlYXRlVGFza0lucHV0IHtcbiAgcHJvamVjdElkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHN0YXJ0WWVhcjogbnVtYmVyO1xuICBzdGFydE1vbnRoOiBudW1iZXI7XG4gIHN0YXJ0RGF5OiBudW1iZXI7XG4gIGVuZFllYXI6IG51bWJlcjtcbiAgZW5kTW9udGg6IG51bWJlcjtcbiAgZW5kRGF5OiBudW1iZXI7XG4gIHRhZ3M6IHN0cmluZ1tdO1xuICBhdHRhY2htZW50czogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gYXN5bmMgKFxuICBwYXlsb2FkOiBDcmVhdGVUYXNrSW5wdXRcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFRhc2s+PiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFzayA9IGF3YWl0IGFwaS5jcmVhdGVUYXNrKHBheWxvYWQpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvcHJvamVjdHMvJHtwYXlsb2FkLnByb2plY3RJZH0vdGFza3NgKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogJ+2VoCDsnbwg7IOd7ISxIOyEseqztScsXG4gICAgICBkYXRhOiB0YXNrLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yXG4gICAgICAgICAgPyBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgOiAn7ZWgIOydvCDsg53shLEg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuaW50ZXJmYWNlIFVwZGF0ZVByb2plY3RJbnB1dCB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvamVjdCA9IGFzeW5jIChcbiAgcHJvamVjdElkOiBudW1iZXIsXG4gIHBheWxvYWQ6IFVwZGF0ZVByb2plY3RJbnB1dFxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8UHJvamVjdD4+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgYXBpLnVwZGF0ZVByb2plY3QocHJvamVjdElkLCBwYXlsb2FkKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7cHJvamVjdElkfWApO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn7ZSE66Gc7KCd7Yq4IOyImOyglSDshLHqs7UnLFxuICAgICAgZGF0YTogcHJvamVjdCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+2UhOuhnOygne2KuCDsiJjsoJUg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSBhc3luYyAoXG4gIHByb2plY3RJZDogbnVtYmVyXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxudWxsPj4gPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaS5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn7ZSE66Gc7KCd7Yq4IOyCreygnCDshLHqs7UnLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+2UhOuhnOygne2KuCDsgq3soJwg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGludml0ZU1lbWJlciA9IGFzeW5jIChcbiAgcHJvamVjdElkOiBudW1iZXIsXG4gIGVtYWlsOiBzdHJpbmdcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PG51bGw+PiA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpLmludml0ZU1lbWJlcihwcm9qZWN0SWQsIGVtYWlsKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7cHJvamVjdElkfS91c2Vyc2ApO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn66mk67KEIOy0iOuMgCDshLHqs7UnLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+uppOuyhCDstIjrjIAg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMlRBZ0dhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/MemberTabMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$ProjectTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$data$3a$da3c0b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/data:da3c0b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$ProjectTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const MemberTabMenu = (param)=>{
    let { projectId } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [state, dispatch, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])({
        "MemberTabMenu.useActionState": async (prevState, formData)=>{
            const values = {
                email: formData.get('email')
            };
            const { error, success } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$data$3a$da3c0b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["inviteMember"])(projectId, values.email);
            if (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error);
            }
            if (success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(success);
                setIsOpen(false);
            }
            return values;
        }
    }["MemberTabMenu.useActionState"], {
        email: ''
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "button",
                onClick: ()=>setIsOpen(true),
                children: "멤버 초대하기"
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MemberTabMenu.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: cx('modal'),
                isOpen: isOpen,
                onClose: ()=>setIsOpen(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: cx('modalTitle'),
                        children: "멤버 초대하기"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MemberTabMenu.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: cx('modalForm'),
                        action: dispatch,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cx('inputContainer'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        htmlFor: "email",
                                        children: "이메일"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MemberTabMenu.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: cx('modalInput'),
                                        id: "email",
                                        name: "email",
                                        defaultValue: state.email,
                                        placeholder: "example@email.com"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MemberTabMenu.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MemberTabMenu.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: cx('modalButton'),
                                type: "submit",
                                disabled: isPending,
                                children: "초대하기"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MemberTabMenu.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MemberTabMenu.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MemberTabMenu.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/MemberTabMenu.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MemberTabMenu, "uAL0w29uV0U1meJrK0iwnbPOG/c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = MemberTabMenu;
const __TURBOPACK__default__export__ = MemberTabMenu;
var _c;
__turbopack_context__.k.register(_c, "MemberTabMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$PopoverMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/PopoverMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$sort$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/sort.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$search$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/search.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$plus$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/plus.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$ProjectTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$CreateTaskModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/CreateTaskModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$MemberTabMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/MemberTabMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$ProjectTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const TaskTabMenu = (param)=>{
    let { projectId, members } = param;
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreateTaskOpen, setIsCreateTaskOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSearch = (formData)=>{
        const searchParams = new URLSearchParams(params);
        const keyword = formData.get("keyword");
        if (keyword) {
            searchParams.set("keyword", keyword);
        } else {
            searchParams.delete("keyword");
        }
        searchParams.delete("page");
        router.push("?".concat(searchParams.toString()));
    };
    const handleStatusChange = (value)=>{
        const searchParams = new URLSearchParams(params);
        if (value === "all") {
            searchParams.delete("status");
        } else {
            searchParams.set("status", value);
        }
        searchParams.delete("page");
        router.push("?".concat(searchParams.toString()));
    };
    const handleAssigneeChange = (value)=>{
        const searchParams = new URLSearchParams(params);
        if (value === "all") {
            searchParams.delete("assignee");
        } else {
            searchParams.set("assignee", value);
        }
        searchParams.delete("page");
        router.push("?".concat(searchParams.toString()));
    };
    const handleSortChange = (value)=>{
        const searchParams = new URLSearchParams(params);
        searchParams.set("order_by", value);
        searchParams.delete("page");
        router.push("?".concat(searchParams.toString()));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx("taskTabMenu"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$plus$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: cx("createTaskButton"),
                onClick: ()=>setIsCreateTaskOpen(true)
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$CreateTaskModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                projectId: projectId,
                isOpen: isCreateTaskOpen,
                onClose: ()=>setIsCreateTaskOpen(false),
                onSubmit: ()=>setIsCreateTaskOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: cx("searchForm"),
                action: handleSearch,
                children: isSearchOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    search: true,
                    autoFocus: true,
                    name: "keyword",
                    className: cx("searchInput"),
                    defaultValue: params.get("keyword") || "",
                    placeholder: "이름으로 검색하기",
                    onBlur: ()=>setIsSearchOpen(false)
                }, void 0, false, {
                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$search$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: cx("searchIcon"),
                    onClick: ()=>{
                        setIsSearchOpen(true);
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$PopoverMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$sort$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                    lineNumber: 106,
                    columnNumber: 15
                }, void 0),
                options: [
                    {
                        label: "생성순",
                        value: "created_at"
                    },
                    {
                        label: "이름순",
                        value: "title"
                    },
                    {
                        label: "기한임박순",
                        value: "end_date"
                    }
                ],
                value: params.get("order_by") || "",
                onChange: handleSortChange
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                options: [
                    {
                        label: "전체",
                        value: "all"
                    },
                    {
                        label: "진행 전",
                        value: "todo"
                    },
                    {
                        label: "진행 중",
                        value: "inProgress"
                    },
                    {
                        label: "완료",
                        value: "done"
                    }
                ],
                value: params.get("status") || "",
                onChange: handleStatusChange,
                placeholder: "상태"
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: cx("assigneeDropdown"),
                options: [
                    {
                        label: "전체",
                        value: "all"
                    },
                    ...members.map((member)=>({
                            label: member.name,
                            value: member.id.toString()
                        }))
                ],
                value: params.get("assignee") || "",
                onChange: handleAssigneeChange,
                placeholder: "담당자"
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TaskTabMenu, "7Ci3Jc4mrXMtqUenk0NAdYHhRpg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TaskTabMenu;
const ProjectTab = (param)=>{
    let { projectId, members } = param;
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const currentTab = (()=>{
        if (pathname === "/projects/".concat(projectId, "/tasks")) return "tasks";
        if (pathname === "/projects/".concat(projectId, "/members")) return "members";
        return "tasks";
    })();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx("container"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cx("tabs"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: cx("tab", {
                            active: currentTab === "tasks"
                        }),
                        href: "/projects/".concat(projectId, "/tasks"),
                        children: "할 일 목록"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: cx("tab", {
                            active: currentTab === "members"
                        }),
                        href: "/projects/".concat(projectId, "/members"),
                        children: "멤버 목록"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    currentTab === "tasks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskTabMenu, {
                        projectId: projectId,
                        members: members
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    currentTab === "members" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$MemberTabMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        projectId: projectId
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                        lineNumber: 186,
                        columnNumber: 38
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/ProjectTab.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ProjectTab, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = ProjectTab;
const __TURBOPACK__default__export__ = ProjectTab;
var _c, _c1;
__turbopack_context__.k.register(_c, "TaskTabMenu");
__turbopack_context__.k.register(_c1, "ProjectTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_d9329b9a._.js.map