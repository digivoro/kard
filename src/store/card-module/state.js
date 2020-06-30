export default function() {
  return {
    sesion: {
      usuarioActual: null,
      idJugador: 0
    },

    cartas: [],

    mazoConstruido: {
      nombre: "",
      esPublico: true,
      idFormato: 1, // TODO setear por Select
      texto: "Este es un mazo", // TODO setear por Dialog
      principal: [],
      sideboard: [],
      oroInicial: {},
      monumento: {}
    },

    mazosJugador: [],

    filtros: {
      tipos: {
        aliado: true,
        talisman: true,
        arma: true,
        totem: true,
        oro: true,
        monumento: true
      }
    }
  };
}
