<template>
	<div class="nav">
		<div class="logo">
			<img class="logoPNG" src="@/assets/logo.png" alt="" />
		</div>
		<div class="links">
			<ul>
				<li>附近站牌</li>

				<li>路線規劃</li>
				<li>站點查詢</li>
				<li>我的收藏</li>
			</ul>
		</div>
		<div class="swichLang">
			<div class="langPNG">
				<img src="@/assets/iconoir_language.png" alt="" />
			</div>
			<div class="chinese">中文</div>
			<div class="sp">|</div>
			<div class="english">English</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
/* global */
img {
	width: 100%;
	height: 100%;
}

.nav {
	width: 100%;
	height: 78.5px;
	display: flex;
	align-items: center;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
}

/* logo */
.logo {
	width: 168px;
	height: 42px;
	flex: 1;
	margin-left: 10em;
	/* margin-left: 66px; */
}
.logoPNG {
	width: 168px;
	height: 42px;
}

/* links */
.links {
	display: flex;
	justify-content: center;
	/* margin-left: 340px; */
	flex: 3;
}
ul {
	list-style: none;
	display: flex;
}
li {
	margin: 0px 54px 0px 0px;
}
/* swichLang */
.swichLang {
	/* margin-left: 286px; */
	flex: 1;
	display: flex;
}
.swichLang > div {
	margin-right: 13px;
}

.langPNG {
	width: 24px;
	height: 24px;
}
</style>
