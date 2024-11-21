import carniceria from "@/assets/img/categories/comercio/carniceria.svg"
import carniceria_disabled from "@/assets/img/categories/comercio/carniceria_disabled.png"
import panaderia from "@/assets/img/categories/comercio/panaderia.svg"
import panaderia_disabled from "@/assets/img/categories/comercio/panaderia_disabled.png"
import farmacia from "@/assets/img/categories/comercio/farmacia.svg"
import farmacia_disabled from "@/assets/img/categories/comercio/farmacia_disabled.png"
import verduleria from "@/assets/img/categories/comercio/verduleria.svg"
import verduleria_disabled from "@/assets/img/categories/comercio/verduleria_disabled.png"
import almacen from "@/assets/img/categories/comercio/almacen.svg"
import almacen_disabled from "@/assets/img/categories/comercio/almacen_disabled.png"
import supermercado from "@/assets/img/categories/comercio/supermercado.svg"
import supermercado_disabled from "@/assets/img/categories/comercio/supermercado_disabled.png"
import cajero_automatico from "@/assets/img/categories/comercio/cajero_automatico.png"
import cajero_automatico_disabled from "@/assets/img/categories/comercio/cajero_automatico_disabled.png"

import cultura from "@/assets/img/categories/equipamiento_basico/cultura.svg"
import cultura_disabled from "@/assets/img/categories/equipamiento_basico/cultura_disabled.png"
import educacion from "@/assets/img/categories/equipamiento_basico/educacion.svg"
import educacion_disabled from "@/assets/img/categories/equipamiento_basico/educacion_disabled.png"
import deporte from "@/assets/img/categories/equipamiento_basico/deporte.svg"
import deporte_disabled from "@/assets/img/categories/equipamiento_basico/deporte_disabled.png"
import salud from "@/assets/img/categories/equipamiento_basico/salud.svg"
import salud_disabled from "@/assets/img/categories/equipamiento_basico/salud_disabled.png"

import espacios_verdes from "@/assets/img/categories/espacios_verdes/espacios_verdes.svg"
import espacios_verdes_disabled from "@/assets/img/categories/espacios_verdes/espacios_verdes_disabled.png"

import metrotranvia from "@/assets/img/categories/movilidad/metrotranvia.svg"
import metrotranvia_disabled from "@/assets/img/categories/movilidad/metrotranvia_disabled.png"
import estaciones_de_bicicleta from "@/assets/img/categories/movilidad/estaciones_de_bicicleta.png"
import estaciones_de_bicicleta_disabled from "@/assets/img/categories/movilidad/estaciones_de_bicicleta_disabled.png"
import paradas_de_colectivo from "@/assets/img/categories/movilidad/paradas_d_colectivo.png"
import paradas_de_colectivo_disabled from "@/assets/img/categories/movilidad/paradas_de_colectivo_disabled.png"

export const categories = [
      {
        "name": "comercio",
        "color" : "#2790a5",
        "subcategories": [
          { "name": "carniceria", 
            "icons": {
              "enable": carniceria,
              "disable": carniceria_disabled
            }
          },
          { "name": "panaderia",
            "icons": {
              "enable": panaderia,
              "disable": panaderia_disabled
            }
          },
          { "name": "farmacia",
            "icons": {
              "enable": farmacia,
              "disable": farmacia_disabled
            }
          },
          { "name": "verduleria",
            "icons": {
              "enable": verduleria,
              "disable": verduleria_disabled
            }
          },
          { "name": "almacen",
            "icons": {
              "enable": almacen,
              "disable": almacen_disabled
            }
          },
          { "name": "supermercado",
            "icons": {
              "enable": supermercado,
              "disable": supermercado_disabled
            }
          },
          { "name": "cajero_automatico",
            "icons": {
              "enable": cajero_automatico,
              "disable": cajero_automatico_disabled
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
              "disable": cultura_disabled
            }
          },
          { "name": "educacion",
            "icons": {
              "enable": educacion,
              "disable": educacion_disabled
            }
          },
          { "name": "deporte",
            "icons": {
              "enable": deporte,
              "disable": deporte_disabled
            }
          },
          { "name": "salud",
            "icons": {
              "enable": salud,
              "disable": salud_disabled
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
              "disable": espacios_verdes_disabled
            }
          }
        ]
      },
      {
        "name": "movilidad",
        "color" : "#ffffff",
        "iconColor": "#2790a5",
        "subcategories": [
          { "name": "metrotranvia",
            "icons": {
              "enable": metrotranvia,
              "disable": metrotranvia_disabled
            }
          },
          { "name": "estaciones_de_bicicleta",
            "icons": {
              "enable": estaciones_de_bicicleta,
              "disable": estaciones_de_bicicleta_disabled
            }
          },
          { "name": "paradas_de_colectivo",
            "icons": {
              "enable": paradas_de_colectivo,
              "disable": paradas_de_colectivo_disabled
            }
          }
        ]
      }
]
