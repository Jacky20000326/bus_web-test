import axios from "axios";
import { createStore } from "vuex";
export default createStore({
	state: {
		city: "",
		cityDataArray: [],
		busRouteArray: [],
		searchBusNumberInput: "",
		loadingState: true,
		StopStatus: 1,
	},
	getters: {
		filterBusNum(state) {
			let filterResult = state.cityDataArray.data.filter((item) => {
				let busNum = item.RouteName.Zh_tw;
				return busNum.includes(state.searchBusNumberInput);
			});

			return filterResult;
		},
		lookForStopStatus(state) {
			let busRouteArrayLength = state.busRouteArray.data.length;
			if (state.StopStatus == 1) {
				let goArray = [];
				for (var i = 0; i < busRouteArrayLength; i += 2) {
					goArray.push(state.busRouteArray.data[i]);
				}
				console.log(goArray);
				return goArray;
			} else {
				let backArray = [];
				for (var o = 1; o < busRouteArrayLength; o += 2) {
					backArray.push(state.busRouteArray.data[o]);
				}

				return backArray;
			}
		},
	},
	mutations: {
		userSelectCity(state) {
			let getLocalStorageValue = localStorage.getItem("cityEnName");
			state.city = getLocalStorageValue;
		},
		searchBusNumber(state, payload) {
			state.searchBusNumberInput = payload;
		},
		switchStopStatus(state, payload) {
			state.StopStatus = payload;
		},
		// resetUserInput(state) {
		// 	state.searchBusNumberInput = "";
		// },
	},
	actions: {
		async getCityData({ state }) {
			let cityApi = `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${state.city}?%24format=JSON`;
			let cityData = await axios.get(cityApi, (res) => {
				return res.data;
			});
			state.cityDataArray = cityData;
			state.loadingState = false;

			// RouteName
			// DepartureStopNameZh
			// DestinationStopNameZh
			// City
		},
		async getBusRouteInfoApi({ state }) {
			let busRouteApi = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${state.city}/${state.searchBusNumberInput}?%24format=JSON`;
			let busRoute = await axios.get(busRouteApi, (res) => {
				return res.data;
			});
			console.log(busRoute);
			state.busRouteArray = busRoute;
		},
	},
	modules: {},
});
