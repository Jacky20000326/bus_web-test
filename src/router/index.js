import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home_Page.vue";
import busSearch from "@/views/bus_Search.vue";
import busRoute from "@/views/bus_route.vue";

const routes = [
	{
		name: "Home",
		path: "/",
		component: Home,
	},
	{
		name: "busSearch",
		path: "/search",
		component: busSearch,
	},
	{
		name: "busNumber",
		path: "/busNumber",
		component: busRoute,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
