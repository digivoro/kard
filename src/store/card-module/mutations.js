import { Notify } from "quasar";

export function INICIALIZAR_DATOS(state, dataCartas) {
  state.cartas = dataCartas.map(carta => {
    return carta.idTipo === null ? { ...carta, idTipo: 6 } : carta;
  });
}

export function AGREGAR_A_MAZO(state, { carta, zonaMazo }) {
  let mazo = state.mazoConstruido[zonaMazo];
  if (zonaMazo === "principal" || zonaMazo === "sideboard") {
    let cartaBuscada = mazo.find(item => item.idCarta == carta.idCarta);
    if (!cartaBuscada) {
      mazo.push({ ...carta, copias: 1 });
    } else {
      cartaBuscada.copias = cartaBuscada.copias + 1;
    }
  } else if (zonaMazo === "oroInicial" || zonaMazo === "monumento") {
    state.mazoConstruido[zonaMazo] = carta;
  }
}

export function QUITAR_DEL_MAZO(state, { carta, zonaMazo }) {
  let mazo = state.mazoConstruido[zonaMazo];
  let cartaBuscada = mazo.find(item => item.idCarta == carta.idCarta);
  if (cartaBuscada) {
    if (cartaBuscada.copias > 1) {
      cartaBuscada.copias = cartaBuscada.copias - 1;
    } else {
      state.mazoConstruido[zonaMazo] = mazo.filter(
        item => item.idCarta !== carta.idCarta
      );
    }
  } else {
    console.log("La carta no está en este mazo", carta);
  }
}

export function TOGGLE_FILTRO_TIPO(state, tipo) {
  state.filtros.tipos[tipo] = !state.filtros.tipos[tipo];
}

export function ACTUALIZAR_NOMBRE_MAZO(state, valor) {
  state.mazoConstruido.nombre = valor;
}

export function ACTUALIZAR_INPUT_TEXTO(state, valor) {
  state.filtros.texto = valor;
}

export function TOGGLE_PUBLICO(state) {
  state.mazoConstruido.esPublico = !state.mazoConstruido.esPublico;
}
