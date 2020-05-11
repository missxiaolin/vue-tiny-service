import store from "@/store";


function changeDataMsg(val) {
  store.dispatch('send-data/changeMsg', val)
}

export {
  changeDataMsg
}