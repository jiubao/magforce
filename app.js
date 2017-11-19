const products = [{
  id: '0226',
  model: '0226',
  desc: '麦格霍斯magforce0226腰挂工具包/户外收纳配件包',
  link: 'http://www.magforce.cn/products/0226.html',
  pic: 'https://img.alicdn.com/bao/uploaded/i2/TB1EePOHpXXXXaRXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
  price: 384,
  paid: 200,
  count: 1,
  category: '颜色：红黑',
  store: 'MAGFORCE旗舰店',
  platform: 'JD'
}, {
  id: '0336',
  model: '0336',
  desc: '麦格霍斯MagForce0336黑标版军迷战术MM1腰包',
  link: 'http://www.magforce.cn/products/0336.html',
  pic: 'https://img.alicdn.com/bao/uploaded/i2/TB1.3b8MpXXXXajXpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
  price: 536,
  paid: 300,
  count: 1,
  category: '颜色：黑标',
  store: 'MAGFORCE旗舰店',
  platform: 'JD'
}]

const models = {
  '0226': {
    'def': 384
  },
  '1703': {
    'def': 67,
    black: 87
  }
}

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

const orders = [{
  price: 365,
  modelIds: ['0269', 'z01', 'mp0102,n-2', 'mp0227', '3561', '1703,c-black', 'mp0103,n-2']
}]

Vue.component('rmb', {
  template: '#tpl-rmb'
})

Vue.component('goods', {
  props: ['goods'],
  template: '#tpl-goods',
  methods: {
    gotoDetail () {
      window.location.href = this.goods.link
    }
  }
});

new Vue({
  el: '#app',
  data: {
    title: 'magforce',
    products: products,
    loaded: false
  },
  mounted () {
    this.loaded = true
    console.log('loaded')
  }
})
