module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/shared/components/NavLink.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const NavLink = ({ href, children, className, activeClassName, activeCondition })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const isActive = (()=>{
        let result = true;
        if (activeCondition.pathname) {
            result &&= pathname.startsWith(activeCondition.pathname);
        }
        if (activeCondition.searchParams) {
            result &&= Object.keys(activeCondition.searchParams).every((key)=>{
                return searchParams.get(key) === activeCondition.searchParams?.[key];
            });
        }
        if (activeCondition.params) {
            result &&= Object.keys(activeCondition.params).every((key)=>{
                return params[key] === activeCondition.params?.[key];
            });
        }
        return result;
    })();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, {
            [activeClassName]: isActive
        }),
        href: href,
        children: children
    }, void 0, false, {
        fileName: "[project]/shared/components/NavLink.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavLink;
}),
"[project]/public/assets/blank-profile.svg.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _g, _defs;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var SvgBlankProfile = function SvgBlankProfile(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 120 120"
    }, props), _g || (_g = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("g", {
        clipPath: "url(#blank-profile_svg__a)"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: "#EDEDF0",
        d: "M0 0h120v120H0z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("circle", {
        cx: 60,
        cy: 38,
        r: 23,
        fill: "#D5D6DD"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("circle", {
        cx: 60,
        cy: 132,
        r: 60,
        fill: "#D5D6DD"
    }))), _defs || (_defs = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("defs", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("clipPath", {
        id: "blank-profile_svg__a"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: "#fff",
        d: "M0 0h120v120H0z"
    })))));
};
const __TURBOPACK__default__export__ = SvgBlankProfile;
}),
"[project]/app/(main)/components/Profile.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Profile-module__4aIwyW__active",
  "menu": "Profile-module__4aIwyW__menu",
  "menuItem": "Profile-module__4aIwyW__menuItem",
  "profile": "Profile-module__4aIwyW__profile",
  "profileImage": "Profile-module__4aIwyW__profileImage",
  "profileName": "Profile-module__4aIwyW__profileName",
});
}),
"[project]/app/(main)/data:5ffcf4 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7ffcd81d4a235aeb205ec1e0a6f48c62c86873f7c2":"logout"},"app/(main)/action.ts",""] */ __turbopack_context__.s({
    "logout": ()=>logout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var logout = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7ffcd81d4a235aeb205ec1e0a6f48c62c86873f7c2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "logout"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcblxuaW1wb3J0ICogYXMgYXBpIGZyb20gJ0Avc2hhcmVkL2FwaSc7XG5pbXBvcnQgQWN0aW9uUmVzdWx0IGZyb20gJ0AvdHlwZXMvQWN0aW9uUmVzdWx0JztcbmltcG9ydCB7XG4gIFByb2plY3RXaXRoQ291bnRzLFxuICBUYXNrLFxuICBVc2VyLFxuICBVc2VyV2l0aENvdW50cyxcbn0gZnJvbSAnQC90eXBlcy9lbnRpdGllcyc7XG5pbXBvcnQgeyBGaW5kTXlUYXNrc1F1ZXJ5LCBQYWdpbmF0aW9uUmVzcG9uc2UgfSBmcm9tICdAL3R5cGVzL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgZGVsZXRlQXV0aENvb2tpZXMgfSBmcm9tICdAL3NoYXJlZC9hdXRoJztcblxuZXhwb3J0IGNvbnN0IGdldE1lID0gYXN5bmMgKCk6IFByb21pc2U8QWN0aW9uUmVzdWx0PFVzZXI+PiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGFwaS5nZXRNZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiAn7ZqM7JuQIOygleuztCDsobDtmowg7ISx6rO1JyxcbiAgICAgIGRhdGE6IHVzZXIsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBudWxsLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICA/IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICA6ICftmozsm5Ag7KCV67O0IOyhsO2ajCDspJEg7Jik66WY6rCAIOuwnOyDne2WiOyKteuLiOuLpC4nLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TXlQcm9qZWN0c1dpdGhDb3VudHMgPSBhc3luYyAoKTogUHJvbWlzZTxcbiAgQWN0aW9uUmVzdWx0PFByb2plY3RXaXRoQ291bnRzW10+XG4+ID0+IHtcbiAgbGV0IHByb2plY3RzOiBQcm9qZWN0V2l0aENvdW50c1tdO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXRNeVByb2plY3RzV2l0aENvdW50cyh7XG4gICAgICBvcmRlckJ5OiAnY3JlYXRlZF9hdCcsXG4gICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgIH0pO1xuICAgIHByb2plY3RzID0gcmVzdWx0LmRhdGE7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBudWxsLFxuICAgICAgZXJyb3I6ICftlITroZzsoJ3tirgg7KGw7ZqMIOykkSDsmKTrpZjqsIAg67Cc7IOd7ZaI7Iq164uI64ukLicsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdWNjZXNzOiAn7ZSE66Gc7KCd7Yq4IOyhsO2ajCDshLHqs7UnLFxuICAgIGRhdGE6IHByb2plY3RzLFxuICAgIGVycm9yOiBudWxsLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRhc2tzQnlQcm9qZWN0SWQgPSBhc3luYyAoXG4gIHByb2plY3RJZDogbnVtYmVyLFxuICBxdWVyeTogYXBpLkdldFRhc2tzQnlQcm9qZWN0SWRQYXJhbXNcbik6IFByb21pc2U8QWN0aW9uUmVzdWx0PFBhZ2luYXRpb25SZXNwb25zZTxUYXNrPj4+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0VGFza3NCeVByb2plY3RJZChwcm9qZWN0SWQsIHF1ZXJ5KTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogJ+2UhOuhnOygne2KuCDtlaAg7J28IOyhsO2ajCDshLHqs7UnLFxuICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgIGVycm9yOlxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yXG4gICAgICAgICAgPyBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgOiAn7ZSE66Gc7KCd7Yq4IO2VoCDsnbwg7KGw7ZqMIOykkSDsmKTrpZjqsIAg67Cc7IOd7ZaI7Iq164uI64ukLicsXG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNeVRhc2tzID0gYXN5bmMgKFxuICBxdWVyeTogRmluZE15VGFza3NRdWVyeVxuKTogUHJvbWlzZTxBY3Rpb25SZXN1bHQ8VGFza1tdPj4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXRNeVRhc2tzKHF1ZXJ5KTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogJ+2VoCDsnbwg7KGw7ZqMIOyEseqztScsXG4gICAgICBkYXRhOiByZXN1bHQsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBudWxsLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICA/IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICA6ICftlaAg7J28IOyhsO2ajCDspJEg7Jik66WY6rCAIOuwnOyDne2WiOyKteuLiOuLpC4nLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvamVjdFVzZXJzID0gYXN5bmMgKFxuICBwcm9qZWN0SWQ6IG51bWJlcixcbiAgcGFyYW1zOiBhcGkuR2V0UHJvamVjdFVzZXJzUGFyYW1zXG4pOiBQcm9taXNlPEFjdGlvblJlc3VsdDxQYWdpbmF0aW9uUmVzcG9uc2U8VXNlcldpdGhDb3VudHM+Pj4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0UHJvamVjdFVzZXJzKHByb2plY3RJZCwgcGFyYW1zKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogJ+2UhOuhnOygne2KuCDsgqzsmqnsnpAg7KGw7ZqMIOyEseqztScsXG4gICAgICBkYXRhLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBlcnJvcjpcbiAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgID8gZXJyb3IubWVzc2FnZVxuICAgICAgICAgIDogJ+2UhOuhnOygne2KuCDsgqzsmqnsnpAg7KGw7ZqMIOykkSDsmKTrpZjqsIAg67Cc7IOd7ZaI7Iq164uI64ukLicsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpOiBQcm9taXNlPEFjdGlvblJlc3VsdDx2b2lkPj4gPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGRlbGV0ZUF1dGhDb29raWVzKCk7XG4gICAgcmVkaXJlY3QoJy9sb2dpbicpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBudWxsLFxuICAgICAgZXJyb3I6XG4gICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICA/IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICA6ICfroZzqt7jslYTsm4Mg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6QuJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgfTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1JBOEhhIn0=
}),
"[project]/app/(main)/components/Profile.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$blank$2d$profile$2e$svg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/blank-profile.svg.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(main)/components/Profile.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tiny$2d$popover$2f$dist$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-tiny-popover/dist/Popover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$data$3a$5ffcf4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/(main)/data:5ffcf4 [app-ssr] (ecmascript) <text/javascript>");
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
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]);
const Profile = ({ className, user })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tiny$2d$popover$2f$dist$2f$Popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
        isOpen: isOpen,
        positions: [
            'top',
            'left',
            'bottom',
            'right'
        ],
        padding: 8,
        align: "start",
        onClickOutside: ()=>setIsOpen(false),
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menu),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/settings",
                    className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuItem),
                    onClick: ()=>setIsOpen(false),
                    children: "설정"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/Profile.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuItem),
                    onClick: ()=>{
                        setIsOpen(false);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$data$3a$5ffcf4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["logout"])();
                    },
                    children: "로그아웃"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/Profile.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/components/Profile.tsx",
            lineNumber: 26,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profile, className),
            onClick: ()=>setIsOpen(true),
            children: [
                user.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileImage),
                    src: user.profileImage,
                    alt: "profile",
                    width: 32,
                    height: 32
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/Profile.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$blank$2d$profile$2e$svg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileImage)
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/Profile.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$components$2f$Profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileName),
                    children: user.name
                }, void 0, false, {
                    fileName: "[project]/app/(main)/components/Profile.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/components/Profile.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/(main)/components/Profile.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Profile;
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__be01de20._.js.map