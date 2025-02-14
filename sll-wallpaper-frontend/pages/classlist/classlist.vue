<template>
	<view class="classlist">
		<view class="boxs">
			<navigator url="/pages/preview/preview" class="box" v-for="item in wallListPic">
					<image :src="item.smallPicurl" mode="aspectFill" :ket="item._id"></image>
			</navigator>
		</view>
		<view class="load">
			<uni-load-more :status="status" :contentText="contentText"/>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {onLoad,onReachBottom} from "@dcloudio/uni-app"
import { apiGetWallListPic } from '../../api/apis';
const contentText = {contentdown: "上拉显示更多",contentrefresh: "正在加载...",contentnomore: "没有更多图片了"}
const wallListPic = ref([])
let classId = ref({})
let noMore = false
let status = ref('loading')

onLoad(e=>{
	console.log(e)
	let {id} = e
	classId.value.classid = id
	classId.value.pageSize = 12
	classId.value.pageNum = 1
	console.log(classId.value)
	getWallListPic()
})

onReachBottom( async ()=>{
	if(noMore)return
	classId.value.pageNum++
	const res = await apiGetWallListPic(classId.value)
	wallListPic.value = [...wallListPic.value,...res.data]
	if(res.data.length<12){
		noMore = true
		status.value = 'noMore'
	}
	console.log("请求中")
})

const getWallListPic = async ()=>{
	const res = await apiGetWallListPic(classId.value)
	wallListPic.value = res.data
	console.log(res)
}


</script>

<style lang="scss" scoped>
.classlist{
	.boxs{
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
	.load{
		padding: 30rpx 0;
	}
}
</style>
