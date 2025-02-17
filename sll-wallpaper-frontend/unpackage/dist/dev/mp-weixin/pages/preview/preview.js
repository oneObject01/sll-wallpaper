"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    common_vendor.ref(null);
    common_vendor.ref();
    let wallList = [];
    common_vendor.ref(null);
    common_vendor.ref(null);
    let currentIndex = common_vendor.ref(null);
    let loadedIndex = common_vendor.ref([]);
    let currentInfo = common_vendor.ref({});
    common_vendor.onLoad((e) => {
      let {
        id,
        key
      } = e;
      getStoragePic(key);
      wallList.forEach((item) => {
        item.picurl = item.smallPicurl.replace("_small.webp", ".jpg");
      });
      currentIndex.value = wallList.findIndex((item) => {
        return id == item._id;
      });
      addLoadedIndex();
      currentInfo.value = wallList[currentIndex.value];
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:161", wallList[currentIndex.value].picurl);
    });
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const getStoragePic = (storageKey = "") => {
      try {
        wallList = common_vendor.index.getStorageSync(storageKey);
        if (wallList) {
          common_vendor.index.__f__("log", "at pages/preview/preview.vue:202", wallList);
        }
      } catch (err) {
        common_vendor.index.__f__("error", "at pages/preview/preview.vue:205", "获取失败", err);
      }
    };
    const downloadPic = async () => {
      let {
        classid,
        _id: wallId
      } = currentInfo.value;
      const res = await api_apis.apiDownloadPic({
        classid,
        wallId
      });
      return res;
    };
    const checkCurrent = (e) => {
      currentIndex.value = e.detail.current;
      addLoadedIndex();
      currentInfo.value = wallList[currentIndex.value];
    };
    const addLoadedIndex = () => {
      if (currentIndex.value == 0) {
        loadedIndex.value.push(wallList.length - 1, currentIndex.value, currentIndex.value + 1);
      } else if (currentIndex.value == wallList.length - 1) {
        loadedIndex.value.push(currentIndex.value - 1, currentIndex.value, 0);
      } else {
        loadedIndex.value.push(currentIndex.value - 1, currentIndex.value, currentIndex.value + 1);
      }
      loadedIndex.value = [...new Set(loadedIndex.value)];
    };
    const clickDownload = async () => {
      try {
        common_vendor.index.showLoading({
          title: "下载中...",
          mask: true
        });
        const res = await downloadPic();
        if (res.errMsg == 400)
          throw res;
        common_vendor.index.getImageInfo({
          src: wallList[currentIndex.value].picurl,
          success: (res2) => {
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: res2.path,
              success: (res3) => {
                common_vendor.index.showToast({
                  title: "保存成功",
                  icon: "none"
                });
              },
              fail: (err) => {
                if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                  common_vendor.index.showToast({
                    title: "保存失败",
                    icon: "none"
                  });
                  return;
                }
                common_vendor.index.showModal({
                  title: "提示",
                  content: "需要相册权限",
                  success: (res3) => {
                    if (res3.confirm) {
                      common_vendor.index.openSetting({
                        success: (res4) => {
                          common_vendor.index.__f__(
                            "log",
                            "at pages/preview/preview.vue:281",
                            res4.authSetting
                          );
                          if (res4.authSetting["scope.writePhotosAlbum"] == false) {
                            common_vendor.index.showToast({
                              title: "授权失败",
                              icon: "none"
                            });
                          }
                        }
                      });
                    }
                  }
                });
              }
            });
          },
          fail: (err) => {
            common_vendor.index.__f__("log", "at pages/preview/preview.vue:303", "调用失败");
          },
          complete: () => {
            common_vendor.index.hideLoading();
          }
        });
      } catch (err) {
        common_vendor.index.__f__("log", "at pages/preview/preview.vue:310", "失败啦");
        common_vendor.index.__f__("log", "at pages/preview/preview.vue:311", err);
        common_vendor.index.hideLoading();
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(wallList), (item, index, i0) => {
          return common_vendor.e({
            a: index == common_vendor.unref(currentIndex) || common_vendor.unref(loadedIndex).includes(index)
          }, index == common_vendor.unref(currentIndex) || common_vendor.unref(loadedIndex).includes(index) ? {
            b: common_vendor.o(maskChange, item._id),
            c: item.picurl
          } : {}, {
            d: item._id
          });
        }),
        b: common_vendor.o(checkCurrent),
        c: common_vendor.unref(currentIndex),
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        f: common_vendor.o(goBack),
        g: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        h: common_vendor.t(common_vendor.unref(currentIndex) + 1),
        i: common_vendor.t(common_vendor.unref(wallList).length),
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        l: common_vendor.p({
          type: "info",
          size: "28"
        }),
        m: common_vendor.o(clickInfo),
        n: common_vendor.o(clickDownload),
        o: common_vendor.p({
          type: "download",
          size: "23"
        })
      } : {}, {
        p: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        q: common_vendor.o(clickInfoClose),
        r: common_vendor.t(common_vendor.unref(currentInfo)._id),
        s: common_vendor.unref(currentInfo).tabs && common_vendor.unref(currentInfo).tabs[0]
      }, common_vendor.unref(currentInfo).tabs && common_vendor.unref(currentInfo).tabs[0] ? {
        t: common_vendor.t(common_vendor.unref(currentInfo).tabs[0])
      } : {}, {
        v: common_vendor.t(common_vendor.unref(currentInfo).nickname),
        w: common_vendor.t(common_vendor.unref(currentInfo).description),
        x: common_vendor.sr(infoPopup, "2dad6c07-5", {
          "k": "infoPopup"
        }),
        y: common_vendor.p({
          type: "bottom",
          ["safe-area"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
