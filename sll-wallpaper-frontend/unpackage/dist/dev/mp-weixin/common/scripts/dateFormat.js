"use strict";
function formatTimeDifference(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const minute = 60 * 1e3;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  if (diff < minute) {
    return "1分钟内";
  } else if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return `${minutes}分钟前`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours}小时前`;
  } else if (diff < month) {
    const days = Math.floor(diff / day);
    return `${days}天前`;
  } else if (diff < 3 * month) {
    const months = Math.floor(diff / month);
    return `${months}个月前`;
  } else {
    return "3个月前";
  }
}
exports.formatTimeDifference = formatTimeDifference;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/common/scripts/dateFormat.js.map
