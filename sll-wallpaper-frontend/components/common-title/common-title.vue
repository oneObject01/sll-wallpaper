<template>
	<view class="common-title">
		<view class="title">
			<slot name="title"></slot>
		</view>
		
		<view class="custom">
			<slot name="custom"></slot>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.common-title{
	width: 690rpx;
	margin: 0 auto;
	margin-bottom: 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.title{
		font-size: 35rpx;
	}
}
</style>