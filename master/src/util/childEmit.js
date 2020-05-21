/**
 * des：主应用传递给子应用的 用于emit触发主应用事件的函数
 */

 import store from "@/store";


function changeDataMsg(val) {
  store.dispatch('send-data/changeMsg', val)
}

export {
  changeDataMsg
}