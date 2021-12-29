<template>
	<view class="content">
		<scroll-view scroll-x="true" class="con" show-scrollbar="false" @scrolltoupper="upper">
			<view class="box">
				<view v-for="(item, index) in arr" :key="index">{{item}}</view>
			</view>
		</scroll-view>
		<swiper class="banner" indicator-dots indicator-color="#ffffff" indicator-active-color="#333333"
			active-class="actives" autoplay circular>
			<swiper-item v-for="(item, index) in arr" :key="index">{{index}}</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr: [
					1, 2, 3, 4, 5, 6, 7
				]
			}
		},
		onLoad() {

		},
		methods: {
			upper() {
				console.log('滚动到左边')
			}
		}
	}
</script>

<style>
	.box {
		display: flex;
	}

	.box view {
		width: 100px;
		height: 100px;
		background-color: #007AFF;
		flex-shrink: 0;
		margin: 0 20px;
	}

	.banner swiper-item {
		background-color: #007AFF;
		display: flex;
		color: #fff;
		font-size: 30px;
		justify-content: center;
		align-items: center;
	}

	.actives {
		color: red;
	}
</style>
