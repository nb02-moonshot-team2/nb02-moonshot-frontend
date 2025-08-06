module.exports = {

"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/shared/auth.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "deleteAuthCookies": ()=>deleteAuthCookies,
    "getAccessToken": ()=>getAccessToken,
    "refreshTokens": ()=>refreshTokens,
    "setAuthCookies": ()=>setAuthCookies
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/api.ts [app-rsc] (ecmascript)");
;
;
const ACCESS_TOKEN_COOKIE_NAME = 'access-token';
const REFRESH_TOKEN_COOKIE_NAME = 'refresh-token';
const setAuthCookies = async (accessToken, refreshToken)=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set(ACCESS_TOKEN_COOKIE_NAME, accessToken, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === 'production',
        sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
    });
    cookieStore.set(REFRESH_TOKEN_COOKIE_NAME, refreshToken, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === 'production',
        sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
    });
};
const refreshTokens = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const refreshToken = cookieStore.get(REFRESH_TOKEN_COOKIE_NAME)?.value;
    if (!refreshToken) {
        return null;
    }
    try {
        const newTokens = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["refreshToken"](refreshToken);
        await setAuthCookies(newTokens.accessToken, newTokens.refreshToken);
        return newTokens;
    } catch (error) {
        return null;
    }
};
const deleteAuthCookies = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete(ACCESS_TOKEN_COOKIE_NAME);
    cookieStore.delete(REFRESH_TOKEN_COOKIE_NAME);
};
const getAccessToken = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE_NAME)?.value;
    if (!accessToken) {
        return null;
    }
    return accessToken;
};
}),
"[project]/shared/axios.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "axios": ()=>axios
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/auth.ts [app-rsc] (ecmascript)");
;
;
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3001");
const axios = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL
});
axios.interceptors.request.use(async (config)=>{
    const accessToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAccessToken"])();
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});
axios.interceptors.response.use((response)=>response, async (error)=>{
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["refreshTokens"])();
        return axios(originalRequest);
    }
    return Promise.reject(error);
});
}),
"[project]/shared/api.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createComment": ()=>createComment,
    "createProject": ()=>createProject,
    "createSubTask": ()=>createSubTask,
    "createTask": ()=>createTask,
    "deleteComment": ()=>deleteComment,
    "deleteProject": ()=>deleteProject,
    "deleteSubtask": ()=>deleteSubtask,
    "deleteTask": ()=>deleteTask,
    "getCommentsByTaskId": ()=>getCommentsByTaskId,
    "getMe": ()=>getMe,
    "getMyProjectsWithCounts": ()=>getMyProjectsWithCounts,
    "getMyTasks": ()=>getMyTasks,
    "getProjectById": ()=>getProjectById,
    "getProjectUsers": ()=>getProjectUsers,
    "getSubTasksByTaskId": ()=>getSubTasksByTaskId,
    "getTaskById": ()=>getTaskById,
    "getTasksByProjectId": ()=>getTasksByProjectId,
    "inviteMember": ()=>inviteMember,
    "login": ()=>login,
    "refreshToken": ()=>refreshToken,
    "register": ()=>register,
    "removeInvitation": ()=>removeInvitation,
    "removeMember": ()=>removeMember,
    "updateComment": ()=>updateComment,
    "updateMe": ()=>updateMe,
    "updateProject": ()=>updateProject,
    "updateSubTask": ()=>updateSubTask,
    "updateTask": ()=>updateTask,
    "uploadFiles": ()=>uploadFiles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/axios/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/axios.ts [app-rsc] (ecmascript)");
;
;
const logError = (error)=>{
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
        const response = error.response;
        if (response) {
            console.log(`[프론트] ${response.config.method?.toUpperCase()} ${response.config.url} ${response.status}`);
            console.log(response.data);
        }
    }
};
const login = async (payload)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].post('/auth/login', payload);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '로그인 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const register = async (payload)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].post('/auth/register', payload);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '회원가입 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const refreshToken = async (refreshToken)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].post('/auth/refresh', {
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        });
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '토큰 갱신 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const getMe = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].get('/users/me');
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '내 정보 조회 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const updateMe = async (payload)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].patch('/users/me', payload);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '내 정보 수정 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const getMyProjectsWithCounts = async ({ orderBy, order })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].get('/users/me/projects', {
            params: {
                order_by: orderBy,
                order
            }
        });
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '내 프로젝트 조회 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const createProject = async (payload)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].post('/projects', payload);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '프로젝트 생성 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const getProjectById = async (projectId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].get(`/projects/${projectId}`);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '프로젝트 조회 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const updateProject = async (projectId, payload)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].patch(`/projects/${projectId}`, payload);
    return response.data;
};
const deleteProject = async (projectId)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].delete(`/projects/${projectId}`);
};
const getProjectUsers = async (projectId, params)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].get(`/projects/${projectId}/users`, {
            params
        });
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '프로젝트 사용자 조회 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const inviteMember = async (projectId, email)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].post(`/projects/${projectId}/invitations`, {
            email
        });
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '멤버 초대 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const removeMember = async (projectId, userId)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].delete(`/projects/${projectId}/users/${userId}`);
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '멤버 제외 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const getTasksByProjectId = async (projectId, params)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].get(`/projects/${projectId}/tasks`, {
            params
        });
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '프로젝트 조회 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const createTask = async (payload)=>{
    const { projectId, ...rest } = payload;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].post(`/projects/${projectId}/tasks`, rest);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '할 일 생성 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const getTaskById = async (taskId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].get(`/tasks/${taskId}`);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '할 일 조회 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const updateTask = async (taskId, payload)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].patch(`/tasks/${taskId}`, payload);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '할 일 수정 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const deleteTask = async (taskId)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].delete(`/tasks/${taskId}`);
};
const getSubTasksByTaskId = async (taskId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].get(`/tasks/${taskId}/subtasks`);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '하위 할 일 목록 조회 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const createSubTask = async (taskId, payload)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].post(`/tasks/${taskId}/subtasks`, payload);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '하위 할 일 생성 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const updateSubTask = async (subtaskId, payload)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].patch(`/subtasks/${subtaskId}`, payload);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '하위 할 일 수정 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const deleteSubtask = async (subtaskId)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].delete(`/subtasks/${subtaskId}`);
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '하위 할 일 삭제 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const getCommentsByTaskId = async (taskId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].get(`/tasks/${taskId}/comments`);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '댓글 조회 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const createComment = async (taskId, payload)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].post(`/tasks/${taskId}/comments`, payload);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '댓글 생성 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const updateComment = async (commentId, payload)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].patch(`/comments/${commentId}`, payload);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '댓글 수정 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const deleteComment = async (commentId)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].delete(`/comments/${commentId}`);
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '댓글 삭제 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const getMyTasks = async (params)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].get('/users/me/tasks', {
            params
        });
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '할 일 조회 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const uploadFiles = async (files)=>{
    const formData = new FormData();
    files.forEach((file)=>{
        formData.append('files', file);
    });
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].postForm('/files', formData);
        return response.data;
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '파일 업로드 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
const removeInvitation = async (invitationId)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$axios$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axios"].delete(`/invitations/${invitationId}`);
    } catch (error) {
        logError(error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
            throw new Error(error.response?.data.message ?? '초대 취소 중 오류가 발생했습니다.');
        }
        throw error;
    }
};
}),
"[project]/app/(auth)/layout.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "layout-module__LB1cYq__container",
  "main": "layout-module__LB1cYq__main",
});
}),
"[project]/app/(auth)/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AuthLayout,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/bind.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$layout$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(auth)/layout.module.css [app-rsc] (css module)");
;
;
;
;
;
;
;
;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$layout$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"]);
const metadata = {
    title: 'Moonshot'
};
async function AuthLayout({ children }) {
    let user = null;
    try {
        user = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMe"]();
    } catch  {
        user = null;
    }
    if (user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "ko",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/npm/spoqa-han-sans@3.3.0/css/SpoqaHanSansNeo.min.css"
                }, void 0, false, {
                    fileName: "[project]/app/(auth)/layout.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(auth)/layout.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: cx('main'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: cx('container'),
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/app/(auth)/layout.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ToastContainer"], {}, void 0, false, {
                            fileName: "[project]/app/(auth)/layout.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(auth)/layout.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(auth)/layout.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(auth)/layout.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9b70f5a1._.js.map