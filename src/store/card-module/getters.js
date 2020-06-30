export function getMazoPrincipal(state) {
  return state.mazoConstruido.principal;
}

export function getSideboard(state) {
  return state.mazoConstruido.sideboard;
}

export function getOroInicial(state) {
  return state.mazoConstruido.oroInicial;
}

export function getMonumento(state) {
  return state.mazoConstruido.monumento;
}

export function getGrillaCartas(state) {
  return state.cartas.map(carta => carta.data);
}
