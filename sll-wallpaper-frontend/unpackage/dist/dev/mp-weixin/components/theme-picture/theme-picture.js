"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const common_scripts_dateFormat = require("../../common/scripts/dateFormat.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "theme-picture",
  props: {
    isMore: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: () => {
        return {
          name: "默认分类",
          picurl: "/common/images/classify1.jpg",
          updateTime: Date.now() - 1e3 * 60 * 60 * 24 * 5
        };
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? {
        b: __props.item.picurl,
        c: common_vendor.t(common_vendor.unref(common_scripts_dateFormat.formatTimeDifference)(__props.item.updateTime)),
        d: common_vendor.t(__props.item.name)
      } : {}, {
        e: __props.isMore
      }, __props.isMore ? {
        f: common_assets._imports_0$3,
        g: common_vendor.p({
          type: "more-filled",
          size: "30"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-93c0b8f0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/theme-picture/theme-picture.js.map
