module.exports = {

"[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f5a3e7d46212537c56ec169bf300ff871c96ea893":"createProject","7f95e53f2e124b6e58b88e439030005573fe9a4a6b":"getMyProjectsWithCounts"},"",""] */ __turbopack_context__.s({
    "createProject": ()=>createProject,
    "getMyProjectsWithCounts": ()=>getMyProjectsWithCounts
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const getMyProjectsWithCounts = async ({ sort = 'latest' })=>{
    let projectsWithCounts = [];
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyProjectsWithCounts"]({
            orderBy: sort === 'latest' ? 'created_at' : 'name',
            order: sort === 'latest' ? 'desc' : 'asc'
        });
        projectsWithCounts = result.data;
    } catch  {
        return {
            error: '프로젝트 조회 중 오류가 발생했습니다.',
            data: null,
            success: null
        };
    }
    return {
        success: '프로젝트 조회 중 오류가 발생했습니다.',
        data: projectsWithCounts,
        error: null
    };
};
const createProject = async (payload)=>{
    let project = null;
    try {
        project = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProject"](payload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/users/me/projects');
    } catch  {
        return {
            error: '프로젝트 생성 중 오류가 발생했습니다.',
            data: null,
            success: null
        };
    }
    return {
        success: '프로젝트가 생성되었습니다.',
        data: project,
        error: null
    };
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getMyProjectsWithCounts,
    createProject
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMyProjectsWithCounts, "7f95e53f2e124b6e58b88e439030005573fe9a4a6b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProject, "7f5a3e7d46212537c56ec169bf300ff871c96ea893", null);
}),
"[project]/.next-internal/server/app/(main)/projects/(projects)/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(main)/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/(main)/projects/(projects)/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(main)/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/projects/(projects)/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(main)/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}),
"[project]/.next-internal/server/app/(main)/projects/(projects)/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(main)/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "7f1383ba3f8867de1d3e5a8478494d9018990405e8": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMe"],
    "7f283fd985f600d8c0b1538d4f3d34574a430e1af5": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyProjectsWithCounts"],
    "7f2b99e5349210812ff299d73ed9d041d19f5f87d1": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyTasks"],
    "7f5a3e7d46212537c56ec169bf300ff871c96ea893": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProject"],
    "7f95e53f2e124b6e58b88e439030005573fe9a4a6b": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyProjectsWithCounts"],
    "7fd8908f22e5dbd77c002cedbda4fffe9048c7cc5b": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTasksByProjectId"],
    "7ffcd81d4a235aeb205ec1e0a6f48c62c86873f7c2": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "7ffd24cefbe0286cf279a20daa7ae0b7edc9e26c31": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectUsers"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/projects/(projects)/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(main)/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}),
"[project]/.next-internal/server/app/(main)/projects/(projects)/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(main)/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "7f1383ba3f8867de1d3e5a8478494d9018990405e8": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f1383ba3f8867de1d3e5a8478494d9018990405e8"],
    "7f283fd985f600d8c0b1538d4f3d34574a430e1af5": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f283fd985f600d8c0b1538d4f3d34574a430e1af5"],
    "7f2b99e5349210812ff299d73ed9d041d19f5f87d1": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f2b99e5349210812ff299d73ed9d041d19f5f87d1"],
    "7f5a3e7d46212537c56ec169bf300ff871c96ea893": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f5a3e7d46212537c56ec169bf300ff871c96ea893"],
    "7f95e53f2e124b6e58b88e439030005573fe9a4a6b": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f95e53f2e124b6e58b88e439030005573fe9a4a6b"],
    "7fd8908f22e5dbd77c002cedbda4fffe9048c7cc5b": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fd8908f22e5dbd77c002cedbda4fffe9048c7cc5b"],
    "7ffcd81d4a235aeb205ec1e0a6f48c62c86873f7c2": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ffcd81d4a235aeb205ec1e0a6f48c62c86873f7c2"],
    "7ffd24cefbe0286cf279a20daa7ae0b7edc9e26c31": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ffd24cefbe0286cf279a20daa7ae0b7edc9e26c31"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/projects/(projects)/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(main)/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/projects/(projects)/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(main)/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/(main)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(main)/projects/(projects)/page.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "page-module__y3nDJG__container",
  "done": "page-module__y3nDJG__done",
  "header": "page-module__y3nDJG__header",
  "inProgress": "page-module__y3nDJG__inProgress",
  "projectCount": "page-module__y3nDJG__projectCount",
  "projectCountLabel": "page-module__y3nDJG__projectCountLabel",
  "projectCountMetric": "page-module__y3nDJG__projectCountMetric",
  "projectCounts": "page-module__y3nDJG__projectCounts",
  "projectHeader": "page-module__y3nDJG__projectHeader",
  "projectIcon": "page-module__y3nDJG__projectIcon",
  "projectList": "page-module__y3nDJG__projectList",
  "projectListItem": "page-module__y3nDJG__projectListItem",
  "projectMemberCount": "page-module__y3nDJG__projectMemberCount",
  "projectName": "page-module__y3nDJG__projectName",
  "title": "page-module__y3nDJG__title",
  "todo": "page-module__y3nDJG__todo",
});
}),
"[project]/app/(main)/projects/(projects)/components/SortButton.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/projects/(projects)/components/SortButton.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/projects/(projects)/components/SortButton.tsx <module evaluation>", "default");
}),
"[project]/app/(main)/projects/(projects)/components/SortButton.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/projects/(projects)/components/SortButton.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/projects/(projects)/components/SortButton.tsx", "default");
}),
"[project]/app/(main)/projects/(projects)/components/SortButton.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$SortButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/components/SortButton.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$SortButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/components/SortButton.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$SortButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/(main)/projects/(projects)/components/CreateProject.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/projects/(projects)/components/CreateProject.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx <module evaluation>", "default");
}),
"[project]/app/(main)/projects/(projects)/components/CreateProject.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/projects/(projects)/components/CreateProject.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/projects/(projects)/components/CreateProject.tsx", "default");
}),
"[project]/app/(main)/projects/(projects)/components/CreateProject.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$CreateProject$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/components/CreateProject.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$CreateProject$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/components/CreateProject.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$CreateProject$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/(main)/projects/(projects)/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$ProjectIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/ProjectIcon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/page.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$SortButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/components/SortButton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$CreateProject$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/components/CreateProject.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/actions.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]);
const ProjectListItem = ({ project })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectListItem),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectHeader),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$ProjectIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectIcon),
                        projectId: project.id,
                        name: project.name
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/projects/${project.id}`,
                                className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectName),
                                children: project.name
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectMemberCount),
                                children: [
                                    project.memberCount,
                                    " 명"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectCounts),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectCount, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].todo),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectCountLabel),
                                children: "진행 전"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectCountMetric),
                                children: project.todoCount
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectCount, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].inProgress),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectCountLabel),
                                children: "진행 중"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectCountMetric),
                                children: project.inProgressCount
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectCount, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].done),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectCountLabel),
                                children: "완료"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectCountMetric),
                                children: project.doneCount
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ProjectList = ({ projects = [] })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].projectList),
        children: [
            projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectListItem, {
                    project: project
                }, project.id, false, {
                    fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$CreateProject$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const MyProjectListPage = async ({ searchParams })=>{
    const { sort } = await searchParams;
    const { data: projectsWithCounts } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyProjectsWithCounts"])({
        sort
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].container),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].header),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: cx(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title),
                        children: "프로젝트 목록"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f$components$2f$SortButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectList, {
                projects: projectsWithCounts ?? []
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(main)/projects/(projects)/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MyProjectListPage;
}),
"[project]/app/(main)/projects/(projects)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/projects/(projects)/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__84b381a8._.js.map