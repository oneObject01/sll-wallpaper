<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)" 
			indicator-active-color="#fff" autoplay>
				<swiper-item>
					<image src="../../common/images/banner1.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner2.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner3.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item v-for="item in 4">
						<navigator url="/pages/notice/detail">
							文字内容文字内容文字内容文字内容文字内容文字内容文字内容
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16"></uni-icons>
			</view>
		</view>
		
		<view class="select">
			<common-title>
				<template #title>
					每日推荐
				</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="20"></uni-icons>
						<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x >
					<view class="box" v-for="item in 8">
						<image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="theme">
			<common-title>
				<template #title>
					主题精选
				</template>
				<template #custom>
					<view class="more">
						<navigator url="/pages/classify/classify" open-type="reLaunch">More+</navigator>
					</view>
				</template>
			</common-title>
			<view class="content" >
				<view class="box" v-for="item in 8">
					<theme-picture></theme-picture>
				</view>
				<theme-picture :isMore="true"></theme-picture>
			</view>
		</view>
		
	</view>
</template>

<script setup>


const goPreview = ()=>{
	uni.navigateTo({
		url:"/pages/preview/preview"
	})
}

</script>

<style lang="scss" scoped>
.homeLayout{
	.banner{
		width: 750rpx;
		padding:30rpx 0;
		swiper{
			width: 750rpx;
			height: 340rpx;
			&-item{
				width: 100%;
				height: 100%;
				padding:0 30rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
		}
	}
	
	.notice{
		width: 690rpx;
		height: 80rpx;
		line-height: 80rpx;
		background: #f9f9f9;
		margin: 0 auto;
		border-radius: 80rpx;
		display: flex;
		.left{
			width: 140rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			:deep(){
				.uni-icons{
					color:$brand-theme-color !important;
				}
			}			
			.text{
				color:$brand-theme-color;
				font-weight: 600;
				font-size: 28rpx;
			}
		}
		.center{
			flex:1;
			swiper{
				height: 100%;
				&-item{
					height: 100%;
					font-size: 30rpx;
					color:#666;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
		.right{
			width: 70rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			:deep(){
				.uni-icons{
					color: $text-font-color-2 !important;
				}
			}
		}
	}
	
	.select{
		padding:50rpx 0;
		.date{
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 30rpx;
			color:$brand-theme-color;
			:deep(){
				.uni-icons{
					color: $brand-theme-color !important;
				}
			}
		}
		.content{
			width: 720rpx;
			margin-left: 30rpx;
			scroll-view{
				white-space: nowrap;
				.box{
					width: 200rpx;
					height: 430rpx;
					display: inline-block;
					padding-right: 15rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
				.box:last-child{
					padding-right: 30rpx;
				}
			}
		}
	}
	
	.theme{
		.more{
			color:$text-font-color-3;
			font-size: 30rpx;
		}
		.content{
			width: 690rpx;
			margin: 0 auto;
			display: grid;
			gap:15rpx;
			grid-template-columns: repeat(3,1fr);
		}
	}
}
</style>
