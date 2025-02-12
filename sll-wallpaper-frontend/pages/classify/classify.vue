<template>
<view class="classify pageBg">
	<custom-nav-bar title="分类"></custom-nav-bar>
	<view class="box">
		<theme-picture v-for="item in classifyPic" :key="item._id" :item="item"></theme-picture>
	</view>
</view>
</template>

<script setup>
import {ref} from 'vue';
import {apiGetClassifyPic} from '../../api/apis';

const classifyPic = ref([])

const getClassifyPic = async()=>{
	let res = await apiGetClassifyPic({pageSize:15})
	classifyPic.value = res.data
}

getClassifyPic()
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
