new Vue({
  el: '#app',
  data: {
    index: 0,
    showDef: false,
    items: window.items // référence globale
  },
  methods: {
    nextItem() {
      this.index = (this.index + 1) % this.items.length;
      this.showDef = false;
    },
    prevItem() {
      this.index = (this.index - 1 + this.items.length) % this.items.length;
      this.showDef = false;
    },
    toggleShow() {
      this.showDef = !this.showDef;
    }
  },
  template: `
    <div class="viewer">
      <img :src="items[index].image" :alt="items[index].title" class="img" />
      <h2 v-if="!showDef">{{items[index].title}}</h2>
      <p v-else>{{items[index].definition}}</p>
      <button @click="toggleShow">
        {{ showDef ? "Affiche le titre" : "Affiche la définition" }}
      </button>
      <div class="nav">
        <button @click="prevItem">&lt; Précédent</button>
        <button @click="nextItem">Suivant &gt;</button>
      </div>
    </div>
  `
});