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

export function getGrillaCartas(state, getters) {
  let grillaFiltrada = getters.grillaFiltradaPorTipo.filter(carta =>
    getters.getGrillaFiltradaPorTexto.includes(carta)
  );

  return grillaFiltrada;
}

export function getGrillaFiltradaPorTipo(state) {
  let filtrosTipo = [];
  for (const key in state.filtros.tipos) {
    if (state.filtros.tipos[key]) {
      filtrosTipo.push(key);
    }
  }
  // console.log("filtrando Tipos:", filtrosTipo);

  const getTipoPorId = idTipo => {
    let tipoEncontrado = state.tipos.find(tipo => tipo.id === idTipo);
    // console.log("Tipo Encontrado:", tipoEncontrado.nombre);
    return tipoEncontrado.nombre;
  };

  let grillaFiltradaPorTipo = state.cartas.filter(carta => {
    // console.log(carta.idTipo);
    let tipo = getTipoPorId(carta.idTipo);
    return filtrosTipo.includes(tipo);
  });
  // console.log("Grilla filtrada por tipo:", grillaFiltradaPorTipo);
  return grillaFiltradaPorTipo;
}

export function getGrillaFiltradaPorTexto(state, getters) {
  let textoBuscado = state.filtros.texto.toLowerCase();
  console.log("texto buscado:", textoBuscado);
  if (textoBuscado) {
    return state.cartas.filter(carta =>
      `${carta.nombre} ${carta.texto}`.toLowerCase().includes(textoBuscado)
    );
  } else {
    return state.cartas;
  }
}
