<template>
  <div class="q-px-lg">
    <q-toolbar>
      <h3 class="cinzel-bold">Mazos de la Comunidad</h3>
    </q-toolbar>
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-3" v-for="mazo in mazos" :key="mazo.docId">
        <q-toolbar class="bg-primary text-white cinzel-bold">
          <h5>{{ mazo.nombre }}</h5>
        </q-toolbar>
        <div class="q-pa-md">
          <p>
            Usuario: <span class="text-bold">{{ mazo.usuario }}</span>
          </p>
        </div>

        <q-list bordered dense>
          <!-- Mazo principal -->
          <q-item-label header>Principal</q-item-label>
          <q-item
            v-for="(carta, index) in mazo.detalleMazo.principal"
            :key="index"
            class="q-my-sm"
          >
            <q-item-section avatar>
              <q-icon size="sm">
                <q-img :src="`icons/png/${iconFile(carta.idTipo)}.png`">
                </q-img>
              </q-icon>
            </q-item-section>

            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" size="sm">
                {{ carta.copias }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                {{ carta.nombre }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-avatar
                class="text-bold"
                color="accent"
                text-color="dark"
                size="sm"
              >
                {{ carta.costo }}
              </q-avatar>
            </q-item-section>
          </q-item>

          <!-- Sideboard -->
          <q-separator />
          <q-item-label header>Sideboard</q-item-label>
          <q-item
            v-for="(carta, index) in mazo.detalleMazo.sideboard"
            :key="index"
            class="q-my-sm"
          >
            <q-item-section avatar>
              <q-icon size="sm">
                <q-img :src="`icons/png/${iconFile(carta.idTipo)}.png`">
                </q-img>
              </q-icon>
            </q-item-section>

            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" size="sm">
                {{ carta.copias }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                {{ carta.nombre }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-avatar
                color="accent"
                text-color="dark"
                size="sm"
                class="text-bold"
              >
                {{ carta.costo }}
              </q-avatar>
            </q-item-section>
          </q-item>

          <!-- Oro Inicial -->
          <q-separator />

          <q-item-label header>Oro Inicial</q-item-label>

          <q-item
            class="q-mb-sm"
            v-if="Object.keys(mazo.detalleMazo.principal).length"
          >
            <q-item-section avatar>
              <q-icon size="sm">
                <q-img :src="`icons/png/oro-color.png`"> </q-img>
              </q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{
                mazo.detalleMazo.oroInicial.nombre
              }}</q-item-label>
            </q-item-section>
          </q-item>

          <!-- Monumento -->
          <q-separator />

          <q-item-label header>Monumento</q-item-label>
          <q-item
            class="q-mb-sm"
            v-if="Object.keys(mazo.detalleMazo.monumento).length"
          >
            <q-item-section avatar>
              <q-icon size="sm">
                <q-img :src="`icons/png/piramide-color.png`"> </q-img>
              </q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{
                mazo.detalleMazo.monumento.nombre
              }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("cardModule", ["obtenerMazos"]),
    iconFile(tipo) {
      if (tipo === 1) {
        return "guerrero-color";
      } else if (tipo === 2) {
        return "talisman-color";
      } else if (tipo === 3) {
        return "espada-color";
      } else if (tipo === 4) {
        return "totem-color";
      } else if (tipo === 5) {
        return "piramide-color";
      } else {
        return "oro-color";
      }
    }
  },

  computed: {
    ...mapState("cardModule", ["mazos"])
  },
  mounted() {
    this.obtenerMazos();
  }
};
</script>

<style lang="scss" scoped></style>
