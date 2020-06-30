export default function() {
  return {
    cartas: [],
    mazoConstruido: {
      principal: [],
      sideboard: [],
      oroInicial: {},
      monumento: {}
    },
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
