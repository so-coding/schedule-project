import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
//引入图标
import * as Icons from "@ant-design/icons-vue"
import { createPinia } from 'pinia'
const app = createApp(App)
const pinia = createPinia()
//注册图标组件
Object.keys(Icons).forEach((key) => {
  // console.log(key)
  app.component(key, Icons[key as keyof typeof Icons])
})
// 使用
app.use(Antd).use(pinia).use(router).mount('#app')
