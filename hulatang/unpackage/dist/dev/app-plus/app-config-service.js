
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/menu/menu","pages/order/order","pages/mine/mine"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#7A7E83","selectedColor":"#de8c17","borderStyle":"black","backgroundColor":"#FFFFFF","fontSize":"12px","list":[{"pagePath":"pages/index/index","iconPath":"static/image/home.png","selectedIconPath":"static/image/home_s.png","text":"首页"},{"pagePath":"pages/order/order","iconPath":"static/image/order.png","selectedIconPath":"static/image/order_s.png","text":"订单"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/image/mine.png","selectedIconPath":"static/image/mine_s.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"hulatang","compilerVersion":"2.7.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商水胡辣汤","enablePullDownRefresh":true,"pullToRefresh":{"support":true,"color":"#FFA500"}}},{"path":"/pages/menu/menu","meta":{},"window":{"navigationBarTitleText":"堂吃菜品"}},{"path":"/pages/order/order","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"订单"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});