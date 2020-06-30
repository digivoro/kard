// import Axios from "axios";
import { firebaseAuth, firebaseDb } from "../../boot/firebase";
import { LoadingBar } from "quasar";

const cartasRef = firebaseDb.collection("cartas");
const mazosRef = firebaseDb.collection("mazos");

export async function obtenerCartas({ commit }) {
  try {
    // LoadingBar.start();
    let collection = await cartasRef.limit(20).get();
    let cartas = collection.docs.map(doc => {
      return { id: doc.id, data: doc.data() };
    });
    console.log("cartas:", cartas);
    commit("INICIALIZAR_DATOS", cartas);
    // LoadingBar.stop();
  } catch (error) {
    console.log(error);
  }
}

export async function guardarMazo({ commit, state }) {
  let { idJugador } = state.sesion;
  let { esPublico, idFormato, texto, nombre } = state.mazoConstruido;
  let mazo = {
    nombre,
    texto,
    esPublico: esPublico ? 1 : 0,
    idFormato,
    idJugador
  };
  await mazosRef.add(mazo).then(docRef => {
    return docRef.id;
  });

  commit("AGREGAR_MAZO");
}
