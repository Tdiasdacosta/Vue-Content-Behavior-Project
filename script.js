// script.js
new Vue({
  el: "#app",
  data: {
    index: 0,
  },
  computed: {
    current() {
      return items[this.index];
    }
  },
  methods: {
    next() {
      if (this.index < items.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    previous() {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = items.length - 1;
      }
    }
  },
  template: `
    <div class="viewer">
      <h2>{{ current.title }}</h2>
      <img :src="current.src" class="img">

      <div class="nav">
        <button @click="previous">Précédent</button>
        <button @click="next">Suivant</button>
      </div>
    </div>
  `
});
