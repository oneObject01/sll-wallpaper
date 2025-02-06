# sll-wallpaper

## 前端部分

### 外观

#### 0.公共设置

1）在根目录下创建common文件，在common文件中创建style文件，在里面存放公共样式

公共样式

在/common/style中创建公共样式文件common-style.scss

```scss
view,swiper,swiper-item{
	box-sizing: border-box;
}

.pageBg{
	background: 
	linear-gradient(to bottom,transparent,#fff 400rpx),
	linear-gradient(to right,#beecd8 20%,#F4E2D8);
	min-height: 80vh;
}
```

全局颜色

在/common/style中创建全局颜色文件base-style.scss来管理字体图标颜色，方便后续修改

```scss
$brand-theme-color:#28B389;      //品牌主体红色

$border-color:#e0e0e0;           //边框颜色
$border-color-light:#efefef;     //边框亮色

$text-font-color-1:#000;         //文字主色
$text-font-color-2:#676767;      //副标题颜色
$text-font-color-3:#a7a7a7;      //浅色
$text-font-color-4:#e4e4e4;      //更浅
```

需注意的是：h5中修改uni-icons的color需用!important覆盖行内样式，小程序中需要用:deep(){}穿透修改uni-icons子组件中的color

```scss
:deep(){
    .uni-icons{
        color:$brand-theme-color !important;
    }
}
```



2）创建components文件，文件夹名不能不同，存放组件，右键选择新建组件

#### 1.主页布局

##### 1）banner

设置三个轮播图方便后面引入api，图片不拉伸，宽高与swiper-item一致

```html
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
```

banner样式，注意swiper-item占100%宽，左右padding30rpx

```scss
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
```

##### 2）公告notice

flex左中右布局，左边icon和text，中间轮播图，右边icon

```html
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
            <uni-icons type="right" size="16" color="#333"></uni-icons>
        </view>
    </view>
```

左右设置固定宽度，中间设置flex:1

```scss
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
		}
	}
```

##### 3）每日推荐

创建组件公共标题组件common-title,左右布局，左边和设置标题，右边可自定义设置

```html
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
```

flex左右布局

```scss
.common-title{
	width: 690rpx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.title{
		font-size: 35rpx;
	}
}
```

日历日期

每日推荐内容

```html
    <view class="content">
        <scroll-view scroll-x >
            <view class="box" v-for="item in 8">
                <image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
            </view>
        </scroll-view>
    </view>
```

横向滚动，scroll-view设置不换行，box设成行内块，图片设成父元素大小，伪类选择器选择最后一个元素，设右边距为30rpx

```scss
    .content{
        width: 720rpx;
        margin-left: 30rpx;
        margin-top: 30rpx;
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
```

##### 4）主题

由公共标题和内容组成

```html
<view class="theme">
    <common-title>
        <template #title>
            主题精选
        </template>
        <template #custom>
            <view class="more">
                <navigator url="#">More+</navigator>
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
```

将每个主题选项封装成组件theme-picture，前8个显示不同主题，最后一个跳转到多种主题页面

```html
<view class="themePicture">
	<navigator class="box" url="" v-if="!isMore">
		<image class="pic" src="/common/images/classify1.jpg" mode="aspectFill"></image>
		<view class="head">20天前更新</view>
		<view class="mask">明星美女</view>
	</navigator>
	
	<navigator class="box more" url="" v-if="isMore">
		<image class="pic" src="/common/images/more.jpg" mode="aspectFill"></image>
		<view class="mask">
			<view class="title">
				更多
			</view>
			<uni-icons type="more-filled" size="30"></uni-icons>
		</view>
	</navigator>
</view>
```

样式

```scss
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
```

是否显示的是更多，通过父组件传递

```javascript
const props = defineProps({
	isMore:{
		type:Boolean,
		default:false
	}
})
```

#### 2.tabBar配置

```json
"tabBar": {
	"color": "#676767",
	"selectedColor": "#28B389",
	"list": [
		{
			"text": "主页",
			"iconPath": "/static/tabBar/home.png",
			"selectedIconPath": "/static/tabBar/home-h.png",
			"pagePath": "pages/index/index"
		},
		{
			"text": "分类",
			"iconPath": "/static/tabBar/classify.png",
			"selectedIconPath": "/static/tabBar/classify-h.png",
			"pagePath": "pages/classify/classify"
		},
		{
			"text": "用户",
			"iconPath": "/static/tabBar/user.png",
			"selectedIconPath": "/static/tabBar/user-h.png",
			"pagePath": "pages/userInfo/userInfo"
		}
	]
}
```

#### 3.分类页面

将theme-picture组件网格布局

```html
<view class="classify">
	<view class="box">
		<theme-picture v-for="item in 15"></theme-picture>
	</view>
</view>
```

```scss
.classify{
	padding: 30rpx;
	.box{
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap:15rpx;
	}
}
```

#### 4.用户页面

#### 5.图片列表页面

