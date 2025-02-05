"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _component_custom_nav_bar = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_component_custom_nav_bar + _easycom_uni_icons2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
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
          size: "16",
          color: "#333"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
