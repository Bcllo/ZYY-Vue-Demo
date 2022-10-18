import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Hello",
		component: () => import("../views/initialCode/hello.vue"),
		meta: { keepAlive: true },
	},
	// {
	// 	path: "/hello",
	// 	name: "Hello",
	// 	component: () => import("../views/initialCode/hello.vue"),
	// 	meta: { keepAlive: true },
	// },
	//   {
	//     path: "/categoryAdd",
	//     name: "categoryAdd",
	//     component: () => import("../components/categoryManage/categoryAdd.vue"),
	//   },
];

export { routes };
