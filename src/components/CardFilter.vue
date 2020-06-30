<template>
  <q-toolbar>
    <div class="flex q-pa-lg bg-primary shadow-4 flex-center">
      <div class="row flex flex-center">
        <div class="col-9 col-sm-3">
          <q-input
            dark
            dense
            standout
            v-model="text"
            input-class="text-right"
            class=""
          >
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="text = ''"
              />
            </template>
          </q-input>
        </div>

        <q-separator dark vertical class="q-mx-md gt-xs"></q-separator>

        <div class="col col-sm">
          <div class="row q-col-gutter-sm">
            <div class="col">
              <q-btn
                @click="onAdvancedFilterClick"
                icon="img:icons/png/settings-color.png"
                size="lg"
                color="orange"
                glossy
              >
                <q-tooltip
                  content-class="bg-accent text-black cinzel-bold"
                  content-style="font-size: 16px"
                  transition-show="rotate"
                  transition-hide="rotate"
                  :offset="[10, 10]"
                >
                  Filtro avanzado
                </q-tooltip>
              </q-btn>
            </div>
          </div>
        </div>

        <q-separator dark vertical class="q-mx-md gt-xs"></q-separator>

        <div class="col-12 col-sm-7 order-xs-last">
          <div class="row q-col-gutter-sm">
            <div v-for="(item, index) in tipos" :key="index" class="col-2">
              <q-btn
                :color="filtros.tipos[item.tipo] ? 'accent' : 'grey'"
                size="lg"
                :glossy="filtros.tipos[item.tipo] ? true : false"
                :icon="
                  `img:${
                    filtros.tipos[item.tipo] ? item.image : item.disabledImage
                  }`
                "
                @click="TOGGLE_FILTRO_TIPO(item.tipo)"
              >
                <q-tooltip
                  :content-class="
                    `${
                      filtros.tipos[item.tipo] ? 'bg-accent' : 'bg-grey'
                    } text-black cinzel-bold`
                  "
                  content-style="font-size: 16px"
                  transition-show="rotate"
                  transition-hide="rotate"
                  :offset="[10, 10]"
                >
                  {{ item.label }}
                </q-tooltip>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-toolbar>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      text: "",
      tipos: [
        {
          tipo: "aliado",
          label: "Aliado",
          image: "icons/png/guerrero-color.png",
          disabledImage: "icons/png/guerrero-line.png",
          disabled: false
        },
        {
          tipo: "talisman",
          label: "Talismán",
          image: "icons/png/talisman-color.png",
          disabledImage: "icons/png/talisman-line.png",
          disabled: false
        },
        {
          tipo: "arma",
          label: "Arma",
          image: "icons/png/espada-color.png",
          disabledImage: "icons/png/espada-line.png",
          disabled: false
        },
        {
          tipo: "totem",
          label: "Tótem",
          image: "icons/png/totem-color.png",
          disabledImage: "icons/png/totem-line.png",
          disabled: false
        },
        {
          tipo: "oro",
          label: "Oro",
          image: "icons/png/oro-color.png",
          disabledImage: "icons/png/oro-line.png",
          disabled: false
        },
        {
          tipo: "monumento",
          label: "Monumento",
          image: "icons/png/piramide-color.png",
          disabledImage: "icons/png/piramide-line.png",
          disabled: false
        }
      ]
    };
  },

  methods: {
    ...mapMutations(["TOGGLE_ADVANCED_FILTER"]),
    ...mapMutations("cardModule", ["TOGGLE_FILTRO_TIPO"]),

    onAdvancedFilterClick: function() {
      this.TOGGLE_ADVANCED_FILTER();
    }
  },

  computed: {
    ...mapState("cardModule", ["filtros"])
  }
};
</script>

<style lang="scss" scoped>
.disable {
  background-color: grey;
}
</style>
