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
        "subcategories": [
          { "name": "carniceria", 
            "icons": {
              "enable": comercio,
              "disable": comercio_disabled
            }
          },
          { "name": "panaderia",
            "icons": {
              "enable": comercio,
              "disable": comercio_disabled
            }
          },
          { "name": "farmacia",
            "icons": {
              "enable": comercio,
              "disable": comercio_disabled
            }
          },
          { "name": "verduleria",
            "icons": {
              "enable": comercio,
              "disable": comercio_disabled
            }
          },
          { "name": "almacen",
            "icons": {
              "enable": comercio,
              "disable": comercio_disabled
            }
          },
          { "name": "supermercado",
            "icons": {
              "enable": comercio,
              "disable": comercio_disabled
            }
          },
          { "name": "cajero_automatico",
            "icons": {
              "enable": comercio,
              "disable": comercio_disabled
            }
          }
        ]
      },
      {
        "name": "equipamiento_basico",
        "subcategories": [
          { "name": "cultura",
            "icons": {
              "enable": equipamiento_basico,
              "disable": equipamiento_basico_disabled
            }
          },
          { "name": "educacion",
            "icons": {
              "enable": equipamiento_basico,
              "disable": equipamiento_basico_disabled
            }
          },
          { "name": "deporte",
            "icons": {
              "enable": equipamiento_basico,
              "disable": equipamiento_basico_disabled
            }
          },
          { "name": "salud",
            "icons": {
              "enable": equipamiento_basico,
              "disable": equipamiento_basico_disabled
            }
          }
        ]
      },
      {
        "name": "espacios_verdes",
        "subcategories": [
          { "name": "espacios_verdes",
            "icons": {
              "enable": espacios_verdes,
              "disable": espacios_verdes_disabled
            }
          }
        ]
      },
      {
        "name": "movilidad",
        "subcategories": [
          { "name": "metrotranvia",
            "icons": {
              "enable": movilidad,
              "disable": movilidad_disabled
            }
          },
          { "name": "estaciones_de_bicicleta",
            "icons": {
              "enable": movilidad,
              "disable": movilidad_disabled
            }
          },
          { "name": "paradas_de_colectivo",
            "icons": {
              "enable": movilidad,
              "disable": movilidad_disabled
            }
          }
        ]
      }
]
