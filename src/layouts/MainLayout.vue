<template>
  <q-layout view="hHh lpr lFf">
    <!-- Loading bar -->
    <q-ajax-bar ref="bar" position="top" color="accent" size="15px" />

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
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "Inicio",
          caption: "",
          icon: "home",
          link: "/inicio"
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
  }
};
</script>
