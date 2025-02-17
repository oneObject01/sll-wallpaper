"use strict";
const utils_request = require("../utils/request.js");
async function apiGetBarPic() {
  return utils_request.request({ url: "homeBanner" });
}
function apiGetRandomPic() {
  return utils_request.request({ url: "randomWall" });
}
function apiGetNotice(data = {}) {
  return utils_request.request({ url: "wallNewsList", data });
}
function apiGetClassifyPic(data = {}) {
  return utils_request.request({ url: "classify", data });
}
function apiGetWallListPic(data = {}) {
  return utils_request.request({ url: "wallList", data });
}
function apiDownloadPic(data = {}) {
  return utils_request.request({ url: "downloadWall", data });
}
exports.apiDownloadPic = apiDownloadPic;
exports.apiGetBarPic = apiGetBarPic;
exports.apiGetClassifyPic = apiGetClassifyPic;
exports.apiGetNotice = apiGetNotice;
exports.apiGetRandomPic = apiGetRandomPic;
exports.apiGetWallListPic = apiGetWallListPic;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/apis.js.map
