<template>
  <div>
    <div class="row q-col-gutter-md">
      <Card
        class="col-2"
        v-for="(card, index) in cardList"
        :key="index"
        :name="card.name"
        :img="getUrl(card.set, card.img)"
      />
    </div>
  </div>
</template>

<script>
import Card from "components/Card.vue";
import { Storage } from "../boot/firebase";

let gen =
  "https://firebasestorage.googleapis.com/v0/b/kard-37937.appspot.com/o/img%2Fsets%2Folimpia%2F108%2F.jpg?alt=media&token=621313a8-dda3-415e-a51f-c2e8eee9fb73";
let full =
  "https://firebasestorage.googleapis.com/v0/b/kard-37937.appspot.com/o/img%2Fsets%2Folimpia%2F108.jpg?alt=media&token=621313a8-dda3-415e-a51f-c2e8eee9fb73";

const BASE_URL =
  "https://firebasestorage.googleapis.com/v0/b/kard-37937.appspot.com/o/img%2Fsets%2F";
const TOKEN_URL = ".jpg?alt=media&token=621313a8-dda3-415e-a51f-c2e8eee9fb73";

export default {
  name: "CardList",

  data: function() {
    return {
      cardList: [
        {
          name: "Carta 1",
          set: "olimpia",
          img: 108
        },
        {
          name: "Carta 2",
          set: "olimpia",
          img: 209
        },
        {
          name: "Carta 3",
          set: "olimpia",
          img: 21
        },
        {
          name: "Carta 4",
          set: "olimpia",
          img: 210
        },
        {
          name: "Carta 5",
          set: "olimpia",
          img: 88
        },
        {
          name: "Carta 6",
          set: "olimpia",
          img: 77
        },
        {
          name: "Carta 7",
          set: "olimpia",
          img: 66
        },
        {
          name: "Carta 8",
          set: "olimpia",
          img: 54
        },
        {
          name: "Carta 9",
          set: "olimpia",
          img: 53
        },
        {
          name: "Carta 10",
          set: "olimpia",
          img: 52
        },
        {
          name: "Carta 11",
          set: "olimpia",
          img: 51
        },
        {
          name: "Carta 12",
          set: "olimpia",
          img: 110
        },
        {
          name: "Carta 13",
          set: "olimpia",
          img: 101
        },
        {
          name: "Carta 14",
          set: "olimpia",
          img: 109
        },
        {
          name: "Carta 15",
          set: "olimpia",
          img: 25
        },
        {
          name: "Carta 16",
          set: "olimpia",
          img: 212
        }
      ]
    };
  },

  methods: {
    getUrl(set, img) {
      return `${BASE_URL}${set}%2F${img}${TOKEN_URL}`;
    }
  },

  computed: {},

  components: {
    Card
  }
};
</script>

<style lang="scss" scoped></style>
