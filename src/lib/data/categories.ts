import carniceria from "@/assets/img/categories/comercio/carniceria.svg"
import panaderia from "@/assets/img/categories/comercio/panaderia.svg"
import farmacia from "@/assets/img/categories/comercio/farmacia.svg"
import verduleria from "@/assets/img/categories/comercio/verduleria.svg"
import almacen from "@/assets/img/categories/comercio/almacen.svg"
import supermercado from "@/assets/img/categories/comercio/supermercado.svg"
import cajero_automatico from "@/assets/img/categories/comercio/cajero_automatico.png"

import cultura from "@/assets/img/categories/equipamiento_basico/cultura.svg"
import educacion from "@/assets/img/categories/equipamiento_basico/educacion.svg"
import deporte from "@/assets/img/categories/equipamiento_basico/deporte.svg"
import salud from "@/assets/img/categories/equipamiento_basico/salud.svg"

import espacios_verdes from "@/assets/img/categories/espacios_verdes/espacios_verdes.svg"

import estaciones_de_bicicleta from "@/assets/img/categories/movilidad/estaciones_de_bicicleta.png"
import paradas_de_colectivo from "@/assets/img/categories/movilidad/paradas_d_colectivo.png"

export const categories = [
      {
        "name": "comercio",
        "color" : "#2790a5",
        "subcategories": [
          { "name": "carniceria", 
            "icons": {
              "enable": carniceria, 
            }
          },
          { "name": "panaderia",
            "icons": {
              "enable": panaderia,
            }
          },
          { "name": "farmacia",
            "icons": {
              "enable": farmacia,
            }
          },
          { "name": "verduleria",
            "icons": {
              "enable": verduleria,
            }
          },
          { "name": "almacen",
            "icons": {
              "enable": almacen,
            }
          },
          { "name": "supermercado",
            "icons": {
              "enable": supermercado,
            }
          },
          { "name": "cajero_automatico",
            "icons": {
              "enable": cajero_automatico,
            }
          }
        ]
      },
      {
        "name": "equipamiento_basico",
        "color" : "#ee3f75",
        "subcategories": [
          { "name": "cultura",
            "icons": {
              "enable": cultura,
            }
          },
          { "name": "educacion",
            "icons": {
              "enable": educacion,
            }
          },
          { "name": "deporte",
            "icons": {
              "enable": deporte,
            }
          },
          { "name": "salud",
            "icons": {
              "enable": salud,
            }
          }
        ]
      },
      {
        "name": "espacios_verdes",
        "color" : "#a3cf62",
        "subcategories": [
          { "name": "espacios_verdes",
            "icons": {
              "enable": espacios_verdes,
            }
          }
        ]
      },
      {
        "name": "movilidad",
        "color" : "#ffffff",
        "iconColor": "#2790a5",
        "subcategories": [
          { "name": "estaciones_de_bicicleta",
            "icons": {
              "enable": estaciones_de_bicicleta,
            }
          },
          { "name": "paradas_de_colectivo",
            "icons": {
              "enable": paradas_de_colectivo,
            }
          }
        ]
      }
]
