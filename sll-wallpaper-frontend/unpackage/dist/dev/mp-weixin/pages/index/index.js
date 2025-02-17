"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
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
    let barPic = common_vendor.ref([]);
    let randomPic = common_vendor.ref([]);
    let notice = common_vendor.ref([]);
    let classifyPic = common_vendor.ref([]);
    let storageKey = "randomPicKey";
    const goPreview = (id = "") => {
      common_vendor.index.setStorageSync(storageKey, randomPic.value);
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview?id=" + id + "&key=" + storageKey
      });
    };
    const getBarPic = async () => {
      let res = await api_apis.apiGetBarPic();
      barPic.value = res.data;
    };
    const getRandomPic = async () => {
      let res = await api_apis.apiGetRandomPic();
      randomPic.value = res.data;
    };
    const getNotice = async () => {
      let res = await api_apis.apiGetNotice({ select: true });
      notice.value = res.data;
    };
    const getClassifyPic = async () => {
      let res = await api_apis.apiGetClassifyPic({ pageSize: 8 });
      classifyPic.value = res.data;
    };
    getBarPic();
    getRandomPic();
    getNotice();
    getClassifyPic();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_vendor.f(common_vendor.unref(barPic), (item, k0, i0) => {
          return {
            a: item.picurl,
            b: item._id
          };
        }),
        c: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        d: common_vendor.f(common_vendor.unref(notice), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item._id
          };
        }),
        e: common_vendor.p({
          type: "right",
          size: "16"
        }),
        f: common_vendor.p({
          type: "calendar",
          size: "20"
        }),
        g: common_vendor.p({
          date: Date.now(),
          format: "dd日"
        }),
        h: common_vendor.f(common_vendor.unref(randomPic), (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: common_vendor.o(($event) => goPreview(item._id), item._id),
            c: item._id
          };
        }),
        i: common_vendor.f(common_vendor.unref(classifyPic), (item, k0, i0) => {
          return {
            a: "1cf27b2a-7-" + i0,
            b: common_vendor.p({
              item
            }),
            c: item._id
          };
        }),
        j: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
