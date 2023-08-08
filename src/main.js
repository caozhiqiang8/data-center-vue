import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 通过 config.globalProperties

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(ElementPlusIconsVue)
app.mount('#app')



