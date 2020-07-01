<template>
  <div>
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title class="cinzel-bold">Mazo</q-toolbar-title>
    </q-toolbar>

    <q-list bordered dense>
      <!-- Mazo principal -->
      <q-item-label header>Principal</q-item-label>
      <q-item
        v-for="(carta, index) in getMazoPrincipal"
        :key="index"
        class="q-my-sm"
        clickable
        v-ripple
        @click="onQuitarClick(carta, `principal`)"
      >
        <q-item-section avatar>
          <q-icon size="sm">
            <q-img :src="`icons/png/${iconFile(carta.idTipo)}.png`"> </q-img>
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
        v-for="(carta, index) in getSideboard"
        :key="index"
        class="q-my-sm"
        clickable
        v-ripple
        @click="onQuitarClick(carta, `sideboard`)"
      >
        <q-item-section avatar>
          <q-icon size="sm">
            <q-img :src="`icons/png/${iconFile(carta.idTipo)}.png`"> </q-img>
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
        clickable
        v-ripple
        @click="onQuitarClick(carta, `oroInicial`)"
        v-if="Object.keys(getOroInicial).length"
      >
        <q-item-section avatar>
          <q-icon size="sm">
            <q-img :src="`icons/png/oro-color.png`"> </q-img>
          </q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ getOroInicial.nombre }}</q-item-label>
        </q-item-section>
      </q-item>

      <!-- Monumento -->
      <q-separator />

      <q-item-label header>Monumento</q-item-label>
      <q-item
        class="q-mb-sm"
        clickable
        v-ripple
        @click="onQuitarClick(carta, `monumento`)"
        v-if="Object.keys(getMonumento).length"
      >
        <q-item-section avatar>
          <q-icon size="sm">
            <q-img :src="`icons/png/piramide-color.png`"> </q-img>
          </q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ getMonumento.nombre }}</q-item-label>
        </q-item-section>
      </q-item>

      <!-- Acciones -->
      <q-separator />

      <div class="acciones bg-secondary">
        <!-- Nombre -->
        <q-item class="q-mb-sm">
          <q-item-section avatar>
            <q-icon name="settings" color="white" size="sm" />
          </q-item-section>
          <q-item-section>
            <q-input dense label="Nombre" v-model="nombre"></q-input>
          </q-item-section>
        </q-item>

        <!-- Toggle Publico -->
        <q-item class="q-mb-sm text-bold" dense>
          <q-item-section avatar>
            <q-icon name="settings" color="white" size="sm" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Mazo público: {{ esPublico ? "Si" : "No" }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="esPublico"></q-toggle>
          </q-item-section>
        </q-item>

        <!-- Guardar -->
        <q-item class="flex flex-center">
          <q-btn
            dense
            push
            stack
            text-color="dark"
            color="accent"
            icon="save"
            @click="onGuardarClick"
          >
            Guardar mazo
          </q-btn>
        </q-item>
      </div>
    </q-list>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
import { Notify } from "quasar";

export default {
  name: "DeckList",

  data() {
    return {};
  },
  methods: {
    ...mapActions("cardModule", ["guardarMazo"]),
    ...mapMutations("cardModule", [
      "ACTUALIZAR_NOMBRE_MAZO",
      "QUITAR_DEL_MAZO",
      "TOGGLE_PUBLICO"
    ]),

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
    },

    onGuardarClick() {
      if (!this.sesion.usuarioActual) {
        Notify.create({
          message: `Inicia sesión para guardar mazos :)`,
          type: "warning"
        });
      } else {
        this.guardarMazo();
      }
    },

    onQuitarClick(carta, zonaMazo) {
      this.QUITAR_DEL_MAZO({ carta, zonaMazo });
    },

    actualizarNombre(e) {}
  },

  computed: {
    ...mapState("cardModule", ["mazoConstruido"]),
    ...mapState(["sesion"]),
    ...mapGetters("cardModule", [
      "getMazoPrincipal",
      "getSideboard",
      "getOroInicial",
      "getMonumento"
    ]),

    nombre: {
      get() {
        return this.mazoConstruido.nombre;
      },
      set(value) {
        this.ACTUALIZAR_NOMBRE_MAZO(value);
      }
    },

    esPublico: {
      get() {
        return this.mazoConstruido.esPublico;
      },
      set(value) {
        this.TOGGLE_PUBLICO();
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
