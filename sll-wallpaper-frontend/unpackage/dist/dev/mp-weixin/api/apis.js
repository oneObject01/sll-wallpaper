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
exports.apiGetBarPic = apiGetBarPic;
exports.apiGetClassifyPic = apiGetClassifyPic;
exports.apiGetNotice = apiGetNotice;
exports.apiGetRandomPic = apiGetRandomPic;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/apis.js.map
