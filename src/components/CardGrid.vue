<template>
  <div>
    <q-toolbar class="bg-primary text-white shadow-2 q-mb-md">
      <q-toolbar-title class="cinzel-bold">Cartas</q-toolbar-title>
    </q-toolbar>
    <div class="row q-col-gutter-md">
      <div
        class="col-4 col-sm-4 col-md-2"
        v-for="(carta, index) in getGrillaCartas"
        :key="index"
      >
        <q-responsive :ratio="231 / 331">
          <q-card @click="onCardClick(carta)">
            <q-img :src="carta.urlImg" />
          </q-card>
        </q-responsive>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CardList",

  data: function() {
    return {
      agregarAZona: "principal"
    };
  },

  methods: {
    ...mapMutations("cardModule", ["AGREGAR_A_MAZO"]),

    onCardClick: function(carta) {
      this.AGREGAR_A_MAZO({ carta, zonaMazo: this.agregarAZona });
    }
  },

  computed: {
    ...mapGetters("cardModule", ["getGrillaCartas"])
  },

  components: {}
};
</script>

<style lang="scss" scoped></style>
