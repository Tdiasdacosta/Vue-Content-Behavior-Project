// script.js
new Vue({
  el: "#app",
  data: {
    index: 0
  },
  computed: {
    current() {
      return items[this.index];
    }
  },
  methods: {
    next() {
      this.index = (this.index + 1) % items.length;
    },
    previous() {
      this.index = (this.index - 1 + items.length) % items.length;
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

    </div>
  `
});
