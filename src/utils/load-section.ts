// 加载章节函数

// 在typescript中使用第三方js库需要在@types中加上.d.ts声明文件
// 在安装完lodash后，要在node_model/@types/lodash添加.d.ts声明文件或直接npm install --save @types/lodash
import {camelCase, upperFirst} from 'lodash'

// 组件接口
interface NeedToLoad {
  page: string;
  nav: Array<string>;
  sections: Array<string>;
}

// 返回组件注册对象
function load(loadComponent: NeedToLoad){
  const page = loadComponent['page'];

  const loadedComponent: any = {};
  const loadedSections: Array<string> = [];

  // 注册组件
  for (const name of loadComponent["nav"]){
    // 将kabab-case转换为PascalCase
    const componentName = upperFirst(camelCase(name));

    loadedComponent[`Section${componentName}`] = () => import(`@/components/${componentName}.vue`)
    loadedSections.push(componentName)
  }

  for (const name of loadComponent["sections"]){
    const componentName = upperFirst(camelCase(name));

    loadedComponent[`Section${componentName}`] = () => import(`@/views/${page}/${componentName}.vue`)
    loadedSections.push(componentName)
  }

  return [loadedComponent, loadedSections];
}

export {NeedToLoad, load}