<template>
  <div>
    <q-page class="col flex flex-center q-pa-lg">
      <div class="row q-col-gutter-lg">
        <CardFilter class="col-12 flex flex-center" />
        <CardGrid class="col-12 col-md-9" />
        <DeckList class="col-12 col-md-3" />
        <AdvancedFilter />
      </div>
    </q-page>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CardFilter from "components/CardFilter.vue";
import AdvancedFilter from "components/AdvancedFilter.vue";
import CardGrid from "components/CardGrid.vue";
import DeckList from "components/DeckList.vue";

export default {
  name: "Builder",

  components: {
    CardGrid,
    DeckList,
    CardFilter,
    AdvancedFilter
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions("cardModule/", ["getCardData"])
  },

  mounted() {
    // this.getCardData();
  }
};
</script>

<style lang="scss" scoped></style>
