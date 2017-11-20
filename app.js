
Vue.component('rmb', {
  template: '#tpl-rmb'
})

Vue.component('goods', {
  props: ['goods'],
  template: '#tpl-goods',
  methods: {
    gotoDetail () {
      if (this.goods.link) window.location.href = this.goods.link
    }
  }
});

Vue.component('statistic', {
  props: ['products'],
  template: '#tpl-statistic',
  computed: {
    price () {
      var r = 0
      this.products.forEach(p => {
        r += p.paid * p.count
      })
      return r.toFixed(2)
    },
    count () {
      var n = 0
      this.products.forEach(p => {
        n = n + p.count * 1
      })
      return n
    },
    count2 () {
      return 0
    }
  }
})

new Vue({
  el: '#app',
  data: {
    title: 'magforce',
    products: [],
    loaded: false,
    filter: '',
    sortby: ''
  },
  computed: {
    total () {
      var r = 0
      this.products.forEach(p => {
        r += p.paid * p.count
      })
      return r.toFixed(2)
    }
  },
  mounted () {
    this.loaded = true
    this.products = belongings
    console.log('loaded')
  }
})
