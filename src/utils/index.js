import useClipboard from 'vue-clipboard3'
import { ElMessage } from 'element-plus'
const { toClipboard } = useClipboard()
// 文本拷贝
export const copyText = async (text) => {
  try {
    if (text) {
      await toClipboard(text)
      ElMessage.success('复制成功')
    }
  } catch (e) {
    console.error(e)
  }
}
// 深拷贝
export function deepCopy(newObj, oldObj) {
  for (const k in oldObj) {
    if (oldObj[k] instanceof Array) {
      newObj[k] = []
      deepCopy(newObj[k], oldObj[k])
    } else if (oldObj[k] instanceof Function) {
      newObj[k] = oldObj[k]
    } else if (oldObj[k] instanceof Object) {
      newObj[k] = {}
      deepCopy(newObj[k], oldObj[k])
    } else {
      newObj[k] = oldObj[k]
    }
  }
}
// 元素滚动
export const useScroll = (event) => {
  if (event.preventDefault) {
    event.preventDefault()
  } else {
    event.returnValue = false
  }
  // 获取滚动方向
  const detail = event.wheelDelta || event.detail
  // 定义滚动方向，其实也可以在赋值的时候写
  const moveForwardStep = 1
  const moveBackStep = -1
  // 定义滚动距离
  let step = 0
  // 判断滚动方向,这里的100可以改，代表滚动幅度，也就是说滚动幅度是自定义的
  if (navigator.userAgent.indexOf('Firefox') >= 0) {
    // 火狐浏览器和谷歌的值正好相反
    if (detail > 0) {
      step = moveForwardStep * 100
    } else {
      step = moveBackStep * 100
    }
  } else {
    if (detail < 0) {
      step = moveForwardStep * 100
    } else {
      step = moveBackStep * 100
    }
  }
  // 返回滚动值
  return step
}
