"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const contentText = { contentdown: "上拉显示更多", contentrefresh: "正在加载...", contentnomore: "没有更多图片了" };
    const wallListPic = common_vendor.ref([]);
    let storageKey = null;
    let classId = common_vendor.ref({});
    let noMore = false;
    let status = common_vendor.ref("loading");
    common_vendor.onLoad((e) => {
      let { id } = e;
      storageKey = id;
      classId.value.classid = id;
      classId.value.pageSize = 12;
      classId.value.pageNum = 1;
      getWallListPic();
    });
    common_vendor.onUnload(() => {
      try {
        common_vendor.index.removeStorageSync(storageKey);
      } catch (e) {
        common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:46", e);
      }
    });
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    common_vendor.onReachBottom(async () => {
      if (noMore)
        return;
      classId.value.pageNum++;
      getWallListPic();
    });
    const getWallListPic = async () => {
      const res = await api_apis.apiGetWallListPic(classId.value);
      wallListPic.value = [...wallListPic.value, ...res.data];
      if (res.data.length < 12) {
        noMore = true;
        status.value = "noMore";
      }
      try {
        common_vendor.index.setStorageSync(storageKey, wallListPic.value);
      } catch (err) {
        common_vendor.index.__f__("error", "at pages/classlist/classlist.vue:74", "存储失败", err);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        b: common_vendor.o(goBack),
        c: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        d: common_vendor.f(wallListPic.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id,
            c: "/pages/preview/preview?id=" + item._id + "&key=" + common_vendor.unref(storageKey),
            d: item._id
          };
        }),
        e: common_vendor.p({
          status: common_vendor.unref(status),
          contentText
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classlist/classlist.js.map
