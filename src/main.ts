import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { setRouter } from './router'


const app = createApp(App)
    .use(ElementPlus)

// 设置路由
setRouter(app)

app.mount('#app')