"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _component_uni_load_more = common_vendor.resolveComponent("uni-load-more");
  _component_uni_load_more();
}
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const contentText = { contentdown: "上拉显示更多", contentrefresh: "正在加载...", contentnomore: "没有更多图片了" };
    const wallListPic = common_vendor.ref([]);
    let classId = common_vendor.ref({});
    let noMore = false;
    let status = common_vendor.ref("loading");
    common_vendor.onLoad((e) => {
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:25", e);
      let { id } = e;
      classId.value.classid = id;
      classId.value.pageSize = 12;
      classId.value.pageNum = 1;
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:30", classId.value);
      getWallListPic();
    });
    common_vendor.onReachBottom(async () => {
      if (noMore)
        return;
      classId.value.pageNum++;
      const res = await api_apis.apiGetWallListPic(classId.value);
      wallListPic.value = [...wallListPic.value, ...res.data];
      if (res.data.length < 12) {
        noMore = true;
        status.value = "noMore";
      }
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:43", "请求中");
    });
    const getWallListPic = async () => {
      const res = await api_apis.apiGetWallListPic(classId.value);
      wallListPic.value = res.data;
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:49", res);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(wallListPic.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id
          };
        }),
        b: common_vendor.p({
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
