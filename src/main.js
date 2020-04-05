// 入口文件

import Vue from "vue" 
import App from "./App.vue"

// 按需导入MintUI
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

// 导入MUI
import "./lib/mui/css/mui.css"



let vm = new Vue({
    el:'#app',
    render:c => c(App)
})
