<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
@import './static/css/iconfont.css';

/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */

/*关闭scrollview导航条*/
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}

.container {
	font-size: $rq-font-size-base;
	color: $rq-color-primary;
}

/*分割线*/
.divider-x {
	height: 2rpx;
	transform: scaleY(.5);
}

.divider-y {
	width: 2rpx;
	transform: scaleX(.5);
}

.divider-bg {
	background: rgba($color: $rq-bg-color-gray, $alpha: .1);
}
/*分割线结束*/

.flex {
	display: flex;
}

.flex-item {
	flex: 1;
}

.flex-direction-column {
	flex-direction: column;
}

.flex-align-center {
	align-items: center;
}

.flex-justify-center {
	justify-content: center;
}

.flex-align-space-between {
	align-items: space-between;
}

.flex-just-content-space-between {
	justify-content: space-between;
}

.ellipsis {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
