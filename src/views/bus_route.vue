<template>
	<div class="busRoutePage">
		<Nav></Nav>
		<div class="breadcrumb">
			<div class="city">首頁/台中市</div>
			<div class="Timetable">
				<div class="TimetablePng">
					<img src="@/assets/ant-design_info-circle-outlined.png" alt="" />
				</div>
				<p>時刻表</p>
			</div>
		</div>
		<div class="busRoute">
			<BusInfo :RouteInfo="lookForStopStatus"></BusInfo>
			<Map></Map>
		</div>

		<Footer></Footer>
	</div>
</template>

<script>
import Map from "@/components/map.vue";
import BusInfo from "@/components/busTimetableInfo.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import { mapState, mapGetters } from "vuex";
export default {
	components: {
		Nav,
		Footer,
		BusInfo,
		Map,
	},
	computed: {
		...mapState(["busRouteArray"]),
		...mapGetters(["lookForStopStatus"]),
	},
	created() {
		this.$router.replace({
			query: {
				number: "紅6",
			},
		});
		this.$store.dispatch("getBusRouteInfoApi");
	},
};
</script>

<style scoped>
/* global */
Map {
	flex: 3.5;
}
img {
	width: 100%;
	height: 100%;
}
/* breadcrumb */
.breadcrumb {
	width: 100%;
	height: 36px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f8f8f8;
}
.city {
	margin-left: 66px;
}
.TimetablePng {
	width: 14px;
	height: 14px;
	margin-right: 6px;
}
.Timetable {
	float: right;
	display: flex;
}
p {
	margin-right: 67px;
}
/* busRoute */
.busRoute {
	width: 100%;
	display: flex;
}
/* busTimetableList */
.busTimetableList {
	display: flex;
}
/* backAndLike */
.backAndLike {
	flex: 1;
	width: 100%;
	padding: 0px 21px 0px 21px;
}
.busTimetableList {
	display: flex;
}
/* map */
.map {
	flex: 3.5;
}
</style>
