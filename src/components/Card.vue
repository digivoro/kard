<template>
  <div class="card">
    <q-responsive :ratio="231 / 331" class="col">
      <q-card class="column">
        <q-img class="col" :src="img" />
      </q-card>
    </q-responsive>
  </div>
</template>

<script>
import Firebase from "boot/firebase";

export default {
  name: "Card",

  data: function() {
    return {};
  },

  props: {
    name: String,
    img: String
  },

  methods: {
    // getImgUrl: async function() {
    //   let imgRef = await Firebase.storage().ref("img/sets/olimpia/108.jpg");
    //   let imgURL = await imgRef.getDownloadURL();
    //   console.log(imgURL);
    //   return imgURL.i;
    // }
  },

  computed: {
    // getUrl: function() {
    //   return this.getImgUrl();
    // }
  }
};
</script>

<style lang="scss" scoped>
.card {
  /* max-width: 231px; */
  min-width: 50px;
}
</style>
