<template>
	<div id="mapId"></div>
</template>

<script>
import l from "leaflet";

export default {
	data() {
		return {
			map: null,
		};
	},
	mounted() {
		this.map = l.map("mapId", {
			center: [25.03, 121.55],
			zoom: 14,
		});
		// 圖資來源 OSM
		l.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution:
				'<a target="_blank href="https://www.openstreetmap.org">OpenStreetMapcontributors</a> ',
			maxZoom: 18,
		}).addTo(this.map);
	},
};
</script>

<style scoped>
#mapId {
	width: 100%;
	height: 100%;
}
</style>
