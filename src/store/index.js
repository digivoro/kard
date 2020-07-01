import Vue from "vue";
import Vuex from "vuex";
import { firebaseAuth, firebaseDb } from "../boot/firebase";
import { Notify } from "quasar";
import cardModule from "./card-module";

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      advancedFilter: false,

      sesion: {
        usuarioActual: null,
        jugador: {
          idJugador: 0
        }
      },

      formRegistro: {
        email: "",
        password1: "",
        password2: ""
      },

      formLogin: {
        email: "",
        password: ""
      }
    },

    mutations: {
      TOGGLE_ADVANCED_FILTER: state => {
        state.advancedFilter = !state.advancedFilter;
      },

      ACTUALIZAR_INPUT_REGISTRO_EMAIL(state, valor) {
        state.formRegistro.email = valor;
      },

      ACTUALIZAR_INPUT_REGISTRO_PASSWORD1(state, valor) {
        state.formRegistro.password1 = valor;
      },

      ACTUALIZAR_INPUT_REGISTRO_PASSWORD2(state, valor) {
        state.formRegistro.password2 = valor;
      },

      REGISTRAR_USUARIO(state) {},

      LOGIN_USUARIO(state) {},

      SET_CURRENT_USER(state, usuarioActual) {
        state.sesion.usuarioActual = usuarioActual;
      }
    },

    actions: {
      registrarUsuario: async function({ commit, state }) {
        let { email, password1 } = state.formRegistro;
        try {
          let res = await firebaseAuth.createUserWithEmailAndPassword(
            email,
            password1
          );
          console.log(res);
          Notify.create({
            message: `Se registró al usuario ${res.user.email}`,
            type: "positive"
          });
        } catch (error) {
          console.log(error);
          Notify.create({ message: error.message, type: "negative" });
        }
      },

      getCurrentUser: async function({ commit }) {
        try {
          let currentUser = await firebaseAuth.currentUser;
          commit("SET_CURRENT_USER", currentUser);
        } catch (error) {
          console.log(error);
        }
      }
    },

    getters: {},

    modules: {
      cardModule
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
