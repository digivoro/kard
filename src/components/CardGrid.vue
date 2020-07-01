<template>
  <div>
    <q-toolbar class="bg-primary text-white shadow-2 q-mb-md">
      <q-toolbar-title class="cinzel-bold">Cartas</q-toolbar-title>
      <q-select
        dense
        options-dense
        dark
        v-model="selector"
        :options="zonas"
        label="Agregar a"
      />
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
      selector: { label: "Principal", value: "principal" },
      zonas: [
        { label: "Principal", value: "principal" },
        { label: "Sideboard", value: "sideboard" },
        { label: "Oro Inicial", value: "oroInicial" },
        { label: "Monumento", value: "monumento" }
      ]
    };
  },

  methods: {
    ...mapMutations("cardModule", ["AGREGAR_A_MAZO"]),

    onCardClick: function(carta) {
      this.AGREGAR_A_MAZO({ carta, zonaMazo: this.selector.value });
    }
  },

  computed: {
    ...mapGetters("cardModule", [
      "getGrillaCartas",
      "getGrillaFiltradaPorTipo",
      "getGrillaFiltradaPorTexto"
    ])
  },

  components: {}
};
</script>

<style lang="scss" scoped></style>
