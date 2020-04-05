// 入口文件

import Vue from "vue" 
import App from "./App.vue"

// 按需导入MintUI
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

// 导入MUI
import "./lib/mui/css/mui.css"

import "./lib/mui/css/icons-extra.css"

let vm = new Vue({
    el:'#app',
    render:c => c(App),
    router
})
