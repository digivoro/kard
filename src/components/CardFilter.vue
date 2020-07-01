<template>
  <q-toolbar>
    <div class="flex q-pa-lg bg-primary shadow-4 flex-center">
      <div class="row flex flex-center">
        <div class="col-9 col-sm-3">
          <q-input
            dark
            dense
            standout
            v-model="inputTexto"
            input-class="text-right"
            class=""
          >
            <template v-slot:append>
              <q-icon v-if="inputTexto === ``" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="inputTexto = ``"
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
            <div v-for="(tipo, index) in tipos" :key="index" class="col-2">
              <q-btn
                :color="filtros.tipos[tipo.nombre] ? 'accent' : 'grey'"
                size="lg"
                :glossy="filtros.tipos[tipo.nombre] ? true : false"
                :icon="
                  `img:${
                    filtros.tipos[tipo.nombre] ? tipo.image : tipo.disabledImage
                  }`
                "
                @click="TOGGLE_FILTRO_TIPO(tipo.nombre)"
              >
                <q-tooltip
                  :content-class="
                    `${
                      filtros.tipos[tipo.nombre] ? 'bg-accent' : 'bg-grey'
                    } text-black cinzel-bold`
                  "
                  content-style="font-size: 16px"
                  transition-show="rotate"
                  transition-hide="rotate"
                  :offset="[10, 10]"
                >
                  {{ tipo.label }}
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
    return {};
  },

  methods: {
    ...mapMutations(["TOGGLE_ADVANCED_FILTER"]),
    ...mapMutations("cardModule", [
      "TOGGLE_FILTRO_TIPO",
      "ACTUALIZAR_INPUT_TEXTO"
    ]),

    onAdvancedFilterClick: function() {
      this.TOGGLE_ADVANCED_FILTER();
    }
  },

  computed: {
    ...mapState("cardModule", ["filtros", "tipos"]),

    inputTexto: {
      get() {
        return this.filtros.texto;
      },
      set(valor) {
        this.ACTUALIZAR_INPUT_TEXTO(valor);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.disable {
  background-color: grey;
}
</style>
