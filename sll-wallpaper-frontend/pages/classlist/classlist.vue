<template>
	<view class="classlist">
		<view class="mask">
			<view class="goBack" @click="goBack" :style="{top:getStatusBarHeight()+'px'}">
				<uni-icons type="back" color="#fff" size="20"></uni-icons>
			</view>
		</view>
		<view class="boxs">
			<navigator :url="'/pages/preview/preview?id='+item._id+'&key='+storageKey" class="box" v-for="item in wallListPic" :key="item._id">
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
import {onLoad,onReachBottom,onUnload} from "@dcloudio/uni-app"
import { apiGetWallListPic } from '../../api/apis';
import {getStatusBarHeight} from "@/utils/system.js"
const contentText = {contentdown: "上拉显示更多",contentrefresh: "正在加载...",contentnomore: "没有更多图片了"}
const wallListPic = ref([])
let storageKey = null
let classId = ref({})
let noMore = false
let status = ref('loading')

onLoad(e=>{
	//获取url参数id的值
	let {id} = e
	storageKey = id
	//给请求data参数赋值
	classId.value.classid = id
	classId.value.pageSize = 12
	classId.value.pageNum = 1
	getWallListPic()
})

onUnload(()=>{
	try {
		uni.removeStorageSync(storageKey);
	} catch (e) {
		console.log(e)
	}
})

const goBack = () => {
	uni.navigateBack()
}

onReachBottom( async ()=>{
	//触底有其他图片则进行网络请求，没有则不执行
	if(noMore)return
	classId.value.pageNum++
	getWallListPic()
})

const getWallListPic = async ()=>{
	//获取响应数据
	const res = await apiGetWallListPic(classId.value)
	wallListPic.value = [...wallListPic.value,...res.data]
	//判断服务器是否还有更多图片
	if(res.data.length<12){
		noMore = true
		status.value = 'noMore'
	}
	//将数据本地缓存
	try {
	  uni.setStorageSync(storageKey, wallListPic.value);
	} catch (err) {
	  console.error('存储失败', err);
	}
}


</script>

<style lang="scss" scoped>
.classlist{
	position: relative;
	width: 100vw;
	height: 100vh;
	.mask{
		.goBack {
		    width: 76rpx;
		    height: 76rpx;
			padding: 20rpx;
		    background: rgba(0, 0, 0, 0.5);
		    left: 30rpx;
		    top: 30rpx; /* 增加顶部间距 */
		    margin-left: 0;
		    border-radius: 50%;
		    backdrop-filter: blur(10rpx);
		    border: 1rpx solid rgba(255, 255, 255, 0.3);
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    position: fixed; /* 使用 fixed 定位确保相对于屏幕 */
		}
	}
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
