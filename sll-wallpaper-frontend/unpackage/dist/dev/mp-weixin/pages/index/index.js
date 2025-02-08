"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_picture2 = common_vendor.resolveComponent("theme-picture");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_picture2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_picture = () => "../../components/theme-picture/theme-picture.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_picture)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_assets._imports_0,
        c: common_assets._imports_1,
        d: common_assets._imports_2,
        e: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        f: common_vendor.f(4, (item, k0, i0) => {
          return {};
        }),
        g: common_vendor.p({
          type: "right",
          size: "16"
        }),
        h: common_vendor.p({
          type: "calendar",
          size: "20"
        }),
        i: common_vendor.p({
          date: Date.now(),
          format: "dd日"
        }),
        j: common_vendor.f(8, (item, k0, i0) => {
          return {};
        }),
        k: common_assets._imports_3,
        l: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: "1cf27b2a-7-" + i0
          };
        }),
        m: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
