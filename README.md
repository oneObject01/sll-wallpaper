# sll-wallpaper

## 前端部分

### 外观

#### 0.公共设置

在根目录下创建common文件，在common文件中创建style文件，在里面存放公共样式

1）公共样式

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



#### 1.主页布局

1）banner

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

2）公告notice

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

