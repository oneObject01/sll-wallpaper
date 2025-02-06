<template>
	<view class="userInfo pageBg">
		<view class="userHead">
			<image src="/static/logo.png" mode="aspectFill"></image>
			<view class="ip">
				192.0.0.0
			</view>
			<view class="address">
				来自：成都
			</view>
		</view>
		
		<view class="list">
			<view class="row" v-for="item in list1" :key="item.key">
				<view class="left">
					<uni-icons :type="item.icon" size="20"></uni-icons>
					<view>{{item.title}}</view>
				</view>
				<view class="right">
					<view>{{item.number}}</view>
					<uni-icons type="right" size="20"></uni-icons>
				</view>
			</view>
		</view>
		
		<view class="list">
			<view class="row" v-for="item in list2" :key="item.key">
				<view class="left">
					<uni-icons :type="item.icon" size="20"></uni-icons>
					<view>{{item.title}}</view>
				</view>
				<view class="right">
					<uni-icons type="right" size="20"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
const list1 = [
	{key:101,icon:"download-filled",title:"我的下载",number:0},
	{key:102,icon:"star-filled",title:"我的评分",number:2},
	{key:102,icon:"chatboxes-filled",title:"联系客服"}
]

const list2 = [
	{key:201,icon:"notification-filled",title:"订阅更新"},
	{key:202,icon:"flag-filled",title:"常见问题"}
]
</script>

<style lang="scss" scoped>
.userInfo{
	width: 100%;
	.userHead{
		width: 100%;
		padding: 50rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		image{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			margin-bottom: 20rpx ;
		}
		.ip{
			font-size: 33rpx;
			color:$text-font-color-1;
			margin-bottom: 5rpx ;
		}
		.address{
			font-size: 27rpx;
			color:$text-font-color-2;
			margin-bottom: 5rpx ;
		}
	}
	.list{
		width: 690rpx;
		margin: 30rpx auto;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
		border-radius: 10rpx;
		border: 1rpx solid #eee;
		.row{
			padding: 0 30rpx;
			display: flex;
			justify-content: space-between;
			border-bottom: 1rpx solid #eee;
			height: 100rpx;
			.right{
				display:flex;
				align-items: center;
				justify-content: center;
				:deep(){
					.uni-icons{
						color: $text-font-color-2 !important;
					}
				}
				view{
					margin-left: 10rpx;
					font-size: 22rpx;
					color:$text-font-color-2;
				}
			}
			.left{
				display:flex;
				align-items: center;
				justify-content: center;
				:deep(){
					.uni-icons{
						color: $brand-theme-color !important;
					}
				}
				view{
					margin-left: 25rpx;
					font-size: 28rpx;
					color:$text-font-color-2;
				}
			}
		}
		.row:last-child{
			border: none;
		}
	}
}
</style>
