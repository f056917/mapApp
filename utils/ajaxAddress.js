function isFunction(obj) {
    return typeof obj === 'function';
}

function isObjct(obj) {
    if (typeof obj == 'object') {
        return true
    } else {
        return false;
    }
}

// 登录
function wxLogin() {
    return '/api/wxAppletLogin';
}
// 获取用户信息
function getUserInfo() {
    return '/api/getUserInfo';
}
// 剧本列表接口
function getScriptList() {
    return '/api/getScriptList';
}
// 添加场次接口
function enterSession() {
    return '/api/enterSession';
}
// 角色列表接口
function getRoleList() {
    return '/api/getRoleList';
}
// 选择角色接口
function selectRole() {
    return '/api/selectRole';
}
// 开始游戏接口
function startGame() {
    return '/api/startGame';
}
// 阅读章节接口
function addUserProgress() {
    return '/api/addUserProgress';
}
// 任务列表接口
function getUserTaskList() {
    return '/api/getUserTaskList';
}
// 任务详情接口
function getUserTaskDetail() {
    return '/api/getUserTaskDetail';
}
// 剧本接口
function getUserScript() {
    return '/api/getUserScript';
}
// 探索记录接口
function getUserExplore() {
    return '/api/getUserExplore';
}
// 玉佩详情接口
function getGroupSkillDetail() {
    return '/api/getGroupSkillDetail';
}
// 剧本主页面接口
function scriptPage() {
    return '/api/scriptPage';
}
// 结束场次接口
function endSession() {
    return '/api/endSession';
}
// 线索列表接口
function getUserCluesList() {
    return '/api/getUserCluesList';
}
// 线索详情接口
function getCluesDetail() {
    return '/api/getCluesDetail';
}
// 转换线索接口
function conversionOpenClues() {
    return '/api/conversionOpenClues';
}
// 景点详情接口
function getScriptAttractionsDeatil() {
    return '/api/getScriptAttractionsDeatil';
}
// 完成任务接口
function userCompleteTask() {
    return '/api/userCompleteTask';
}

module.exports = {
    isObjct: isObjct,
    isFunction: isFunction,
    wxLogin: wxLogin,
    getUserInfo: getUserInfo,
    getScriptList: getScriptList,
    enterSession: enterSession,
    getRoleList: getRoleList,
    selectRole: selectRole,
    getUserExplore: getUserExplore,
    getGroupSkillDetail: getGroupSkillDetail,
    startGame: startGame,
    addUserProgress: addUserProgress,
    getUserTaskList: getUserTaskList,
    getUserTaskDetail: getUserTaskDetail,
    getUserScript: getUserScript,
    scriptPage: scriptPage,
    endSession: endSession,
    getUserCluesList: getUserCluesList,
    getCluesDetail: getCluesDetail,
    conversionOpenClues: conversionOpenClues,
    getScriptAttractionsDeatil: getScriptAttractionsDeatil,
    userCompleteTask: userCompleteTask,
}