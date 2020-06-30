<template>
  <div>
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title class="cinzel-bold">Mazo</q-toolbar-title>
    </q-toolbar>

    <q-list bordered dense>
      <q-item
        v-for="(carta, index) in getMazoPrincipal"
        :key="index"
        class="q-my-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white" size="sm">
            {{ carta.copias }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-icon size="sm">
              <q-img :src="`icons/png/${iconFile(carta.idTipo)}.png`"> </q-img>
            </q-icon>
            {{ carta.nombre }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-avatar color="primary" text-color="white" size="sm">
            {{ carta.costo }}
          </q-avatar>
        </q-item-section>
      </q-item>

      <!-- Sideboard -->
      <q-separator />
      <q-item-label header>Sideboard</q-item-label>
      <q-item
        v-for="carta in getSideboard"
        :key="carta.id"
        class="q-mb-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar>
            3
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ carta.nombre }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="grey" />
        </q-item-section>
      </q-item>

      <!-- Oro Inicial -->
      <q-separator />

      <q-item-label header>Oro Inicial</q-item-label>
      <q-item class="q-mb-sm" clickable v-ripple>
        <q-item-section>
          <q-item-label>{{ getOroInicial.nombre }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="circle" color="accent" />
        </q-item-section>
      </q-item>

      <!-- Monumento -->
      <q-separator />

      <q-item-label header>Monumento</q-item-label>
      <q-item class="q-mb-sm" clickable v-ripple>
        <q-item-section>
          <q-item-label>{{ getMonumento.nombre }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="circle" color="secondary" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DeckList",

  data() {
    return {};
  },
  methods: {
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
    ...mapGetters("cardModule", [
      "getMazoPrincipal",
      "getSideboard",
      "getOroInicial",
      "getMonumento"
    ])
  }
};
</script>

<style lang="scss" scoped></style>
