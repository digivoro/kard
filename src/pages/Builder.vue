<template>
  <div>
    <q-page class="col flex flex-center">
      <div class="row q-col-gutter-lg">
        <CardFilter class="col-12 flex flex-center" />
        <CardList class="col-12 col-md-9" />
        <DeckList class="col-12 col-md-3" />
      </div>
    </q-page>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CardFilter from "components/CardFilter.vue";
import CardList from "components/CardList.vue";
import DeckList from "components/DeckList.vue";

export default {
  name: "Builder",

  components: {
    CardList,
    DeckList,
    CardFilter
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
