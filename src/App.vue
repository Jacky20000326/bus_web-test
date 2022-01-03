<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
import { geolocation } from "./geolocation";
export default {
	components: {},
	mounted() {
		geolocation((data) => {
			console.log(data);
		});
		console.log(navigator.geolocation);
	},
};
</script>
<style>
* {
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
}
#app {
	width: 100%;
}
</style>
