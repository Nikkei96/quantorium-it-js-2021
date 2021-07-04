new Vue({
  el: '#app',

  data: {
    images: [
      {
        url: 'bootstrap-logo.svg',
        title: 'Заголовок 1',
        message: 'Стандартное сообщение',
      },

      {
        url: 'bootstrap-docs.png',
        title: 'Заголовок 2',
        message: 'Стандартное сообщение',
      }
    ]
  },

  methods: {
    addElement() {
      this.list.push(this.list.length + 1)
    }
  }
})