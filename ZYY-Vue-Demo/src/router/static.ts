import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Hello",
		component: () => import("../views/initialCode/hello.vue"),
		meta: { keepAlive: true },
	},
	{
		path: "/threeColumnContents",
		name: "threeColumnContents",
		component: () =>
			import("../views/staticPageLayout/threeColumnContents.vue"),
		meta: { keepAlive: true },
	},
	{
		path: "/hoverBoard",
		name: "hoverBoard",
		component: () => import("../views/hoverDemo/hoverBoard.vue"),
	},
];

export { routes };
