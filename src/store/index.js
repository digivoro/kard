import Vue from "vue";
import Vuex from "vuex";

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
      }
    },

    mutations: {
      TOGGLE_ADVANCED_FILTER: state => {
        state.advancedFilter = !state.advancedFilter;
      }
    },

    actions: {},

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
