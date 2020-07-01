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

    <q-scroll-area
      :thumb-style="thumbStyle"
      :content-style="contentStyle"
      :content-active-style="contentActiveStyle"
      style="height: 420px;"
    >
      <div class="row q-col-gutter-md">
        <div
          class="col-4 col-sm-4 col-md-2"
          v-for="(carta, index) in getGrillaCartas"
          :key="index"
        >
          <q-responsive :ratio="231 / 331">
            <q-card @click="onCardClick(carta)">
              <q-img class="tarjeta" :src="carta.urlImg" />
            </q-card>
          </q-responsive>
        </div>
      </div>
    </q-scroll-area>
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
      ],
      contentStyle: {
        backgroundColor: "rgba(0,0,0,0.02)",
        color: "#555"
      },

      contentActiveStyle: {
        backgroundColor: "#eee",
        color: "black"
      },

      thumbStyle: {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75
      }
    };
  },

  methods: {
    ...mapMutations("cardModule", ["AGREGAR_A_MAZO"]),

    onCardClick: function(carta) {
      this.AGREGAR_A_MAZO({ carta, zonaMazo: this.selector.value });
    },

    zoom: function() {}
  },

  computed: {
    ...mapGetters("cardModule", ["getGrillaCartas"])
  },

  components: {}
};
</script>

<style lang="scss" scoped>
.tarjeta:hover {
  width: 150%;
  height: 150%;
  position: absolute;
  top: -25%;
  z-index: 99;
}
</style>
