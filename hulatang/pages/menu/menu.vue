<template>
	<view class="container menu">
		<!-- 搜索框 -->
		<view class="menu-search-wrap">
			<m-search
				placeholder="输入菜品名称"
				button="none"
				radius="4"
				:value="inputVal"
				@confirm="search"/>
		</view>
		<!-- 搜索框结束 -->
		
		<!-- 跑马灯 -->
		<view class="marque">
			<uni-notice-bar showIcon="true" 
				scrollable="true" 
				:speed="60"
				backgroundColor="#fff"
				:text="marqueContent"/>
		</view>
		<!-- 跑马灯结束 -->
		
		<view class="divider-bg"></view>
		
		<!-- 菜单 -->
		<view class="menu-cate-wrap flex">
			<!-- 左侧 -->
			<view class="cate-list">
				<scroll-view class="scroll-view" scroll-y="true">
					<view v-for="(item,idx) of menus" :key="item.id"
						class="cate-item"
						:class="{'active': cateIndex===idx}"
						@click="switchCate(idx)">
						{{item.title}}
					</view>
				</scroll-view>
			</view>
			<!-- 左侧结束 -->
			
			<!-- 右侧 -->
			<view class="detail-list flex-item">
				<view class="list-title flex flex-align-center">
					<view class="vertical-line"></view>
					<text>{{menus[cateIndex].title}}</text>
				</view>
				<view>
					<view class="list-item" v-for="item of menuDetailList" :key="item.id">
						<view class="flex">
							<image lazy-load="true" class="item-img" src="../../static/image/babaozhou.jpg" mode="heightFixed"></image>
							<view class="item-text flex flex-just-content-space-between flex-direction-column">
								<view class="flex flex-direction-column">
									<view class="">{{item.name}}</view>
									<view class="sell-count">月销{{item.monthSell}}</view>
								</view>
								<view class="flex price-wrap">
									<view class="price">
										<text>&yen;</text>
										<text style="font-size: 40rpx;">{{item.price}}</text></view>
									<view class="old-price">
										<text>&yen;</text>
										<text>{{item.oldPrice}}</text></view>
								</view>
							</view>
						</view>
						<view class="divider-bg divider-x"></view>
						<view class="add">
							<text class="iconfont icontianjia"></text>
						</view>
					</view>
				</view>
			</view>
			<!-- 右侧结束 -->
		</view>
		<!-- 菜单结束 -->
		
		<!-- 结算部分-->
			<view class="shopping-car-staus-wrap">
				<view class="shopping-car-status flex">
					<view class="lf">
						<view class="shopping-car-wrap flex flex-align-center">
							<view class="shopping-car-circle">
								<view class="iconfont icongwc"></view>
							</view>
							<view class="dot-wrap">
								<view class="dot ellipsis flex flex-align-center flex-justify-center">
									<text>30</text>
								</view>
							</view>
							<view class="total-money">
								&yen;
								<text class="m-text">10</text>
							</view>
						</view>
					</view>
					<view class="rt">
						<view class="order-ok">选好了</view>
					</view>
				</view>

			</view>
		<!-- 结算部分结束 -->
	</view>
</template>

<script>
	import mSearch from '@/components/mehaotian-search/components/mehaotian-search-revision/mehaotian-search-revision.vue';
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';
	import { marqueContent,menus } from '@/config/store_info.js';
	export default {
		components: {
			mSearch,
			uniNoticeBar
		},
		data() {
			return {
				inputVal: '',
				marqueContent,
				menus,
				cateIndex: 0,
				menuDetailList: []
			}
		},
		methods: {
			search(val) {
				
			},
			switchDetailMenu(cateIndex) {
				this.menuDetailList = menus[cateIndex].subMenus;
			},
			switchCate(cateIndex) {
				this.cateIndex = cateIndex;
				this.switchDetailMenu(cateIndex);
			}
		},
		created() {
			this.switchDetailMenu(this.cateIndex);
		}
	}
</script>

<style lang="scss" scoped>
	/*uni-page-body*/
	page {
		height: 100%;
	}
	.container.menu {
		position: relative;
		height: 100%;
		overflow: hidden;
		.menu-search-wrap {
			padding: 0 16rpx;
				/deep/ .content {
					height: 70rpx;
					background: rgba($color: $rq-bg-color-gray, $alpha: .1);
				}
				/deep/ .uni-input-placeholder {
					font-size: $rq-font-size-base;
				}
				/deep/ .uni-input-input {
					height: 50%;
					font-size: $rq-font-size-base;
				}
				/deep/ .icon-serach {
					font-size: $rq-font-size-large;
				}
		}
		.marque {
			/deep/ .uni-noticebar {
				margin-bottom: 0;
			}
			/deep/ .uni-noticebar__content-text {
				font-size: $rq-font-size-sm;
			}
			+ .divider-bg {
				height: 20rpx;
			}
		}

		.menu-cate-wrap {
			height: calc(100% - 90rpx - 30px - 80px);
			.cate-list {
				width: 180rpx;
				height: 100%;
				background: rgba($color: $rq-bg-color-gray, $alpha: .1);
			}
			.scroll-view {
				height: 100%;
			}
			.cate-item {
				padding: 26rpx 10rpx;
				text-align: center;
				overflow: hidden;
				&.active {
					background: #fff;
				}
			}
			.detail-list {
				flex: 1;
				padding: 0 20rpx;
				.list-title {
					height: 54rpx;
					margin-bottom: 20rpx;
				}
				.vertical-line {
					width: 2rpx;
					height: 40rpx;
					margin-right: 14rpx;
					background: red;
				}
				.list-item {
					position: relative;
					padding-top: 16rpx;
					.item-img {
						width: 200rpx;
						height: 200rpx;
						margin-right: 20rpx;
						border-radius: 8rpx;
					}
					.item-text {
						flex: 1;
						height: 200rpx;
					}
					.sell-count {
						margin-top: 20rpx;
						font-size: $rq-font-size-sm;
						color: #333;
					}
					.price-wrap {
						color: $rq-text-color-red;
					}
					.price {
						margin-right: 4rpx;
					}
					.old-price {
						text-decoration: line-through;
						color: $rq-bg-color-gray;
						font-size: $rq-font-size-sm;
					}
					.divider-bg {
						margin-top: 16rpx;
					}
					.add {
						position: absolute;
						bottom: 0;
						right: 30rpx;
						color: $rq-bg-color-gray;
						.icontianjia {
							font-size: 50rpx;
						}
					}
				}
			}
		}
		.shopping-car-staus-wrap {
			position: absolute;
			left:0;
			bottom: 0;
			width: 100%;
			.shopping-car-status {
				width: 100%;
				height: 50px;
				color: #fff;
			}
			.lf {
				flex: 3;
				background: rgba(0,0,0,.7);
			}
			.rt {
				flex: 1;
				background-color: $rq-text-color-red;
			}
			.shopping-car-wrap{
				position: absolute;
				left: 20rpx;
				top: -40rpx;
			}
			.shopping-car-circle {
				width: 100rpx;
				height: 100rpx;
				line-height: 100rpx;
				border-radius: 100%;
				background: #fff;
				border: 8rpx solid rgba(0,0,0,.7);
				text-align: center;
			}
			.dot-wrap {
				position: absolute;
				top: -4rpx;
				left: 72rpx;
			}
			.dot {
				width: 38rpx;
				height: 38rpx;
				border-radius: 100%;
				background: $rq-text-color-red;
			}
			.total-money {
				margin-top: 60rpx;
				font-size: $rq-font-size-large;
				font-weight: 500;
			}
			.m-text {
				margin-left: 6rpx;
				font-size: 40rpx;
			}
			.icongwc {
				font-size: 52rpx;
				color: $rq-text-color-red;
			}
			.order-ok {
				font-size: 34rpx;
				text-align: center;
				line-height: 50px;
			}
		}
	}
</style>
