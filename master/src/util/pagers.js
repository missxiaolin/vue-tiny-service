import { Subject } from "rxjs"
const pagers = new Subject();

// 消息推送
function pagersPush(data) {
  pagers.next(data);
}

function pagersWatcher() {
  pagers.subscribe({
    next: (v) => console.log('pagers:', v)
  });
}


export {
  pagersPush,
  pagersWatcher
}

export default pagers;

