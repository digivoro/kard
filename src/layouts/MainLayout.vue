<template>
  <q-layout view="hHh lpr lFf">
    <!-- Loading bar -->
    <!-- <q-ajax-bar ref="bar" position="top" color="accent" size="15px" /> -->

    <!-- Header -->
    <q-header elevated>
      <q-toolbar class="q-my-lg">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="cinzel-black text-h4">Kard</q-toolbar-title>

        <q-form v-if="!sesion.usuarioActual" class="row q-gutter-md">
          <q-btn dark color="accent" push no-caps @click="loginDialog = true"
            >Iniciar Sesión</q-btn
          >
        </q-form>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      overlay
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="cinzel-bold text-grey-9">
          Explora Kard
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-dialog v-model="loginDialog">
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Iniciar sesión</div>
          </q-card-section>
          <q-card-section class="q-pt-none q-gutter-md">
            <q-input
              filled
              autofocus
              bg-color="white"
              label="Correo electrónico"
              type="text"
            ></q-input>
            <q-input
              filled
              bg-color="white"
              label="Contraseña"
              type="password"
            ></q-input>
          </q-card-section>
          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn
              dark
              color="accent"
              label="Iniciar Sesión"
              @click="onLoginClick"
              push
              no-caps
              v-close-popup
            ></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { mapState } from "vuex";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
      prompt: false,
      loginDialog: false,
      leftDrawerOpen: true,
      essentialLinks: [
        {
          title: "Inicio",
          caption: "",
          icon: "home",
          link: "/"
        },
        {
          title: "Constructor",
          caption: "Construye tus mazos",
          icon: "construction",
          link: "/constructor"
        },
        {
          title: "Perfil",
          caption: "Información de tu cuenta",
          icon: "person_pin",
          link: "/perfil"
        }
      ]
    };
  },

  computed: {
    ...mapState(["sesion"])
  },

  mounted() {
    setTimeout(() => {
      this.leftDrawerOpen = false;
    }, 3000);
  }
};
</script>
