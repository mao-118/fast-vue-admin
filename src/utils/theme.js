import { useCssVar } from '@vueuse/core'
// 处理主题样式
export function handleThemeStyle(theme) {
  const el = document.documentElement
  const primaryColor = useCssVar('--el-color-primary', el)
  primaryColor.value = theme
  for (let i = 1; i <= 9; i++) {
    const lightColor = useCssVar(`--el-color-primary-light-${i}`, el)
    lightColor.value = `${getLightColor(theme, i / 10)}`
  }
  for (let i = 1; i <= 9; i++) {
    const darkColor = useCssVar(`--el-color-primary-dark-${i}`, el)
    darkColor.value = `${getDarkColor(theme, i / 10)}`
  }
}

// hex颜色转rgb颜色
export function hexToRgb(str) {
  str = str.replace('#', '')
  const hexs = str.match(/../g)
  for (let i = 0; i < 3; i++) {
    hexs[i] = parseInt(hexs[i], 16)
  }
  return hexs
}

// rgb颜色转Hex颜色
export function rgbToHex(r, g, b) {
  const hexs = [r.toString(16), g.toString(16), b.toString(16)]
  for (let i = 0; i < 3; i++) {
    if (hexs[i].length === 1) {
      hexs[i] = `0${hexs[i]}`
    }
  }
  return `#${hexs.join('')}`
}

// 变浅颜色值
export function getLightColor(color, level) {
  const rgb = hexToRgb(color)
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i])
  }
  return rgbToHex(rgb[0], rgb[1], rgb[2])
}

// 变深颜色值
export function getDarkColor(color, level) {
  const rgb = hexToRgb(color)
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor(rgb[i] * (1 - level))
  }
  return rgbToHex(rgb[0], rgb[1], rgb[2])
}
