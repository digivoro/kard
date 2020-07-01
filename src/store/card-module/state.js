export default function() {
  return {
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

    tipos: [
      {
        id: 1,
        nombre: "aliado",
        label: "Aliado",
        image: "icons/png/guerrero-color.png",
        disabledImage: "icons/png/guerrero-line.png",
        disabled: false
      },
      {
        id: 2,
        nombre: "talisman",
        label: "Talismán",
        image: "icons/png/talisman-color.png",
        disabledImage: "icons/png/talisman-line.png",
        disabled: false
      },
      {
        id: 3,
        nombre: "arma",
        label: "Arma",
        image: "icons/png/espada-color.png",
        disabledImage: "icons/png/espada-line.png",
        disabled: false
      },
      {
        id: 4,
        nombre: "totem",
        label: "Tótem",
        image: "icons/png/totem-color.png",
        disabledImage: "icons/png/totem-line.png",
        disabled: false
      },
      {
        id: 5,
        nombre: "monumento",
        label: "Monumento",
        image: "icons/png/piramide-color.png",
        disabledImage: "icons/png/piramide-line.png",
        disabled: false
      },
      {
        id: 6,
        nombre: "oro_basico",
        label: "Oro Básico",
        image: "icons/png/oro-color.png",
        disabledImage: "icons/png/oro-line.png",
        disabled: false
      },
      {
        id: 7,
        nombre: "oro_habilidad",
        label: "Oro Habilidad",
        image: "icons/png/lampara-color.png",
        disabledImage: "icons/png/lampara-line.png",
        disabled: false
      }
    ],

    mazosJugador: [],

    filtros: {
      tipos: {
        aliado: true,
        talisman: true,
        arma: true,
        totem: true,
        oro_basico: true,
        oro_habilidad: true,
        monumento: true
      },
      texto: ""
    }
  };
}
