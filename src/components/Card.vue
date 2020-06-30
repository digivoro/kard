<template>
  <div class="card">
    <q-responsive :ratio="231 / 331" class="col">
      <q-card class="column" @click="onCardClick(this)">
        <q-img class="col" :src="img" />
      </q-card>
    </q-responsive>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },

  props: {
    name: String,
    img: String
  },

  methods: {
    ...mapMutations("cardModule", ["AGREGAR_A_MAZO"]),

    onCardClick: function(carta) {
      this.AGREGAR_A_MAZO(carta);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  min-width: 10px;
}
</style>
