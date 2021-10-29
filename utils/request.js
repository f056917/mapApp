// wxa24e9e4c94a55d23
const addressUrl = 'https://planet-det-api-dev.linwujiankang.com'; //测试
const ossUrl = 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/'; // 静态资源地址

let ads = require('./ajaxAddress.js');
let networkStatus = '';
let rqPost = 'post', rqGet = 'get', rqPut = 'put', rqDel = 'DELETE';

export function request(methodType, url, params, successCb, errorCb, compLeteCb) {
    let token = wx.getStorageSync('token');
    let param = {}, httpUrl = url;
    if (params) {
        if (methodType === 'get') {
            httpUrl = url + '?';
            for (const propName of Object.keys(params)) {
                const value = params[propName];
                var part = encodeURIComponent(propName) + "=";
                if (value !== null && typeof(value) !== "undefined") {
                    if (typeof value === 'object') {
                        for (const key of Object.keys(value)) {
                            let params = propName + '[' + key + ']';
                            var subPart = encodeURIComponent(params) + "=";
                            httpUrl += subPart + encodeURIComponent(value[key]) + "&";
                        }
                    } else {
                        httpUrl += part + encodeURIComponent(value) + "&";
                    }
                }
            }
            httpUrl = httpUrl.slice(0, -1);
            param = {};
        } else {
            param = params
        }
    }
    // let header = {
    //   'userType': 'wx',
    //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    // }
    let header = {}
    token && (header.Authorization = 'Bearer ' + token);
    wx.request({
        url: addressUrl + httpUrl,
        method: methodType,
        data: param,
        header: header,
        success: function (res) {
            const code = res.data.code
            if (res.statusCode == 200) {
                const code = res.data.code
                //关闭加载提示 关闭tabbar 加载动画
                if (code == 401) {
                    if (!wx.getStorageSync('token')) return
                    wx.showToast({
                        title: '请重新登录',
                        icon: 'none',
                        duration: 2500
                    })
                    wx.clearStorageSync('token')
                    wx.navigateTo({
                        url: '/pages/index/index',
                    })
                } else if (code !=200 && code != 10004 && code != 10031 && code != 10032 && code != 10033 && code != 10034 && code != 10018) {
                    wx.showToast({
                        title: res.data.message ? res.data.message : '服务器异常',
                        icon: 'none',
                        duration: 2500
                    })
                }
                ads.isFunction(successCb) && successCb(res.data);
            } else if (res.statusCode == 404) {
                wx.showToast({
                    title: '请求异常',
                    icon: 'none',
                    duration: 2500
                })
            } else {}

        },
        error: function (res) {
            ads.isFunction(errorCb) && errorCb(res);
            wx.showToast({
                title: '服务异常',
                duration: 2500
            })
        },
        complete: function (res) {
            // wx.hideLoading();
            wx.hideNavigationBarLoading();
            ads.isFunction(compLeteCb) && compLeteCb(res);
        }
    });
}

function network(scope) {
    let _this = scope;
    //判断网络类型，没有网络networkStatus 等于true
    let networkStatus = ''
    wx.getNetworkType({
        success: function (res) {
            // 返回网络类型, 有效值：
            // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
            let networkType = res.networkType
            if (networkType == 'none') {
                networkStatus = true;
                _this.setData({
                    networkStatus: networkStatus
                })
            } else {
                _this.setData({
                    networkStatus: false
                })
            }
        }
    })
}

// 登录
function wxLogin(params, successCb) {
    request(rqPost, ads.wxLogin(), params, successCb)
}
// 获取用户信息
function getUserInfo(params, successCb) {
    request(rqPost, ads.getUserInfo(), params, successCb)
}
// 获取用户信息
function getScriptList(params, successCb) {
    request(rqGet, ads.getScriptList(), params, successCb)
}
// 添加场次接口
function enterSession(params, successCb) {
    request(rqPost, ads.enterSession(), params, successCb)
}
// 角色列表接口
function getRoleList(params, successCb) {
    request(rqPost, ads.getRoleList(), params, successCb)
}
// 选择角色接口
function selectRole(params, successCb) {
    request(rqPost, ads.selectRole(), params, successCb)
}
// 开始游戏接口
function startGame(params, successCb) {
    request(rqPost, ads.startGame(), params, successCb)
}
// 阅读章节接口
function addUserProgress(params, successCb) {
    request(rqPost, ads.addUserProgress(), params, successCb)
}
// 任务列表接口
function getUserTaskList(params, successCb) {
    request(rqPost, ads.getUserTaskList(), params, successCb)
}
// 任务详情接口
function getUserTaskDetail(params, successCb) {
    request(rqPost, ads.getUserTaskDetail(), params, successCb)
}
// 剧本接口
function getUserScript(params, successCb) {
    request(rqPost, ads.getUserScript(), params, successCb)
}
// 探索记录接口
function getUserExplore(params, successCb) {
    request(rqPost, ads.getUserExplore(), params, successCb)
}
// 玉佩详情接口
function getGroupSkillDetail(params, successCb) {
    request(rqPost, ads.getGroupSkillDetail(), params, successCb)
}
// 剧本主页面接口
function scriptPage(params, successCb) {
    request(rqPost, ads.scriptPage(), params, successCb)
}
// 结束场次接口
function endSession(params, successCb) {
    request(rqPost, ads.endSession(), params, successCb)
}
// 线索列表接口
function getUserCluesList(params, successCb) {
    request(rqPost, ads.getUserCluesList(), params, successCb)
}
// 线索详情接口
function getCluesDetail(params, successCb) {
    request(rqPost, ads.getCluesDetail(), params, successCb)
}
// 转换线索接口
function conversionOpenClues(params, successCb) {
    request(rqPost, ads.conversionOpenClues(), params, successCb)
}
// 景点详情接口
function getScriptAttractionsDeatil(params, successCb) {
    request(rqPost, ads.getScriptAttractionsDeatil(), params, successCb)
}
// 完成任务接口
function userCompleteTask(params, successCb) {
    request(rqPost, ads.userCompleteTask(), params, successCb)
}

module.exports = {
    addressUrl: addressUrl,
    ossUrl: ossUrl,
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
