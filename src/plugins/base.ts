import Vue from "vue";
import {upperFirst, camelCase} from "lodash"

const requireComponent = require.context(
  // 组件目录的相对路径
  '@/components/base',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\.vue$/
)

for (const fileName of requireComponent.keys()) {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取和目录深度无关的文件名
  const name = fileName
    .replace(/index.js/, '')
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(camelCase(name))

  Vue.component(
    `Base${componentName}`,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
}