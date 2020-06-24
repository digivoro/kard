<template>
  <div>
    <q-page class="flex flex-center">
      <Card />
    </q-page>
  </div>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import Card from "components/Card.vue";

export default {
  name: "Builder",

  components: {
    Card
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
