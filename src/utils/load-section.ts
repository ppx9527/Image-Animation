// 加载章节函数

// 在typescript中使用第三方js库需要在@types中加上.d.ts声明文件
// 在安装完lodash后，要在node_model/@types/lodash添加.d.ts声明文件或直接npm install --save @types/lodash
import {camelCase, upperFirst} from 'lodash'

// 迭代章节数组返回组件注册对象
export default function (sections: Array<string>){
  return sections.reduce((preview: any, current: string) => {
    // 将kabab-case转换为PascalCase
    current = upperFirst(camelCase(current))

    // 将组件导入函数添加到对象中
    preview[`Section${current}`] = () => import(`@/views/sections/${current}.vue`)

    return preview
  }, {})
}