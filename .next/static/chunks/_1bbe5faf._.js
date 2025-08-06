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
"[project]/app/(main)/projects/(projects)/components/SortButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$PopoverMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/PopoverMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$sort$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/sort.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SortButton = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const handleSortChange = (value)=>{
        const searchParams = new URLSearchParams(params);
        searchParams.set('sort', value);
        router.push("?".concat(searchParams.toString()));
    };
    var _params_get;
    const value = (_params_get = params.get('sort')) !== null && _params_get !== void 0 ? _params_get : 'latest';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$PopoverMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$sort$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/(main)/projects/(projects)/components/SortButton.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, void 0),
        options: [
            {
                label: '최신순',
                value: 'latest'
            },
            {
                label: '이름순',
                value: 'name'
            }
        ],
        value: value,
        onChange: handleSortChange
    }, void 0, false, {
        fileName: "[project]/app/(main)/projects/(projects)/components/SortButton.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SortButton, "b3R/Kl8NZr2hIt7q26EJDkrVSsQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = SortButton;
const __TURBOPACK__default__export__ = SortButton;
var _c;
__turbopack_context__.k.register(_c, "SortButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/app/(main)/projects/(projects)/data:175433 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f5a3e7d46212537c56ec169bf300ff871c96ea893":"createProject"},"app/(main)/projects/(projects)/actions.tsx",""] */ __turbopack_context__.s({
    "createProject": ()=>createProject
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createProject = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f5a3e7d46212537c56ec169bf300ff871c96ea893", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createProject"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnQC9zaGFyZWQvYXBpJztcbmltcG9ydCBBY3Rpb25SZXN1bHQgZnJvbSAnQC90eXBlcy9BY3Rpb25SZXN1bHQnO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFdpdGhDb3VudHMgfSBmcm9tICdAL3R5cGVzL2VudGl0aWVzJztcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlUHJvamVjdElucHV0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0TXlQcm9qZWN0c1dpdGhDb3VudHMgPSBhc3luYyAoe1xuICBzb3J0ID0gJ2xhdGVzdCcsXG59OiB7XG4gIHNvcnQ/OiAnbGF0ZXN0JyB8ICduYW1lJztcbn0pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxQcm9qZWN0V2l0aENvdW50c1tdIHwgbnVsbD4+ID0+IHtcbiAgbGV0IHByb2plY3RzV2l0aENvdW50czogUHJvamVjdFdpdGhDb3VudHNbXSA9IFtdO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXRNeVByb2plY3RzV2l0aENvdW50cyh7XG4gICAgICBvcmRlckJ5OiBzb3J0ID09PSAnbGF0ZXN0JyA/ICdjcmVhdGVkX2F0JyA6ICduYW1lJyxcbiAgICAgIG9yZGVyOiBzb3J0ID09PSAnbGF0ZXN0JyA/ICdkZXNjJyA6ICdhc2MnLFxuICAgIH0pO1xuICAgIHByb2plY3RzV2l0aENvdW50cyA9IHJlc3VsdC5kYXRhO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6ICftlITroZzsoJ3tirgg7KGw7ZqMIOykkSDsmKTrpZjqsIAg67Cc7IOd7ZaI7Iq164uI64ukLicsXG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgc3VjY2VzczogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiAn7ZSE66Gc7KCd7Yq4IOyhsO2ajCDspJEg7Jik66WY6rCAIOuwnOyDne2WiOyKteuLiOuLpC4nLFxuICAgIGRhdGE6IHByb2plY3RzV2l0aENvdW50cyxcbiAgICBlcnJvcjogbnVsbCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0ID0gYXN5bmMgKFxuICBwYXlsb2FkOiBDcmVhdGVQcm9qZWN0SW5wdXRcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFByb2plY3QgfCBudWxsPj4gPT4ge1xuICBsZXQgcHJvamVjdDogUHJvamVjdCB8IG51bGwgPSBudWxsO1xuICB0cnkge1xuICAgIHByb2plY3QgPSBhd2FpdCBhcGkuY3JlYXRlUHJvamVjdChwYXlsb2FkKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL3VzZXJzL21lL3Byb2plY3RzJyk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogJ+2UhOuhnOygne2KuCDsg53shLEg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBzdWNjZXNzOiBudWxsLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN1Y2Nlc3M6ICftlITroZzsoJ3tirjqsIAg7IOd7ISx65CY7JeI7Iq164uI64ukLicsXG4gICAgZGF0YTogcHJvamVjdCxcbiAgICBlcnJvcjogbnVsbCxcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlUQXVDYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(main)/projects/(projects)/components/CreateProject.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "CreateProject-module__ylXBga__button",
  "createProjectButton": "CreateProject-module__ylXBga__createProjectButton",
  "form": "CreateProject-module__ylXBga__form",
  "input": "CreateProject-module__ylXBga__input",
  "inputContainer": "CreateProject-module__ylXBga__inputContainer",
  "modal": "CreateProject-module__ylXBga__modal",
  "title": "CreateProject-module__ylXBga__title",
});
}),
"[project]/app/(main)/projects/(projects)/components/CreateProject.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$data$3a$175433__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/data:175433 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$CreateProject$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/components/CreateProject.module.css [app-client] (css module)");
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
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$CreateProject$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]);
const CreateProject = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [state, dispatch, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])({
        "CreateProject.useActionState": async (_, formData)=>{
            const values = {
                name: formData.get('name'),
                description: formData.get('description')
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$data$3a$175433__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProject"])(values);
            if (result.error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.error);
            } else {
                var _result_data;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(result.success);
                router.push("/projects/".concat((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.id));
            }
            return values;
        }
    }["CreateProject.useActionState"], {
        name: '',
        description: ''
    });
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleButtonClick = ()=>{
        setIsOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: cx('createProjectButton'),
                onClick: handleButtonClick,
                children: "+ 새 프로젝트"
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: cx('modal'),
                isOpen: isOpen,
                onClose: ()=>setIsOpen(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: cx('title'),
                        children: "프로젝트 만들기"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx",
                        lineNumber: 53,
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
                                        fileName: "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: cx('input'),
                                        name: "name",
                                        defaultValue: state.name,
                                        placeholder: "최대 10자",
                                        maxLength: 10
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cx('inputContainer'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: "프로젝트 설명"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: cx('input'),
                                        name: "description",
                                        defaultValue: state.description,
                                        placeholder: "최대 40자",
                                        maxLength: 40
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: cx('button'),
                                type: "submit",
                                disabled: isPending,
                                children: "만들기"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CreateProject, "MYyelgcraL+WxvIjNYHca4/0EjM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = CreateProject;
const __TURBOPACK__default__export__ = CreateProject;
var _c;
__turbopack_context__.k.register(_c, "CreateProject");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_1bbe5faf._.js.map