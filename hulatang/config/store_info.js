
// 店铺经纬度

const storeLocation = {
	latitude : 33.547300,
	longitude : 114.610910 
}

const storePhoneNumber = '18939600055'

// 首页轮播图
const foodPics = [
		{
			name: 'hulatang.jpg',
			id: 1
		},
		{
			name: 'babaozhou.jpg',
			id: 2
		},
		{
			name: 'xiaomizhou.jpg',
			id: 3
		},
		{
			name: 'baozi.jpg',
			id: 4
		},
		{
			name: 'shuijianbao.jpg',
			id: 5
		},
		{
			name: 'qiancengbing.jpg',
			id: 6
		},
		{
			name: 'youmotou.jpg',
			id: 7
		},
	]

// 门店照片
const storePhotos = [
	'photo_one.jpg',
	'photo_two.jpg',
	'photo_three.jpg',
	'photo_four.jpg',
	'photo_five.jpg'
]

// 跑马灯内容
const marqueContent = '热烈祝贺商水金记胡辣汤开业,请放心点餐,营业时间: 05:00-10:00'

// 菜单
const menus = [
	{	
		id: 1,
		title: '招牌胡辣汤',
		subMenus: [
			{
				id: 1000,
				name: '胡辣汤',
				price: 5,
				oldPrice: 5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	},
	{
		id: 2,
		title: '汤粥',
		subMenus: [
			{
				id: 2000,
				name: '八宝粥',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 2001,
				name: '小米粥',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 2002,
				name: '豆浆',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 2003,
				name: '豆腐脑',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	},
	{
		id: 3,
		title: '包子油条',
		subMenus: [
			{
				id: 3000,
				name: '包子油条',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg',
			},
			{
				id: 3001,
				name: '水煎包',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 3002,
				name: '菜角',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	},
	{
		id: 4,
		title: '搭配小吃',
		subMenus: [
			
			{
				id: 4000,
				name: '茶鸡蛋',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	},
	{
		id: 1,
		title: '招牌胡辣汤',
		subMenus: [
			{
				id: 1000,
				name: '胡辣汤',
				price: 5,
				oldPrice: 5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	},
	{
		id: 2,
		title: '汤粥',
		subMenus: [
			{
				id: 2000,
				name: '八宝粥',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 2001,
				name: '小米粥',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 2002,
				name: '豆浆',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 2003,
				name: '豆腐脑',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	},
	{
		id: 3,
		title: '包子油条',
		subMenus: [
			{
				id: 3000,
				name: '包子油条',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg',
			},
			{
				id: 3001,
				name: '水煎包',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 3002,
				name: '菜角',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	},
	{
		id: 4,
		title: '搭配小吃',
		subMenus: [
			
			{
				id: 4000,
				name: '茶鸡蛋',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	},
	{
		id: 1,
		title: '招牌胡辣汤',
		subMenus: [
			{
				id: 1000,
				name: '胡辣汤',
				price: 5,
				oldPrice: 5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	},
	{
		id: 2,
		title: '汤粥',
		subMenus: [
			{
				id: 2000,
				name: '八宝粥',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 2001,
				name: '小米粥',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 2002,
				name: '豆浆',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 2003,
				name: '豆腐脑',
				price: 2,
				oldPrice: 2.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	},
	{
		id: 3,
		title: '包子油条',
		subMenus: [
			{
				id: 3000,
				name: '包子油条',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg',
			},
			{
				id: 3001,
				name: '水煎包',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			},
			{
				id: 3002,
				name: '菜角',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	},
	{
		id: 4,
		title: '搭配小吃',
		subMenus: [
			
			{
				id: 4000,
				name: '茶鸡蛋',
				price: 1,
				oldPrice: 1.5,
				monthSell: 1000,
				url: 'photo_one.jpg'
			}
		]
	}
	

]

exports.location = storeLocation
exports.phoneNumber = storePhoneNumber
exports.foodPics = foodPics
exports.storePhotos = storePhotos
exports.marqueContent = marqueContent
exports.menus = menus;