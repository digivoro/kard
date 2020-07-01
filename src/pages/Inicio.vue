<template>
  <q-page class="">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md">
        <div class="q-px-md  text-center">
          <h3 class="col-12 cinzel-regular">Bienvenidos</h3>
          <div class="col-12">
            <q-img src="img/logo_myl.png" style="maxWidth: 300px"></q-img>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <q-card class="q-px-lg q-pt-sm q-pb-lg q-ma-lg bg-green-2">
          <h3>Abre una cuenta</h3>
          <h5>Es rápido y fácil.</h5>
          <q-form class="q-gutter-lg" @submit.prevent="onFormSubmit">
            <div class="row">
              <q-input
                v-model="emailInput"
                type="email"
                class="col-7"
                label="Correo electrónico"
              ></q-input>
              <q-input
                v-model="password1Input"
                type="password"
                class="col-7"
                label="Contraseña"
              ></q-input>
              <q-input
                v-model="password2Input"
                type="password"
                class="col-7"
                label="Repite tu contraseña"
              ></q-input>
            </div>
            <q-btn
              type="submit"
              color="primary"
              label="Registrarte"
              push
              no-caps
            >
            </q-btn>
          </q-form>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  methods: {
    ...mapMutations([
      "ACTUALIZAR_INPUT_REGISTRO_EMAIL",
      "ACTUALIZAR_INPUT_REGISTRO_PASSWORD1",
      "ACTUALIZAR_INPUT_REGISTRO_PASSWORD2"
    ]),
    ...mapActions(["registrarUsuario"]),

    onFormSubmit() {
      console.log("Submit");
      this.registrarUsuario();
    }
  },
  computed: {
    ...mapState(["formRegistro"]),

    emailInput: {
      get() {
        return this.formRegistro.email;
      },
      set(valor) {
        this.ACTUALIZAR_INPUT_REGISTRO_EMAIL(valor);
      }
    },

    password1Input: {
      get() {
        return this.formRegistro.password1;
      },
      set(valor) {
        this.ACTUALIZAR_INPUT_REGISTRO_PASSWORD1(valor);
      }
    },

    password2Input: {
      get() {
        return this.formRegistro.password2;
      },
      set(valor) {
        this.ACTUALIZAR_INPUT_REGISTRO_PASSWORD2(valor);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
