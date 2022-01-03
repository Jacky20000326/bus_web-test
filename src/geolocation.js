export const geolocation = (fn) => {
	if ("geolocation" in navigator) {
		/* geolocation is available */
		console.log("geolocation is available");
		navigator.geolocation.getCurrentPosition((position) => {
			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;
			try {
				console.log("取得定位");
				fn({ latitude, longitude });
			} catch {
				console.log("err");
			}
		});

		// navigator.geolocation 為物件getCurrentPosition是裡面的方法
	} else {
		/* geolocation IS NOT available */
		console.log("geolocation IS NOT available");
	}
};

// 取得當前位置
