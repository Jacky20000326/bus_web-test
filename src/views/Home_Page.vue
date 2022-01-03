<template>
	<div class="home">
		<Nav></Nav>
		<div class="bg">
			<img src="@/assets/bg.png" alt="" />
		</div>
		<div class="citySelect">
			<div class="citys">
				<div
					class="block"
					v-for="(city, index) in citys"
					:key="index"
					@click="selectCity(city)"
				>
					<div class="busPng">
						<img :src="city.cityPng" alt="" />
					</div>
					<div class="cityName" :style="{ color: city.activeColor }">
						{{ city.chName }}
					</div>
					<div class="cityNameEn" :style="{ color: city.activeColor }">
						{{ city.enName }}
					</div>
				</div>
			</div>
		</div>

		<Footer></Footer>
	</div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
	name: "Home",
	components: {
		Nav,
		Footer,
	},
	data() {
		return {
			citys: [
				{
					cityPng: require("@/assets/Taipei.png"),
					chName: "台北市 / 新北市",
					enName: "Taipei / New Taipei",
					activeColor: "#283C43",
				},
				{
					cityPng: require("@/assets/Taoyuan_bus.png"),
					chName: "桃園市",
					enName: "Taoyuan",
					activeColor: "#3591C5",
				},
				{
					cityPng: require("@/assets/Taichung_bus.png"),
					chName: "台中市",
					enName: "Taichung",
					activeColor: "#D08181",
				},
				{
					cityPng: require("@/assets/Tainan_bus.png"),
					chName: "台南市",
					enName: "Tainan",
					activeColor: "#7FC0C5",
				},
				{
					cityPng: require("@/assets/Kaohsiung_bus.png"),
					chName: "高雄市",
					enName: "Kaohsiung",
					activeColor: "#5E9BAE",
				},
				{
					cityPng: require("@/assets/other_bus.png"),
					chName: "其他地區",
					enName: "Other City",
					activeColor: "#52797C",
				},
			],
		};
	},
	methods: {
		selectCity(city) {
			let cityEnName = city.enName;
			// 存入localStorage
			localStorage.setItem("cityEnName", cityEnName);
			this.$store.commit("userSelectCity");
			this.$store.dispatch("getCityData");

			// 跳轉至search分頁
			this.$router.push("/search");
		},
	},
};
</script>

<style scoped>
img {
	width: 100%;
	height: 100%;
}
.bg {
	width: 100%;
	height: 50%;
}

/* city */
.citySelect {
	width: 100%;
	height: 218px;
	padding: 22px 20px 22px 20px;
	background-color: #f5f6f6;
}
.citys {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	/* 空間配置平均 */
	align-items: center;
}
.block {
	width: 217px;
	height: 174px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: #ffffff;
	box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
}
.busPng {
	width: 51px;
	height: 51px;
}
.cityName {
	margin-top: 16px;
}
.cityNameEn {
	margin-top: 6px;
}
</style>
