// 引入vue
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
const app = createApp(App);

// 完整引入ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
app.use(ElementPlus, {
	// size: 'small',
	locale: zhCn,
});

// 注册ElementPlus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

//引入router
import router from "./router";
app.use(router);

//引入pinia
// import { createPinia } from "pinia";
// const pinia = createPinia();
// app.use(pinia);

// 引入自定义组件
// import formHeader from "./common/formHeader.vue";
// app.component("formHeader", formHeader);

//挂载至根组件
app.mount("#app");
