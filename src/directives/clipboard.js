import { copyText } from '@/utils'
let value = ''
function copy() {
  copyText(value)
}
export const clipboard = {
  // 或事件监听器应用前调用
  created(el, binding) {
    el.addEventListener('click', copy)
    value = binding.value
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding) {
    value = binding.value
  },
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el) {
    el.removeEventListener('click', copy)
    value = ''
  },
}
