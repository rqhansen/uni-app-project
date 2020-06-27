<template>
	<view class="container home">
		
		<!-- 轮播 -->
		<swiper class="swiper" 
			:indicator-dots="indicatorDots" 
			:autoplay="autoplay" 
			:interval="interval" 
			:duration="duration"
			:circular="circular"
			indicator-active-color="#FFA500">
			<swiper-item v-for="(item,idx) of foodPics" :key="idx">
				<view class="swiper-item uni-bg-red">
					<image class="food-item" :src="`../../static/image/${item.name}`" mode="heightFixed"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 轮播结束 -->
		
		<!-- 店铺信息 -->
		<view class="store-info-wrap">
			<view class="store-name"><text>商水县金记胡辣汤</text></view>
			<view class="store-detail flex">
				<view class="detail-lf flex flex-direction-column flex-justify-center" @click="openLocation">
					<view class="flex"><uni-icons class="uni-icon" type="shop" size="16" color="#999"></uni-icons>营业时间：<text>05:00-11:00</text></view>
					<view class="flex addr"><uni-icons class="uni-icon" type="location" size="16" color="#999"></uni-icons>新城路北段路西金记胡辣汤</view>
				</view>
				<view class="divider-bg divider-y"></view>
				<view class="detail-rt flex flex-direction-column flex-align-center" @click="callPhone">
					<view><uni-icons type="phone-filled" size="18" color="#999"></uni-icons></view>
					<view>电话</view>
				</view>
			</view>
			
		</view>
		<!-- 店铺信息结束 -->
		
		<!-- 导航菜单 -->
		<view class="divider-bg divider-x"></view>
		<view class="menu-list flex">
			<view class="menu-item">
				<view class="menu-content flex flex-direction-column flex-justify-center flex-align-center"
					@click="goOrder">
					<view class="iconfont icondiancan"></view>
					<view class="diancan-text">点餐</view>
				</view>
			</view>
		</view>
		<view class="divider-wrap">
			<view class="divider-bg divider-x"></view>
		</view>
		<!-- 导航菜单结束 -->
		
		<!-- 门店照片 -->
		<view class="store-photo-list-wrap">
			<view class="store-photo-list">
				<view class="photo-title">门店照片</view>
				<scroll-view scroll-x class="photo-sroll-wrap">
					<view v-for="(photo,idx) of storePhotosUrl" :key="photo" class="photo-wrap">
						<image :src="photo" 
							mode="heightFixed" 
							:lazy-load="true" 
							class="photo-item"
							@click="previewBigImage(idx)">
							
						</image>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 门店照片结束 -->
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icons/uni-icons.vue';
	import { location, phoneNumber, foodPics, storePhotos } from '@/config/store_info.js';
	// 阻止重复打开位置
	let openw = false;
	let storePhotosUrl =  storePhotos.map(photo => `../../static/image/${photo}`)
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3500,
				duration: 600,
				circular: true,
				foodPics,
				storePhotosUrl
			}
		},
		components: { uniIcon },
		methods: {
			openLocation() {
				if (openw) {
					return;
				}
				openw = true;
				uni.openLocation({
				    latitude: location.latitude,
				    longitude: location.longitude,
					name: '金记胡辣汤',
					address: '新城路北段路西',
				    success: function () {
				        console.log('success');
				    },
					complete() {
						openw = false;
					},
					fail() {
						console.log('fail');
					}
				});
			},
			
			callPhone() {
				if (openw) {
					return;
				}
				openw = true;
				uni.makePhoneCall({
					phoneNumber: '18939600055',
					success() {
						console.log('success');
					},
					complete() {
						openw = false;
						console.log('complete');
					},
					fail() {
						console.log('fail');
					}
				})
			},
			
			// 查看门店大图
			previewBigImage(idx) {
				if (openw) {
					return;
				}
				openw = true;
				uni.previewImage({
					current: idx,
					urls: this.storePhotosUrl,
					complete() {
						openw = false;
					},
					fail(error) {
						console.log(error);
						uni.showToast({
							mask: true,
							title: '图片加载失败, 请稍后重试'
						})
					}
				})
			},
			
			// 去点餐
			goOrder() {
				uni.navigateTo({
					url: '/pages/menu/menu',
					animationType: 'slide-in-right',
					success() {
						
					},
					fail() {
						
					},
					complete() {
						
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container.home {
		.swiper {
			height: 360rpx;
			.food-item {
				width: 100%;
				height: 360rpx;
			}
		}
		.store-info-wrap {
			margin-bottom: 20rpx;
			.store-name {
				text-align: center;
				font-size: 18px;
				padding: 25rpx 0 30rpx;
			}
			.store-detail {
				color: $rq-text-color-gray;
				font-size: $uni-font-size-sm;
			}
			.detail-lf {
				flex: 1;
				padding-left: 44rpx;
			}
			.detail-rt {
				width: 140rpx;
			}
			.uni-icon {
				margin-right: 25rpx;
			}
			.addr {
				margin-top: 8rpx;
			}
		}
		.menu-list {
			.menu-item {
				width: 25%;
			}
			.menu-content {
				height: 160rpx;
			}
			.icondiancan {
				color: green;
				font-size: 74rpx;
			}
		}
		.divider-wrap {
			padding: 0 20rpx;
		}
		.store-photo-list-wrap {
			.store-photo-list {
				padding-left: 48rpx;
				.photo-title {
					padding: 30rpx 0 20rpx;
				}
				.photo-sroll-wrap {
					 white-space: nowrap;
					.photo-wrap {
						display: inline-block;
						width: 180rpx;
						height: 180rpx;
						margin-right: 20rpx;
					}
					.photo-item {
						width: 100%;
						height: 100%;
						will-change: transform;
					}
				}

			}
		}
	}
</style>
