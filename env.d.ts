declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
  }
//   以上内容用于让Vs code的内置ts语言服务器不报如 "xx.vue文件不是模块"的错误