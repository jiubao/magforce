
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
    products: [],
    loaded: false
  },
  computed: {
    total () {
      var r = 0
      this.products.forEach(p => {
        r += p.paid * p.count
      })
      return r
    }
  },
  mounted () {
    this.loaded = true
    this.products = belongings
    console.log('loaded')
  }
})
