<template>
	<view class="themePicture">
		<navigator class="box" :url="'/pages/classlist/classlist?id='+item._id" v-if="!isMore">
			<image class="pic" :src="item.picurl" mode="aspectFill"></image>
			<view class="head">
				{{formatTimeDifference(item.updateTime)}}更新
			</view>
			<view class="mask">{{item.name}}</view>
		</navigator>
		
		<navigator class="box more" url="/pages/classify/classify" v-if="isMore" open-type="reLaunch">
			<image class="pic" src="/common/images/more.jpg" mode="aspectFill"></image>
			<view class="mask">
				<view class="title">
					更多
				</view>
				<uni-icons type="more-filled" size="30"></uni-icons>
			</view>

		</navigator>
	</view>
</template>

<script setup>
import {formatTimeDifference} from '@/common/scripts/dateFormat.js'

const props = defineProps({
	isMore:{
		type:Boolean,
		default:false
	},
	item:{
		type:Object,
		default:()=>{
			return {
				name:"默认分类",
				picurl:"/common/images/classify1.jpg",
				updateTime:Date.now() - 1000*60*60*24*5,
			}
		}
	}
})
</script>

<style lang="scss" scoped>
.themePicture{
	.box{
		height: 340rpx;
		position: relative;
		border-radius: 10rpx;
		overflow: hidden;
		.pic{
			width: 100%;
			height: 100%;
		
		}
		.head{
			position: absolute;
			padding: 7rpx 10rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 22rpx;
			text-align: center;
			color: #fff;
			background: rgba(250,129,90,0.7);
			transform: scale(0.8);
			border-radius: 0 0 20rpx 0;
			transform-origin: left top;
			top: 0;
			left: 0;
		}
		.mask{
			position: absolute;
			height: 70rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 25rpx;
			color: white;
			background-color: rgba(0,0,0,0.2);
			backdrop-filter: blur(20rpx);
			width: 100%;
			bottom: 0;
			right: 0;
		}
	}
	.box.more{
		.mask{
			width: 100%;
			height: 100%;
			flex-direction: column;
		}
		.title{
			font-size: 28rpx;
		}
	}
}
</style>