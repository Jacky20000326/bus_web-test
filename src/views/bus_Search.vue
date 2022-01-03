<template>
	<div class="search_page">
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
		<!-- user searching -->
		<div class="searchSection">
			<div class="searchControl">
				<div class="search_bar">
					<input class="inputBar" v-model="inputSearchNum" type="text" />
					<div class="isdelete" @click="removeAllVal">
						<img src="@/assets/iwwa_delete.png" alt="" />
					</div>
				</div>
				<div class="listSection">
					{{ cityDataArrays }}
					<div
						class="search_lists"
						v-for="(item, index) in filterBusNum"
						:key="index"
						@click="getBusRouteInfo(item)"
					>
						<div class="list">
							<div class="bus_Info">
								<div class="bus_Number">{{ item.RouteName.Zh_tw }}</div>
								<div class="forward">
									{{ item.DepartureStopNameZh }} -
									{{ item.DestinationStopNameZh }}
								</div>
							</div>

							<div class="islike">
								<div class="like">
									<img src="@/assets/carbon_favorite.png" alt="" />
								</div>
								<div class="listCity">{{ item.City }}</div>
							</div>
						</div>
						<hr />
					</div>
				</div>
				<div class="searchTab">
					<div class="allTab">
						<div class="col1">
							<div class="btn1">
								<button value="1" @click="btnVal('1')">1</button>
							</div>
							<div class="btn2">
								<button value="2" @click="btnVal('2')">2</button>
							</div>
							<div class="btn3">
								<button value="3" @click="btnVal('3')">3</button>
							</div>
						</div>
						<div class="col2">
							<div class="btn4">
								<button value="4" @click="btnVal('4')">4</button>
							</div>
							<div class="btn5">
								<button value="5" @click="btnVal('5')">5</button>
							</div>
							<div class="btn6">
								<button value="6" @click="btnVal('6')">6</button>
							</div>
						</div>
						<div class="col3">
							<div class="btn7">
								<button value="7" @click="btnVal('7')">7</button>
							</div>
							<div class="btn8">
								<button value="8" @click="btnVal('8')">8</button>
							</div>
							<div class="btn9">
								<button value="9" @click="btnVal('9')">9</button>
							</div>
						</div>
						<div class="col4">
							<div class="btn10">
								<button @click="btnVal('專用道')">專用道</button>
							</div>
							<div class="btn11">
								<button @click="btnVal('0')">0</button>
							</div>
							<div class="btn12">
								<button @click="removeSingleVal">倒退</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="map">
				<Map></Map>
			</div>
		</div>
		<Footer></Footer>
		<div class="loading" :class="{ active: loadingState }">
			<div class="loadingTest">Loading...</div>
		</div>
	</div>
</template>

<script>
import Map from "@/components/map.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters, mapState } from "vuex";

export default {
	components: {
		Nav,
		Footer,
		Map,
	},
	created() {
		this.$store.commit("userSelectCity");
		this.$store.dispatch("getCityData");
	},
	data() {
		return {
			loading: true,
			inputSearchNum: "",
		};
	},
	watch: {
		inputSearchNum: function () {
			this.$store.commit("searchBusNumber", this.inputSearchNum);
			console.log(this.searchBusNumberInput);
		},
	},
	computed: {
		...mapState(["searchBusNumberInput", "loadingState"]),
		...mapGetters(["filterBusNum"]),
	},
	methods: {
		btnVal(value) {
			this.inputSearchNum += value;
		},
		removeAllVal() {
			this.inputSearchNum = "";
		},

		removeSingleVal() {
			let ValLenfth = this.inputSearchNum.length;
			this.inputSearchNum = this.inputSearchNum.substring(0, ValLenfth - 1);
		},
		directToBusRoute() {
			this.$route.push("/");
		},
		getBusRouteInfo(info) {
			let busNumber = info.RouteName.Zh_tw;
			this.$store.commit("searchBusNumber", busNumber);
			this.$router.push("/busNumber");
		},
	},
};
</script>

<style scoped>
/* scroller */
.listSection::-webkit-scrollbar {
	width: 3px;
}
.listSection::-webkit-scrollbar-track {
	background-color: #fff;
}
.listSection::-webkit-scrollbar-thumb {
	background-color: #d5d5d5;

	border-radius: 50px;
}

/* img  */
img {
	width: 100%;
	height: 100%;
}
hr {
	background-color: #e7e7e7;
	margin-bottom: 10px;
	height: 1px;
	border: none;
	margin-top: 20px;
}
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

/* user searching css */
.searchSection {
	width: 100%;
	display: flex;
}
/* search */
.searchControl {
	flex: 1;
	box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.15);
	height: 85vh;
	padding: 21px 22px 0px 21px;
	position: relative;
}
/* search_bar */
.search_bar {
	width: 100%;
	height: 36px;
	position: relative;
}
.inputBar {
	width: 100%;
	height: 100%;
	background: #d5d5d5;
	border-radius: 10px;
	border: none;
	font-size: 12px;
	color: black;
	padding: 12px 0px 10px 15px;
}

.isdelete {
	width: 17px;
	height: 17px;
	position: absolute;
	right: 3%;
	top: 27%;
}

.listSection {
	width: 100%;
	height: 50vh;
	overflow: auto;
	margin-top: 20px;
	padding: 12px;
}
/* search_lists */
.search_lists {
	margin-top: 30px;
	position: relative;
}

/* bus_Number */
.list {
	display: flex;
	justify-content: space-between;
}
.bus_Number {
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
}
.islike {
	margin-right: 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}
.forward {
	margin-top: 3px;
	font-size: 14px;
	font-weight: normal;
	color: #888888;
}
.listCity {
	font-size: 14px;
	color: #888888;
}
.like {
	width: 21px;
	height: 21px;
}
/* searchTab */
.searchTab {
	width: 100%;
	height: 16em;
	position: absolute;
	left: 0px;
	bottom: 0px;
	background-color: #f5f6f6;
}
.allTab {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.col1,
.col2,
.col3,
.col4 {
	display: flex;
}

.btn1,
.btn2,
.btn3,
.btn4,
.btn5,
.btn6,
.btn7,
.btn8,
.btn9,
.btn10,
.btn11,
.btn12 {
	width: 87px;
	height: 39px;
	display: flex;
	justify-content: center;
	align-items: center;

	margin: 12px 12px 5px 12px;
	border-radius: 10px;
}
.btn10 {
	background-color: #283d43;
}
button {
	width: 100%;
	height: 100%;
	background: #d5d5d5;
	border: none;
	border-radius: 10px;
}

#map {
	flex: 3.5;
}

/* loading */
.active {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: gray;
	z-index: 1000;
	top: 0px;
	opacity: 0.6;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	color: #fff;
}
</style>
