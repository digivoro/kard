// import Axios from "axios";
import { firebaseAuth, firebaseDb } from "../../boot/firebase";

const cartasRef = firebaseDb.collection("cartas");

export async function obtenerCartas({ commit }) {
  try {
    let collection = await cartasRef.limit(20).get();
    let cartas = collection.docs.map(doc => {
      return { id: doc.id, data: doc.data() };
    });
    console.log("cartas:", cartas);
    commit("INICIALIZAR_DATOS", cartas);
  } catch (error) {
    console.log(error);
  }
}
