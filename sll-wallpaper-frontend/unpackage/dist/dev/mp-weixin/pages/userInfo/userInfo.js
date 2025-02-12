"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "userInfo",
  setup(__props) {
    const list1 = [
      { key: 101, icon: "download-filled", title: "我的下载", number: 0 },
      { key: 102, icon: "star-filled", title: "我的评分", number: 2 },
      { key: 102, icon: "chatboxes-filled", title: "联系客服" }
    ];
    const list2 = [
      { key: 201, icon: "notification-filled", title: "订阅更新" },
      { key: 202, icon: "flag-filled", title: "常见问题" }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.f(list1, (item, k0, i0) => {
          return {
            a: "875c692e-0-" + i0,
            b: common_vendor.p({
              type: item.icon,
              size: "20"
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.number),
            e: "875c692e-1-" + i0,
            f: item.key
          };
        }),
        c: common_vendor.p({
          type: "right",
          size: "20"
        }),
        d: common_vendor.f(list2, (item, k0, i0) => {
          return {
            a: "875c692e-2-" + i0,
            b: common_vendor.p({
              type: item.icon,
              size: "20"
            }),
            c: common_vendor.t(item.title),
            d: "875c692e-3-" + i0,
            e: item.key
          };
        }),
        e: common_vendor.p({
          type: "right",
          size: "20"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-875c692e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/userInfo/userInfo.js.map
