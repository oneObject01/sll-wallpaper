<template>
<view class="classify pageBg">
	<view class="box">
		<theme-picture v-for="item in 15"></theme-picture>
	</view>
</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.classify{
	padding: 30rpx;
	.box{
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap:15rpx;
	}
}
</style>
