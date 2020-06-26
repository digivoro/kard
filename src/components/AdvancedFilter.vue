<template>
  <div class="advanced-filter">
    <q-dialog v-model="advancedFilter" full-width seamless position="bottom">
      <q-card class="bg-primary" dark>
        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="cinzel-bold text-h5">
              Filtro Avanzado
            </div>
          </div>

          <q-space />

          <q-btn
            flat
            round
            icon="close"
            v-close-popup
            @click="TOGGLE_ADVANCED_FILTER"
          />
        </q-card-section>
        <div class="row">
          <div class="col-12 col-md-6">
            <!-- Cost -->
            <q-card-section class="row">
              <div class="cinzel-bold text-h6 col-12">
                Coste
              </div>
              <div class="q-gutter-sm">
                <q-btn
                  v-for="(item, index) in costs"
                  :key="index"
                  class="cinzel-bold text-black"
                  round
                  :glossy="item.disabled ? false : true"
                  :color="item.disabled ? 'grey' : 'orange'"
                  @click="item.disabled = !item.disabled"
                >
                  {{ item.label }}
                </q-btn>
              </div>
            </q-card-section>

            <!-- Rarity -->
            <q-card-section class="row">
              <div class="cinzel-bold text-h6 col-12">
                Rareza
              </div>
              <div class="q-gutter-sm">
                <q-btn
                  v-for="(item, index) in rarities"
                  :key="index"
                  :class="
                    `cinzel-bold ${
                      item.backgroundColor === 'white' && !item.disabled
                        ? 'text-black'
                        : null
                    }`
                  "
                  :glossy="item.disabled ? false : true"
                  :color="item.disabled ? 'grey' : item.backgroundColor"
                  round
                  @click="item.disabled = !item.disabled"
                >
                  {{ item.short }}
                </q-btn>
              </div>
            </q-card-section>
          </div>
          <div class="col-12 col-md-6">
            <!-- Race -->
            <q-card-section>
              <div class="cinzel-bold text-h6 col-12">
                Raza
              </div>
              <div class="row">
                <q-list class="col-6" dense>
                  <q-item
                    v-for="(item, index) in races.slice(
                      0,
                      (races.length - 1) / 2
                    )"
                    :key="index"
                    class="row"
                    tag="label"
                    v-ripple
                  >
                    <q-item-section>
                      <q-item-label>{{ item.label }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-toggle
                        color="blue"
                        v-model="item.toggler"
                        val="battery"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
                <q-list class="col-6" dense>
                  <q-item
                    v-for="(item, index) in races.slice(
                      (races.length - 1) / 2,
                      races.length
                    )"
                    :key="index"
                    class="row"
                    tag="label"
                    v-ripple
                  >
                    <q-item-section>
                      <q-item-label>{{ item.label }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-toggle
                        color="blue"
                        v-model="item.toggler"
                        val="battery"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-card-section>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data: function() {
    return {
      races: [
        { label: "Ancestral", toggler: true },
        { label: "Bestia", toggler: true },
        { label: "Bárbaro", toggler: true },
        { label: "Caballero", toggler: true },
        { label: "Dragón", toggler: true },
        { label: "Eterno", toggler: true },
        { label: "Faerie", toggler: true },
        { label: "Faraón", toggler: true },
        { label: "Guerrero", toggler: true },
        { label: "Héroe", toggler: true },
        { label: "Olímpico", toggler: true },
        { label: "Oni", toggler: true },
        { label: "Sacerdote", toggler: true },
        { label: "Samurái", toggler: true },
        { label: "Sombra", toggler: true },
        { label: "Titán", toggler: true },
        { label: "Sin Raza", toggler: true }
      ],
      costs: [
        { label: "1", disabled: false },
        { label: "2", disabled: false },
        { label: "3", disabled: false },
        { label: "4", disabled: false },
        { label: "5", disabled: false },
        { label: "6", disabled: false },
        { label: "7+", disabled: false }
      ],
      rarities: [
        {
          label: "Promocional",
          backgroundColor: "green",
          short: "P",
          disabled: false
        },
        {
          label: "Ultra Real",
          backgroundColor: "black",
          short: "UR",
          disabled: false
        },
        {
          label: "Mega Real",
          backgroundColor: "white",
          short: "MR",
          disabled: false
        },
        {
          label: "Milenaria",
          backgroundColor: "purple",
          short: "M",
          disabled: false
        },
        {
          label: "Real",
          backgroundColor: "orange",
          short: "R",
          disabled: false
        },
        {
          label: "Cortesano",
          backgroundColor: "red",
          short: "C",
          disabled: false
        },
        {
          label: "Vasallo",
          backgroundColor: "blue",
          short: "V",
          disabled: false
        }
      ]
    };
  },

  methods: {
    ...mapMutations(["TOGGLE_ADVANCED_FILTER"])
  },
  computed: {
    ...mapState(["advancedFilter"])
  }
};
</script>

<style lang="scss" scoped>
/* .cinzel-bold {
  text-decoration: underline;
} */
</style>
