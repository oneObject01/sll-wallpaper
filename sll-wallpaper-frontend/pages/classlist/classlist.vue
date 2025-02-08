<template>
	<view class="classlist">
		<navigator url="/pages/preview/preview" class="box" v-for="item in 15">
				<image src="/common/images/preview2.jpg" mode="aspectFill"></image>
		</navigator>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.classlist{
	width: 100%;
	padding: 5rpx;
	display: grid;
	grid-template-columns: repeat(3,1fr);
	gap: 5rpx;
	.box{
		width: 100%;
		height: 545rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
