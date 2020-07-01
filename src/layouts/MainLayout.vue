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

        <q-btn
          v-if="!sesion.usuarioActual"
          dark
          color="accent"
          push
          no-caps
          @click="loginDialog = true"
        >
          Iniciar Sesión
        </q-btn>
        <div v-else>
          Hola
          <span class="text-bold"> {{ sesion.usuarioActual }}! </span>
          <q-btn
            color="red"
            text-color="white"
            push
            no-caps
            @click="onLogoutClick"
          >
            Cerrar Sesión
          </q-btn>
        </div>
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
              v-model="loginEmail"
              filled
              autofocus
              bg-color="white"
              label="Correo electrónico"
              type="text"
            ></q-input>
            <q-input
              v-model="loginPassword"
              filled
              bg-color="white"
              label="Contraseña"
              type="password"
            ></q-input>
          </q-card-section>
          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Mejor no" v-close-popup />
            <q-btn
              dark
              color="accent"
              label="Iniciar Sesión"
              @click="onLoginClick"
              push
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
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
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
          title: "Mazos",
          caption: "Explora los mazos de la comunidad",
          icon: "dashboard",
          link: "/mazos"
        }
        // {
        //   title: "Perfil",
        //   caption: "Información de tu cuenta",
        //   icon: "person_pin",
        //   link: "/perfil"
        // },
      ]
    };
  },

  methods: {
    ...mapActions(["loginUsuario", "logout"]),
    ...mapMutations([
      "ACTUALIZAR_INPUT_LOGIN_EMAIL",
      "ACTUALIZAR_INPUT_LOGIN_PASSWORD"
    ]),

    onLoginClick() {
      this.loginUsuario();
    },

    onLogoutClick() {
      this.logout();
    }
  },

  computed: {
    ...mapState(["sesion", "formLogin"]),

    loginEmail: {
      get() {
        return this.formLogin.email;
      },
      set(valor) {
        this.ACTUALIZAR_INPUT_LOGIN_EMAIL(valor);
      }
    },

    loginPassword: {
      get() {
        return this.formLogin.password;
      },
      set(valor) {
        this.ACTUALIZAR_INPUT_LOGIN_PASSWORD(valor);
      }
    }
  },

  mounted() {
    setTimeout(() => {
      this.leftDrawerOpen = false;
    }, 3000);
  }
};
</script>
