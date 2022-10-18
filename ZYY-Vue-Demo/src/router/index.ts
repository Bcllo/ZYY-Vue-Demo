import { createRouter, createWebHashHistory } from "vue-router";
// 2. 引入配置路由
import { routes } from "./static";
// import { useRouterStore } from "../pinia";

// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});
// keepAlive
// router.beforeEach((to, from) => {
// 	const cachePage = useRouterStore();
// 	if (to.meta.keepAlive) {
// 		cachePage.setCachePage(to.name);
// 	}
// 	return true;
// });

// 3导出路由   然后去 main.ts 注册 router.ts
export default router;
