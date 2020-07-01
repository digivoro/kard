// import Axios from "axios";
import { firebaseAuth, firebaseDb } from "../../boot/firebase";
import { Notify } from "quasar";

const cartasRef = firebaseDb.collection("cartas");
const mazosRef = firebaseDb.collection("mazos");

export async function obtenerCartas({ commit }) {
  try {
    let collection = await cartasRef.limit(200).get();
    let cartas = collection.docs.map(doc => {
      return { docId: doc.id, ...doc.data() };
    });
    commit("INICIALIZAR_DATOS", cartas);
  } catch (error) {
    console.log(error);
  }
}

export async function obtenerMazos({ commit }) {
  try {
    let collection = await mazosRef.limit(20).get();
    let mazos = collection.docs.map(doc => {
      return { docId: doc.id, ...doc.data() };
    });
    commit("INICIALIZAR_MAZOS", mazos);
  } catch (error) {
    console.log(error);
  }
}

export async function guardarMazo({ commit, state, rootState }) {
  let usuario = rootState.sesion.usuarioActual;
  let { esPublico, idFormato, texto, nombre } = state.mazoConstruido;
  let detalleMazo = {
    principal: state.mazoConstruido.principal,
    sideboard: state.mazoConstruido.sideboard,
    oroInicial: state.mazoConstruido.oroInicial,
    monumento: state.mazoConstruido.monumento
  };

  let mazo = {
    nombre,
    texto,
    esPublico: esPublico ? 1 : 0,
    idFormato,
    usuario,
    detalleMazo
  };

  try {
    await mazosRef.add(mazo).then(docRef => {
      return docRef.id;
    });
    Notify.create({
      message: `Mazo guardado correctamente :)`,
      type: "positive"
    });
  } catch (error) {
    Notify.create({ message: `${error.message} :(`, type: "negative" });
  }
}
