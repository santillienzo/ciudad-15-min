import comercio from "@/assets/img/categories/comercio.png"
import comercio_disabled from "@/assets/img/categories/comercio_disabled.png"
import equipamiento_basico from "@/assets/img/categories/basico.png"
import equipamiento_basico_disabled from "@/assets/img/categories/basico_disabled.png"
import espacios_verdes from "@/assets/img/categories/espacio_verde.png"
import espacios_verdes_disabled from "@/assets/img/categories/espacio_verde_disabled.png"
import movilidad from "@/assets/img/categories/movilidad.png"
import movilidad_disabled from "@/assets/img/categories/movilidad_disabled.png"

export const categories = [
      {
        "name": "comercio",
        "icons": {
          "enable": comercio,
          "disable": comercio_disabled
        },
        "subcategories": [
          { "name": "carniceria" },
          { "name": "panaderia" },
          { "name": "farmacia" },
          { "name": "verduleria" },
          { "name": "almacen" },
          { "name": "supermercado" },
          { "name": "cajero_automatico" }
        ]
      },
      {
        "name": "equipamiento_basico",
        "icons": {
          "enable": equipamiento_basico,
          "disable": equipamiento_basico_disabled
        },
        "subcategories": [
          { "name": "cultura" },
          { "name": "educacion" },
          { "name": "deporte" },
          { "name": "salud" }
        ]
      },
      {
        "name": "espacios_verdes",
        "icons": {
          "enable": espacios_verdes,
          "disable": espacios_verdes_disabled
        },
        "subcategories": [
          { "name": "espacios_verdes" }
        ]
      },
      {
        "name": "movilidad",
        "icons": {
          "enable": movilidad,
          "disable": movilidad_disabled
        },
        "subcategories": [
          { "name": "metrotranvia" },
          { "name": "estaciones_de_bicicleta" },
          { "name": "paradas_de_colectivo" }
        ]
      }
]
