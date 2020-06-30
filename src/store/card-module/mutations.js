export function INICIALIZAR_DATOS(state, datos) {
  state.cartas = datos;
}

export function AGREGAR_A_MAZO(state, { carta, zonaMazo }) {
  let mazo = state.mazoConstruido[zonaMazo];
  let cartaBuscada = mazo.find(
    cartaBuscada => cartaBuscada.idCarta == carta.idCarta
  );
  if (!cartaBuscada) {
    mazo.push({ ...carta, copias: 1 });
  } else {
    cartaBuscada.copias = cartaBuscada.copias + 1;
  }
}

export function TOGGLE_FILTRO_TIPO(state, tipo) {
  state.filtros.tipos[tipo] = !state.filtros.tipos[tipo];
}
