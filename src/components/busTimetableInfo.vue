<template>
	<div class="busTimetableInfo">
		<div class="busTimetableItems">
			<div class="backAndLike">
				<div class="goBack" @click="backToSearch">
					<div class="backpng">
						<img src="@/assets/dashicons_arrow-left-alt2.png" alt="" />
					</div>
					<div class="goBacktxt">返回搜尋</div>
				</div>
				<div class="isLike">
					<img src="@/assets/carbon_favorite.png" alt="" />
				</div>
			</div>
			<div class="busInfo">
				<div class="number">300</div>
				<div class="name">台灣大道公車專用道</div>
			</div>
		</div>
		<BusTimeTableList :Route="RouteInfo"></BusTimeTableList>
	</div>
</template>

<script>
import BusTimeTableList from "@/components/busTimetableIist.vue";
export default {
	props: ["RouteInfo"],
	components: {
		BusTimeTableList,
	},
	methods: {
		backToSearch() {
			this.$router.push("/search");
		},
	},
};
</script>

<style scoped>
/* global */
img {
	width: 100%;
	height: 100%;
}
.busTimetableInfo {
	flex: 1;
}
.busTimetableItems {
	width: 100%;
	height: 130px;
	display: flex;
	padding: 17px 17px 0px 15px;
	flex-direction: column;
}
.backAndLike {
	display: flex;
	justify-content: space-between;
}
.goBack {
	display: flex;
}
.backpng {
	width: 20px;
	height: 20px;
}
.goBacktxt {
	font-size: 12px;
	margin-left: 10px;
}
.isLike {
	width: 20px;
	height: 20px;
}
.busInfo {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	flex-direction: column;
}
.number {
	font-weight: 700;
	font-size: 35px;
}
</style>
