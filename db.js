
const colors = {
  red: '红色',
  black: '黑色',
  blacklabel: '黑标',
  kaqi: '卡其'
}

const models = {
  '0226': {
    model: '0226',
    desc: '麦格霍斯magforce0226腰挂工具包/户外收纳配件包',
    link: 'http://www.magforce.cn/products/0226.html',
    pic: 'https://img.alicdn.com/bao/uploaded/i2/TB1EePOHpXXXXaRXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
    sku: {
      def: 384
    }
  },
  '0269': {
    model: '0269',
    desc: 'MAGFORCE麦格霍斯台湾马盖先时尚皮质感防水钱包男女军迷卡包0269',
    link: 'http://www.magforce.cn/products/0269.html',
    pic: 'https://img.alicdn.com/bao/uploaded/i2/TB14Mn6NXXXXXc9apXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
    sku: {
      def: 208
    }
  },
  '0336': {
    model: '0336',
    desc: '麦格霍斯MagForce0336黑标版军迷战术MM1腰包',
    link: 'http://www.magforce.cn/products/0336.html',
    pic: 'https://img.alicdn.com/bao/uploaded/i2/TB1.3b8MpXXXXajXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
    sku: {
      def: 536
    }
  },
  '0548': {
    model: '0548',
    desc: 'MAGFORCE麦格霍斯20寸黑甲虫战术双肩包0548轻量户外摄影包黑胶',
    link: 'http://www.magforce.cn/products/0548.html',
    pic: 'https://img.alicdn.com/bao/uploaded/i1/2215014391/TB1u6RMh97PL1JjSZFHXXcciXXa_!!0-item_pic.jpg_430x430q90.jpg',
    sku: {
      def: 2180
    }
  },
  '1703': {
    model: '1703',
    desc: '麦格霍斯magforce台湾马盖先军迷户外钥匙扣1703特勤锁扣-蓝紫',
    link: 'http://www.magforce.cn/products/1703.html',
    pic: 'https://img.alicdn.com/bao/uploaded/i1/TB1APCDNVXXXXXQXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
    sku: {
      def: 87,
      blacklabel: 96
    }
  },
  '3561': {
    model: '3561',
    desc: '麦格霍斯magforce正品台湾马盖先军迷数位模组扩充板3561',
    link: 'http://www.magforce.cn/products/3561.html',
    pic: 'https://img.alicdn.com/imgextra/i2/2215014391/TB2Nz9uaXHFK1JjSZFzXXb23XXa_!!2215014391.jpg_430x430q90.jpg',
    sku: {
      def: 69
    }
  },
  '3568': {
    model: '3568',
    desc: '麦格霍斯MagForce正品台湾马盖先军迷用品3568扩充板战术装备黏粘',
    link: 'http://www.magforce.cn/products/3568.html',
    pic: 'https://img.alicdn.com/imgextra/i1/2215014391/TB2EypRbVXXXXX9XpXXXXXXXXXX_!!2215014391.jpg_430x430q90.jpg',
    sku: {
      def: 126
    }
  },
  'mp0102': {
    model: 'mp0102',
    desc: 'MAGFORCE麦格霍斯台湾马盖先军迷战术molle包配件mp0102扣条3寸',
    link: 'http://www.magforce.cn/products/mp0102.html',
    pic: 'https://img.alicdn.com/bao/uploaded/i2/2215014391/TB1Yo9QSFXXXXXyaFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
    sku: {
      def: 31
    }
  },
  'mp0103': {
    model: 'mp0103',
    desc: 'MAGFORCE麦格霍斯台湾马盖先军迷战术molle包配件mp0103扣条5寸',
    link: 'http://www.magforce.cn/products/mp0103.html',
    pic: 'https://img.alicdn.com/bao/uploaded/i3/2215014391/TB1dFToSFXXXXcfXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
    sku: {
      def: 33
    }
  },
  'mp0227': {
    model: 'mp0227',
    desc: 'MAGFORCE麦格霍斯台湾马盖先mp0227黑标1寸可拆式背包肩带',
    link: 'http://www.magforce.cn/products/mp0227.html',
    pic: 'https://img.alicdn.com/bao/uploaded/i3/2215014391/TB15dtYXgjrL1Jjy1XaXXXXuVXa_!!0-item_pic.jpg_430x430q90.jpg',
    sku: {
      def: 126
    }
  },
  'z01': {
    model: 'z01',
    desc: 'MAGFORCE麦格霍斯台湾马盖先战术z01户外多功能登山扣挂扣调节扣',
    link: 'http://www.magforce.cn/products/z01.html',
    pic: 'https://img.alicdn.com/imgextra/i4/2215014391/TB1o.iyae2CK1JjSZFMXXbVPpXa_!!0-item_pic.jpg_430x430q90.jpg',
    sku: {
      def: 69
    }
  },
  'ie800': {
    model: 'ie800',
    desc: '森海塞尔（Sennheiser） IE800 入耳式HiFi耳机 旗舰',
    link: '',
    pic: 'https://img12.360buyimg.com/n1/s450x450_g13/M05/0A/18/rBEhVFIuxTgIAAAAAAD6PNBpPqoAAC_kgEi46QAAPpU749.jpg',
    sku: {
      def: 4699
    }
  }
}


// var _belongings = [{
//   id: '0226',
//   count: 1,
//   color: '红黑',
//   paid: 23,
//   store: 'MAGFORCE旗舰店',
//   platform: 'JD'
// }]

// const _models = {
//   '0226': {
//     'def': 384,
//     'flag': 402
//   },
//   '0269': {
//     'def': 208
//   },
//   '0336': {
//     'def': 536
//   },
//   '1703': {
//     'def': 87,
//     blacklabel: 96
//   },
//   'z01': {
//     def: 69
//   },
//   'mp0102': {
//     def: 31
//   },
//   mp0227: 126,
//   '3561': 69,
//   mp0103: 33
// }

// const models = {
//   id: '0226', color: '', price: 384
// }, {
//   id: '0336', price: 536
// }, {
//   id: '0336', price: 536
// }, {
//   id: '0336', price: 536
// }, {
//   id: '0336', price: 536
// }, {
//   id: '0336', price: 536
// }

var belongings = []

const orders = [{
  paid: 365,
  store: 'MAGFORCE旗舰店',
  platform: 'JD',
  modelIds: ['0269', 'z01', 'mp0102,count-2', 'mp0227', '3561', '1703,color-blacklabel', 'mp0103,count-2']
}, {
  paid: 3688,
  store: '自营',
  platform: 'JD',
  modelIds: ['ie800']
}, {
  paid: 1296,
  store: 'MAGFORCE旗舰店',
  platform: 'JD',
  modelIds: ['0548']
}, {
  paid: 302,
  store: '野客户外专营店',
  platform: 'JD',
  modelIds: ['0226', '3568']
}]

function parseModelId (modelId) {
  var cfg = modelId.split(',')
  var result = {id: cfg.splice(0, 1)[0]}
  for (var i = 0; i < cfg.length; i++) {
    var porperty = cfg[i].split('-')
    result[porperty[0]] = porperty[1]
  }
  return result
}

function parseSku (porperty) {
  var model = {count: 1, ...models[porperty.id], ...porperty}
  if (!model.color) model.price = model.sku.def
  else model.price = model.sku[model.color]

  return model
}

function calc () {
  orders.forEach(o => {
    var orderitems = []
    o.modelIds.forEach(mid => {
      var config = parseModelId(mid)
      config.store = o.store
      config.platform = o.platform
      var model = parseSku(config)
      orderitems.push(model)
    })
    var total = 0
    orderitems.forEach(item => {
      total += item.price * item.count
    })
    var ratio = o.paid / total
    orderitems.forEach(item => {
      item.paid = (item.price * ratio).toFixed(2)
      item.price = item.price.toFixed(2)
    })

    belongings = belongings.concat(orderitems)
  })
}

calc()
