module.exports = {

"[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f7e52d53436097cae0fb3aa28f2fc85e4f74b4607":"inviteMember","7f8d0715975d5aac16fd86623b218bd124952b7307":"deleteProject","7fe137f78d884cf34fc24cf8e149998ccd3e190b96":"createTask","7ff62f677e046d6acec660c410453a91606649e475":"updateProject"},"",""] */ __turbopack_context__.s({
    "createTask": ()=>createTask,
    "deleteProject": ()=>deleteProject,
    "inviteMember": ()=>inviteMember,
    "updateProject": ()=>updateProject
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const createTask = async (payload)=>{
    try {
        const task = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTask"](payload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/projects/${payload.projectId}/tasks`);
        return {
            success: '할 일 생성 성공',
            data: task,
            error: null
        };
    } catch (error) {
        return {
            success: null,
            error: error instanceof Error ? error.message : '할 일 생성 중 오류가 발생했습니다.',
            data: null
        };
    }
};
const updateProject = async (projectId, payload)=>{
    try {
        const project = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProject"](projectId, payload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/projects/${projectId}`);
        return {
            success: '프로젝트 수정 성공',
            data: project,
            error: null
        };
    } catch (error) {
        return {
            success: null,
            error: error instanceof Error ? error.message : '프로젝트 수정 중 오류가 발생했습니다.',
            data: null
        };
    }
};
const deleteProject = async (projectId)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProject"](projectId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/projects');
        return {
            success: '프로젝트 삭제 성공',
            data: null,
            error: null
        };
    } catch (error) {
        return {
            success: null,
            error: error instanceof Error ? error.message : '프로젝트 삭제 중 오류가 발생했습니다.',
            data: null
        };
    }
};
const inviteMember = async (projectId, email)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inviteMember"](projectId, email);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/projects/${projectId}/users`);
        return {
            success: '멤버 초대 성공',
            data: null,
            error: null
        };
    } catch (error) {
        return {
            success: null,
            error: error instanceof Error ? error.message : '멤버 초대 중 오류가 발생했습니다.',
            data: null
        };
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createTask,
    updateProject,
    deleteProject,
    inviteMember
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTask, "7fe137f78d884cf34fc24cf8e149998ccd3e190b96", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProject, "7ff62f677e046d6acec660c410453a91606649e475", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProject, "7f8d0715975d5aac16fd86623b218bd124952b7307", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(inviteMember, "7f7e52d53436097cae0fb3aa28f2fc85e4f74b4607", null);
}),
"[project]/app/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7ff85bb605436f99b05fb9b6fc52deda940e6af5d3":"uploadFiles"},"",""] */ __turbopack_context__.s({
    "uploadFiles": ()=>uploadFiles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const uploadFiles = async (files)=>{
    try {
        const urls = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadFiles"](files);
        return {
            error: null,
            success: '파일 업로드 성공',
            data: urls
        };
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : '오류가 발생했습니다.',
            success: null,
            data: null
        };
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    uploadFiles
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadFiles, "7ff85bb605436f99b05fb9b6fc52deda940e6af5d3", null);
}),
"[project]/.next-internal/server/app/(main)/projects/(projects)/[projectId]/members/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(main)/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
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
;
}),
"[project]/.next-internal/server/app/(main)/projects/(projects)/[projectId]/members/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(main)/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/projects/(projects)/[projectId]/members/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(main)/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}),
"[project]/.next-internal/server/app/(main)/projects/(projects)/[projectId]/members/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(main)/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "7f1383ba3f8867de1d3e5a8478494d9018990405e8": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMe"],
    "7f283fd985f600d8c0b1538d4f3d34574a430e1af5": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyProjectsWithCounts"],
    "7f2b99e5349210812ff299d73ed9d041d19f5f87d1": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyTasks"],
    "7f7e52d53436097cae0fb3aa28f2fc85e4f74b4607": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inviteMember"],
    "7f8d0715975d5aac16fd86623b218bd124952b7307": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProject"],
    "7fd8908f22e5dbd77c002cedbda4fffe9048c7cc5b": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTasksByProjectId"],
    "7fe137f78d884cf34fc24cf8e149998ccd3e190b96": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTask"],
    "7fe50feffeb04ce4cdeab6892990644507d68c57be": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectUsers"],
    "7ff62f677e046d6acec660c410453a91606649e475": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProject"],
    "7ff85bb605436f99b05fb9b6fc52deda940e6af5d3": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadFiles"],
    "7ff9374050f407cae9815e7650269cd7e70cb0671e": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeInvitation"],
    "7ffc7ec5f86f998362f3131fd9717ebc313226c40c": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeMember"],
    "7ffcd81d4a235aeb205ec1e0a6f48c62c86873f7c2": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "7ffd24cefbe0286cf279a20daa7ae0b7edc9e26c31": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectUsers"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/projects/(projects)/[projectId]/members/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(main)/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}),
"[project]/.next-internal/server/app/(main)/projects/(projects)/[projectId]/members/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(main)/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "7f1383ba3f8867de1d3e5a8478494d9018990405e8": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f1383ba3f8867de1d3e5a8478494d9018990405e8"],
    "7f283fd985f600d8c0b1538d4f3d34574a430e1af5": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f283fd985f600d8c0b1538d4f3d34574a430e1af5"],
    "7f2b99e5349210812ff299d73ed9d041d19f5f87d1": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f2b99e5349210812ff299d73ed9d041d19f5f87d1"],
    "7f7e52d53436097cae0fb3aa28f2fc85e4f74b4607": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f7e52d53436097cae0fb3aa28f2fc85e4f74b4607"],
    "7f8d0715975d5aac16fd86623b218bd124952b7307": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f8d0715975d5aac16fd86623b218bd124952b7307"],
    "7fd8908f22e5dbd77c002cedbda4fffe9048c7cc5b": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fd8908f22e5dbd77c002cedbda4fffe9048c7cc5b"],
    "7fe137f78d884cf34fc24cf8e149998ccd3e190b96": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fe137f78d884cf34fc24cf8e149998ccd3e190b96"],
    "7fe50feffeb04ce4cdeab6892990644507d68c57be": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fe50feffeb04ce4cdeab6892990644507d68c57be"],
    "7ff62f677e046d6acec660c410453a91606649e475": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ff62f677e046d6acec660c410453a91606649e475"],
    "7ff85bb605436f99b05fb9b6fc52deda940e6af5d3": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ff85bb605436f99b05fb9b6fc52deda940e6af5d3"],
    "7ff9374050f407cae9815e7650269cd7e70cb0671e": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ff9374050f407cae9815e7650269cd7e70cb0671e"],
    "7ffc7ec5f86f998362f3131fd9717ebc313226c40c": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ffc7ec5f86f998362f3131fd9717ebc313226c40c"],
    "7ffcd81d4a235aeb205ec1e0a6f48c62c86873f7c2": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ffcd81d4a235aeb205ec1e0a6f48c62c86873f7c2"],
    "7ffd24cefbe0286cf279a20daa7ae0b7edc9e26c31": ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ffd24cefbe0286cf279a20daa7ae0b7edc9e26c31"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/projects/(projects)/[projectId]/members/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(main)/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/projects/(projects)/[projectId]/members/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(main)/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/(main)/projects/(projects)/[projectId]/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/(main)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(main)/projects/(projects)/[projectId]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/FlexTable.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "align-center": "FlexTable-module__QJa8ca__align-center",
  "align-left": "FlexTable-module__QJa8ca__align-left",
  "align-right": "FlexTable-module__QJa8ca__align-right",
  "cell": "FlexTable-module__QJa8ca__cell",
  "header": "FlexTable-module__QJa8ca__header",
  "row": "FlexTable-module__QJa8ca__row",
  "table": "FlexTable-module__QJa8ca__table",
});
}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/FlexTable.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "FlexTable": ()=>FlexTable,
    "FlexTableCell": ()=>FlexTableCell,
    "FlexTableHeader": ()=>FlexTableHeader,
    "FlexTableRow": ()=>FlexTableRow
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/FlexTable.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-rsc] (ecmascript)");
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]);
const FlexTableHeader = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx('header'),
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/FlexTable.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const FlexTableRow = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx('row'),
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/FlexTable.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const FlexTableCell = ({ grow, base, children, align = 'left' })=>{
    const childrenText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTextFromChildren"])(children);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx('cell', `align-${align}`),
        style: {
            flexGrow: grow,
            flexBasis: base || 'auto',
            flexShrink: grow > 0 ? 1 : 0
        },
        title: childrenText,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/FlexTable.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const FlexTable = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx('table'),
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/components/FlexTable.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
;
}),
"[project]/app/(main)/projects/(projects)/[projectId]/members/page.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "invitationContainer": "page-module__yDl3eG__invitationContainer",
  "paginatorContainer": "page-module__yDl3eG__paginatorContainer",
});
}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/Paginator.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/projects/(projects)/[projectId]/components/Paginator.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/projects/(projects)/[projectId]/components/Paginator.tsx <module evaluation>", "default");
}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/Paginator.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/projects/(projects)/[projectId]/components/Paginator.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/projects/(projects)/[projectId]/components/Paginator.tsx", "default");
}),
"[project]/app/(main)/projects/(projects)/[projectId]/components/Paginator.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$Paginator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/Paginator.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$Paginator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/Paginator.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$Paginator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveMember.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveMember.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveMember.tsx <module evaluation>", "default");
}),
"[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveMember.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveMember.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveMember.tsx", "default");
}),
"[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveMember.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$components$2f$RemoveMember$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveMember.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$components$2f$RemoveMember$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveMember.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$components$2f$RemoveMember$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/types/UserProjectStatus.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var UserProjectStatus = /*#__PURE__*/ function(UserProjectStatus) {
    UserProjectStatus["pending"] = "pending";
    UserProjectStatus["accepted"] = "accepted";
    UserProjectStatus["rejected"] = "rejected";
    return UserProjectStatus;
}(UserProjectStatus || {});
const __TURBOPACK__default__export__ = UserProjectStatus;
}),
"[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveInvitation.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveInvitation.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveInvitation.tsx <module evaluation>", "default");
}),
"[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveInvitation.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveInvitation.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveInvitation.tsx", "default");
}),
"[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveInvitation.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$components$2f$RemoveInvitation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveInvitation.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$components$2f$RemoveInvitation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveInvitation.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$components$2f$RemoveInvitation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/FlexTable.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/page.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/actions.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$Paginator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/components/Paginator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$components$2f$RemoveMember$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveMember.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$UserProjectStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/UserProjectStatus.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$components$2f$RemoveInvitation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/components/RemoveInvitation.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]);
const PAGE_SIZE = 10;
const MembersPage = async ({ params, searchParams })=>{
    const { projectId: projectIdString } = await params;
    const { page } = await searchParams;
    const projectId = Number(projectIdString);
    const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectUsers"])(projectId, {
        page: page ?? 1,
        limit: PAGE_SIZE
    });
    const usersWithCounts = data?.data ?? [];
    const total = data?.total ?? 0;
    const pages = Math.ceil(total / PAGE_SIZE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlexTable"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlexTableHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlexTableCell"], {
                                grow: 1,
                                base: "80px",
                                children: "이름"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlexTableCell"], {
                                grow: 1,
                                base: "100px",
                                children: "이메일"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlexTableCell"], {
                                grow: 0,
                                base: "100px",
                                children: "작업 수"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlexTableCell"], {
                                grow: 0,
                                base: "140px"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    usersWithCounts.map((userWithCounts)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlexTableRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlexTableCell"], {
                                    grow: 1,
                                    base: "80px",
                                    children: userWithCounts.name
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlexTableCell"], {
                                    grow: 1,
                                    base: "100px",
                                    children: userWithCounts.email
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlexTableCell"], {
                                    grow: 0,
                                    base: "100px",
                                    children: userWithCounts.taskCount
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$FlexTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlexTableCell"], {
                                    grow: 0,
                                    align: "right",
                                    base: "140px",
                                    children: userWithCounts.status === __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$UserProjectStatus$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].accepted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$components$2f$RemoveMember$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        projectId: projectId,
                                        userId: userWithCounts.id
                                    }, void 0, false, {
                                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: cx('invitationContainer'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "초대 중"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$members$2f$components$2f$RemoveInvitation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                projectId: projectId,
                                                invitationId: userWithCounts.invitationId
                                            }, void 0, false, {
                                                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, userWithCounts.email, true, {
                            fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cx('paginatorContainer'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$projects$2f28$projects$292f5b$projectId$5d2f$components$2f$Paginator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    total: pages
                }, void 0, false, {
                    fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = MembersPage;
}),
"[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/projects/(projects)/[projectId]/members/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__36b3b87a._.js.map