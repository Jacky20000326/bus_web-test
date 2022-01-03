<template>
	<div class="busTimeTableList">
		<div class="busStation">
			<div class="goto">
				<div class="gotoTxt" @click="switchStopState(1)">
					往 <b>台中車站</b>
				</div>
			</div>
			<div class="backTo">
				<div class="bacToTxt" @click="switchStopState(0)">
					往 <b>靜宜大學</b>
				</div>
			</div>
		</div>
		<div class="busStepLists">
			<div class="busStepList" v-for="(item, i) in Route" :key="i">
				<div class="step">
					<div class="time">15:20</div>
					<div class="stepName">{{ item.StopName.Zh_tw }}</div>
					<div class="state"></div>
				</div>
				<hr />
			</div>
		</div>
		<div class="update">
			<div class="updateTime">20 秒後更新</div>
			<div class="updateNow">
				<div class="updatepng">
					<img src="@/assets/icons8_refresh.png" alt="" />
				</div>
				<div class="updateTxt">立即更新</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["Route"],
	methods: {
		switchStopState(state) {
			console.log(state);
			this.$store.commit("switchStopStatus", state);
		},
	},
};
</script>

<style scoped>
/* global */

hr {
	width: 320px;
	border: 1px solid #e7e7e7;
	margin-top: 20px;
}
.busStation {
	display: flex;
	height: 37px;
	margin-top: 10px;
	margin-bottom: 16px;
}
.goto {
	flex: 1;
	background: #e0e0e0;
	border-radius: 5px 5px 0px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.backTo {
	flex: 1;
	background: #355f8b;
	border-radius: 5px 5px 0px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.bacToTxt {
	text-align: center;
	color: #fff;
}
/* busStepLists */
.busStepLists {
	padding: 14px 20px 13px 32px;
	width: 100%;
	overflow: auto;
	height: 55vh;
}
.busStepList {
	width: 100%;
	height: 53px;
	margin-top: 10px;
}
.step {
	display: flex;
	justify-content: center;
	align-items: center;
}
.time {
	font-size: 14px;
	width: 77px;
	height: 26px;
	background-color: #a9a9a9;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
}
.stepName {
	margin-left: 18px;
	width: 140px;
	font-size: 14px;
	color: #888888;
}
.state {
	width: 12px;
	height: 12px;
	background: #c4c4c4;
	border: 2px solid #f8f8f8;
	margin-left: 70px;
	border-radius: 50px;
	transform: translateX(50%);
}
/* update */
.update {
	width: 100%;
	height: 7vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #e7e7e7;
	padding: 0px 21px 0px 21px;
}
.updateNow {
	display: flex;
}
.updatepng {
	width: 19px;
	height: 19px;
}
</style>
